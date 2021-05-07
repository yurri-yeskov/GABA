import React from 'react'
import '../Styles/ImageIcon.css'

function ImageIcon(props) {
    return(
        <div className={"image-icon-"+props.firstLetter || "image-icon-A"}>
            {props.firstLetter}
        </div>
    )
}
export default ImageIcon;