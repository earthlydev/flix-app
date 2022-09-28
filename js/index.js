import {PostsController }from './postController.js'

const postsController = new PostsController(0)
//stored values
let title;
let caption;
let imageUrl;

//DOM Elements
let titleText = document.getElementById("title");
let captionText = document.getElementById("caption");
let imageUrlText = document.getElementById("imageUrl");
let postBtn = document.getElementById("postBtn");

//event handlers
function onChange(event){
    console.log(event.target.name, " : ", event.target.value)
    switch(event.target.name){
        case "title": 
            title = event.target.value; break;
        case "caption":
            caption = event.target.value; break;
        case "imageUrl":
            imageUrl = event.target.value; break;
        default:
            throw new Error("Invalid data")
    }
}


function onClick(event){
    const post = {
        title,
        caption,
        imageUrl
    }
    console.log(post)
    //Add new post to PostsControl
    postsController.addPost(title, caption, imageUrl);


}

//Event Listeners
titleText.addEventListener('change', onChange);
captionText.addEventListener('change', onChange);
imageUrlText.addEventListener('change', onChange);
postBtn.addEventListener('click', onClick);


//function to add new post onto DOM 
function addPostCard(post){
    const postHTML = `<div class="col">
    <div class="card text-bg-light border-0">
        <img src="${post.imageUrl}" class="card-img">
            <div class="card-img-overlay">
                <a href="#" class="text-decoration-none"><img src="media/avatar1.png" class="avi-post"><h5 class="card-title d-inline fs-6 fw-light text-white-50">${post.title}</h5></a>
            </div>
            <div class="card-body p-0">
                <div class="d-flex justify-content-end">
                <button type="button" class="btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                </svg></button>
                <button type="button" class="btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
                <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                </svg></button>
                </div>
                <p class="card-text p-2">${post.caption}</p>
            </div>
    </div>
</div>`;
const postContainer = document.getElementById('list-posts');
postContainer.innerHTML += postHTML;
}

// addPostCard({'title': 'title','caption':'This is a caption', 'imageUrl':'https://www.pinclipart.com/picdir/middle/525-5252083_pokemon-png-image-pikachu-pokemon-mystery-dungeon-clipart.png'});

// addPostCard({'title': 'title','caption':'This is a caption', 'imageUrl':'https://www.pinclipart.com/picdir/middle/525-5252083_pokemon-png-image-pikachu-pokemon-mystery-dungeon-clipart.png'});


//Post Local Storage
function loadStorageSampleData(){
    if(!localStorage.getItem("posts")){
        const samplePosts = [
            {
                'title':'juice',
                'imageUrl':'https://www.gs1india.org/media/Juice_pack.jpg',
                'caption':'Orange and Apple juice fresh and delicious'
            },
            {
                'title':'Ruffles Chicken',
                'imageUrl':'./media/sky.jpg',
                'caption':'Ruffles Potato Chips - Chicken'
            }]
        localStorage.setItem("posts", JSON.stringify(samplePosts));
    }

}

function loadPostsFromPostsController(){
    postsController.posts.forEach((e) => {
        let post = e;
        addPostCard(post);
    })
}

loadStorageSampleData();
postsController.loadPostsFromLocalStorage();
loadPostsFromPostsController();