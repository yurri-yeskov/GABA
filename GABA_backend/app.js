const express = require("express");
const app = express();
const db = require("./db");
const httpRouter = require("./routes/index.js");
const socketIo = require("socket.io");

const makeDatabase = require("./functions/makeDatabase");
const seedDatabase = require("./functions/seedDatabase");

const http = require("http");
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
  },
});

const cors = require("cors");
const formatMessage = require("./functions/messages");

const PORT = 3500;

io.on("connection", (socket) => {
  socket.on("joinRoom", (chatId) => {
    socket.join(chatId);
  });

  socket.on("leaveRoom", (chatId) => {
    socket.leave(chatId);
  });

  socket.on("iconUpdate", (messageObject) => {
    let formattedMessage = formatMessage(
      messageObject.id,
      messageObject.username,
      messageObject.lineText,
      messageObject.conversationId,
      messageObject.otherUserId
    );
    socket.broadcast.emit("updateRequired", formattedMessage);
    io.to(messageObject.conversationId).emit("message", formattedMessage);
  });
});

io.on("disconnect", (socket) => {
  socket.leave(chatId);
});

const syncDB = async () => {
  try {
    await db.sync({ force: false });
    //UNCOMMENT ONCE IF RESET

    // await db.sync({ force: true });
    // await seedDatabase();
  } catch (error) {
    if (error.name == "SequelizeConnectionError") {
      await makeDatabase(); //uncomment if using local db
      await db.sync({ force: true });
      await seedDatabase();
    } else {
      console.log(error);
    }
  }
};

const utilities = async () => {
  // app.use((req, res, next) => {
  //     res.setHeader("Access-Control-Allow-Origin", "*");
  //     res.setHeader('Access-Control-Allow-Methods', '*');
  //     res.setHeader('Access-Control-Allow-Headers', "*");
  //     next();
  // });

  app.use(cors());

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/api", httpRouter);
  server.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
  });
};

const start = async () => {
  await syncDB();
  await utilities();
};

start();
