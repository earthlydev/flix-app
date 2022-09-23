import {PostsController }from './postController.js'

let PostsControl = new PostsController()
//stored values
let title;
let formText;
let imageUrl;
let visible;
let location;

//DOM Elements
let titleText = document.getElementById("title");
let formTextArea = document.getElementById("formText");
let imageUrlText = document.getElementById("imageUrl");
let visibleSelect = document.getElementById("visible");
let locationText = document.getElementById("location");
let postBtn = document.getElementById("postBtn");

//event handlers
function onChange(event){
    console.log(event.target.name, " : ", event.target.value)
    switch(event.target.name){
        case "title": 
            title = event.target.value; break;
        case "formText":
            formText = event.target.value; break;
        case "imageUrl":
            imageUrl = event.target.value; break;
        case "visible":
            visible = event.target.value; break;
        case "location":
            location = event.target.value; break;
        default:
            throw new Error("Invalid data")
    }
}


function onClick(event){
    const post = {
        title,
        formText,
        imageUrl,
        visible,
        location
    }
    console.log(post)
    //Add new post to PostsControl
    PostsControl.addPost(title, formText, imageUrl, visible, location);


}

//Event Listeners
titleText.addEventListener('change', onChange);
formTextArea.addEventListener('change', onChange);
imageUrlText.addEventListener('change', onChange);
visibleSelect.addEventListener('change', onChange);
locationText.addEventListener('change', onChange);
postBtn.addEventListener('click', onClick);
