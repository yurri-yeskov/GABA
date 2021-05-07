const {Book, User} = require('../db/models');

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const seedDatabase = async() => {
    console.log("Seeding database");
    const users = await Promise.all([
        User.create({
            name: "User 1", username: "User_1", zipcode: "10065", email: "user1_gmail.com", password: "0a705a11a09a5c10e447fcd5a3162add9593991324e7b19f6bd0f8c0ac13ea4a9047449be1098fde3039fd35c6148b05e1fad9caed13f79b58dfa71ce9a290f9", salt: "4c4c287bea"
        }),
        User.create({
            name: "User 2", username: "User_2", zipcode: "10012", email: "user1_gmail.com", password: "c06052f6b65ea19846eff72a8df40b22ff06049913f541af0ce2d42898ecedc14a929f69b1ad3ade1f5bda83081596a6017abc7dd67efd6aa1881ad3bb107def", salt: "c94f64d846"
        }),
        User.create({
            name: "User 3", username: "User_3", zipcode: "10021", email: "user1_gmail.com", password: "41c00defc83151b6d540403b50a527d357fe084075249e747746d37e119ae3544da864997cca4d2f5cd846715020cb66be72605614894873e10b16e96224d512", salt: "c94f64d846"
        }),
        User.create({
            name: "User 4", username: "User_4", zipcode: "11364", email: "user1_gmail.com", password: "0d9dfa158542fa6a3480fcadddcf5402a9ae40f8dad233e77ca7e8a10a294858db9990b1494c17dda4e1fecc25056acabcb19fc2699968f9ff6d2d2b6b4c128f", salt: "c94f64d846"
        }),
        User.create({
            name: "User 5", username: "User_5", zipcode: "11370", email: "user1_gmail.com", password: "a03dd8455fc917740834539ccec2aa23821d12664ab8a23bf0921ade44b5a5d34fca2e5be653ea0fe666c3b2e0dee2f2146d99bc2c18e6e42367bb62addefada", salt: "c94f64d846"
        }),
        User.create({
            name: "User 6", username: "User_6", zipcode: "11229", email: "user1_gmail.com", password: "846cd9968088dfb665fe03e7d14ef446bcb0edc2de837cfbc0a9b50f4fb5777311444059468e8f4ca6ea564f2b32da6c0f4ab029888fc178982d49972bdee63b", salt: "c94f64d846"
        })
    ]);

    console.log("Users seeded");

    const books = await Promise.all([
        Book.create({
            title: "JavaScript: The Good Parts", author: "Douglas Crockford", isbn: "9780596554873", preview_image: "http://books.google.com/books/content?id=PXa2bby0oQ0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }),
        Book.create({
            title: "The Great Gatsby", author: "F. Scott Fitzgerald", isbn: "9789390287154", preview_image: "http://books.google.com/books/content?id=zWvuDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }),
        Book.create({
            title: "Hamlet", author: "William Shakespeare", isbn: "1555763332", preview_image: "http://books.google.com/books/content?id=GxTWsfd82SwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }),
        Book.create({
            title: "Hamlet", author: "William Shakespeare", isbn: "1555763332", preview_image: "http://books.google.com/books/content?id=GxTWsfd82SwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }),
        Book.create({
            title: "JavaScript: The Good Parts", author: "Douglas Crockford", isbn: "9780596554873", preview_image: "http://books.google.com/books/content?id=PXa2bby0oQ0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }),
        Book.create({
            title: "The Book Thief", author: "Markus Zusak", isbn: "9781473541870", preview_image: "http://books.google.com/books/content?id=FNF1CwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        }),
        Book.create({
            title: "Crime and Punishment", author: "Fyodor Dostoevsky", isbn: "9781473382886", preview_image: "http://books.google.com/books/content?id=bBl5CgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }),
        Book.create({
            title: "The Lord of the Rings", author: "J.R.R. Tolkien", isbn: "9780547951942", preview_image: "http://books.google.com/books/content?id=yl4dILkcqm4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }),
        Book.create({
            title: "The Catcher in the Rye", author: "J. D. Salinger", isbn: "0848832914", preview_image: "http://books.google.com/books/content?id=Bb91ngEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        }),
        Book.create({
            title: "Don Quixote", author: "Miguel de Cervantes Saavedra", isbn: "1853267953", preview_image: "http://books.google.com/books/content?id=FICLzcp22b8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }),
        Book.create({
            title: "To Kill a Mockingbird", author: "Harper Lee", isbn: "9780062368683", preview_image: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }),
        Book.create({
            title: "The Complete Chronicles of Narnia", author: "C. S. Lewis", isbn: "0007241348", preview_image: "http://books.google.com/books/content?id=2Z0eNAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        }),
        Book.create({
            title: "1984", author: "George Orwell", isbn: "9780547249643", preview_image: "http://books.google.com/books/content?id=kotPYEqx7kMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }),
        Book.create({
            title: "Nick", author: "Michael Farris Smith", isbn: "9780316529754", preview_image: "http://books.google.com/books/content?id=R2DhDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        }),
        Book.create({
            title: "The Great Gatsby", author: "F. Scott Fitzgerald", isbn: "9789898559425", preview_image: "http://books.google.com/books/content?id=9cFdAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }),
        Book.create({
            title: "The Hobbit", author: "J.R.R. Tolkien", isbn: "9780544115552", preview_image: "http://books.google.com/books/content?id=OlCHcjX0RT4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }),
        Book.create({
            title: "One Hundred Years of Solitude", author: "Gabriel Garcia Marquez", isbn: "9780060531041", preview_image: "http://books.google.com/books/content?id=pgPWOaOctq8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }),
        Book.create({
            title: "War and Peace", author: "Leo Tolstoy", isbn: "1904633854", preview_image: "http://books.google.com/books/content?id=s-OQ2yHDIMQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }),
        Book.create({
            title: "The Grapes of Wrath", author: "John Steinbeck", isbn: "0141394889", preview_image: "http://books.google.com/books/content?id=oGUPnwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        }),
        Book.create({
            title: "The Adventures of Huckleberry Finn Illustrated", author: "Mark Twain", isbn: "9798707733857", preview_image: "http://books.google.com/books/content?id=_fE3zgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        }),
        Book.create({
            title: "Cat's Cradle", author: "Kurt Vonnegut", isbn: "9780307567277", preview_image: "http://books.google.com/books/content?id=w25sx0G6nRsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }),
        Book.create({
            title: "Cat's Cradle", author: "Kurt Vonnegut", isbn: "9780307567277", preview_image: "http://books.google.com/books/content?id=w25sx0G6nRsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }),
        Book.create({
            title: "Cat's Cradle", author: "Kurt Vonnegut", isbn: "9780307567277", preview_image: "http://books.google.com/books/content?id=w25sx0G6nRsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }),
        Book.create({
            title: "Anna Karenina", author: "Leo Tolstoy", isbn: "9780198748847", preview_image: "http://books.google.com/books/content?id=1DooDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }),
        Book.create({
            title: "Anna Karenina", author: "Leo Tolstoy", isbn: "9780198748847", preview_image: "http://books.google.com/books/content?id=1DooDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }),
        Book.create({
            title: "The Invisible Man", author: "H.G. Wells", isbn: "9781473216846", preview_image: "http://books.google.com/books/content?id=-xyzCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }),
        Book.create({
            title: "The Book Thief", author: "Markus Zusak", isbn: "9781473541870", preview_image: "http://books.google.com/books/content?id=FNF1CwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        }),
        Book.create({
            title: "The Book Thief", author: "Markus Zusak", isbn: "9781473541870", preview_image: "http://books.google.com/books/content?id=FNF1CwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        }),
        Book.create({
            title: "Frankenstein", author: "Mary Wollstonecraft Shelley", isbn: "9780262533287", preview_image: "http://books.google.com/books/content?id=GlT5DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }),
        Book.create({
            title: "Frankenstein", author: "Mary Wollstonecraft Shelley", isbn: "9780262533287", preview_image: "http://books.google.com/books/content?id=GlT5DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }),
        Book.create({
            title: "Animal Farm", author: "George Orwell", isbn: "9780358093152", preview_image: "http://books.google.com/books/content?id=aWypDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }),
        Book.create({
            title: "Animal Farm", author: "George Orwell", isbn: "9780358093152", preview_image: "http://books.google.com/books/content?id=aWypDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }),
        Book.create({
            title: "Animal Farm", author: "George Orwell", isbn: "9780358093152", preview_image: "http://books.google.com/books/content?id=aWypDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }),
        Book.create({
            title: "Harry Potter and the Chamber of Secrets", author: "J.K. Rowling", isbn: "9781781100509", preview_image: "http://books.google.com/books/content?id=5iTebBW-w7QC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }),
        Book.create({
            title: "The Selfish Gene", author: "Richard Dawkins", isbn: "9780191093067", preview_image: "http://books.google.com/books/content?id=WZ9HDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }),
        Book.create({
            title: "The Selfish Gene", author: "Richard Dawkins", isbn: "9780191093067", preview_image: "http://books.google.com/books/content?id=WZ9HDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }),
        Book.create({
            title: "Cosmos", author: "Carl Sagan", isbn: "9780345539434", preview_image: "http://books.google.com/books/content?id=cDKODQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }),
        Book.create({
            title: "Cosmos", author: "Carl Sagan", isbn: "9780345539434", preview_image: "http://books.google.com/books/content?id=cDKODQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }),
        Book.create({
            title: "Cosmos", author: "Carl Sagan", isbn: "9780345539434", preview_image: "http://books.google.com/books/content?id=cDKODQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }),
        Book.create({
            title: "Cosmos", author: "Carl Sagan", isbn: "9780345539434", preview_image: "http://books.google.com/books/content?id=cDKODQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }),
        Book.create({
            title: "A Briefer History of Time", author: "Stephen Hawking", isbn: "9780553804362", preview_image: "http://books.google.com/books/content?id=jNmJDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }),
        Book.create({
            title: "Wonderful Life: The Burgess Shale and the Nature of History", author: "Stephen Jay Gould", isbn: "9780393245202", preview_image: "http://books.google.com/books/content?id=q8BUAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }),
        Book.create({
            title: "Swift 5 for Absolute Beginners", author: "Stefan Kaczmarek", isbn: "9781484248683", preview_image: "http://books.google.com/books/content?id=FUefDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }),
        Book.create({
            title: "C Programming Language", author: "Brian W. Kernighan", isbn: "9780133086218", preview_image: "http://books.google.com/books/content?id=Yi5FI5QcdmYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }),
        Book.create({
            title: "Clean Code", author: "Robert C. Martin", isbn: "9780136083252", preview_image: "http://books.google.com/books/content?id=_i6bDeoCQzsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }),
        Book.create({
            title: "Clean Code", author: "Robert C. Martin", isbn: "9780136083252", preview_image: "http://books.google.com/books/content?id=_i6bDeoCQzsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }),
        Book.create({
            title: "The Economics Book", author: "DK", isbn: "9780241199336", preview_image: "http://books.google.com/books/content?id=joTYBQAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        }),
        Book.create({
            title: "The Greatest Show on Earth", author: "Richard Dawkins", isbn: "9781416594789", preview_image: "http://books.google.com/books/content?id=U8AFxmc76rcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }),
        Book.create({
            title: "Wuthering Heights", author: "Emily Brontë", isbn: "9781438114880", preview_image: "http://books.google.com/books/content?id=fN0gOdKQZD4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }),
        Book.create({
            title: "The Iliad", author: "Homer", isbn: "0472116177", preview_image: "http://books.google.com/books/content?id=sos0paw_-cEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        })
    ])

    console.log("Books seeded");

    for (let i = 0; i < 50; i++) {
        let randomUserId = getRandomInt(6)
        await books[i].setUser(users[randomUserId])
    }

    // await books[0].setUser(users[0]);
    // await books[1].setUser(users[4]);
    // await books[2].setUser(users[5]);
    // await books[3].setUser(users[1]);
    // await books[4].setUser(users[1]);
    // await books[5].setUser(users[2]);
    // await books[6].setUser(users[5]);
}

module.exports = seedDatabase;