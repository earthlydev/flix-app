export class PostsController {
    constructor(currentId = 0){
        this.posts = [];
        this.currentId = currentId;
    }
    addPost(title, caption, imgUrl, publicOrNot, location){
        const newPost = {
            id: this.currentId++,
            title: title,
            caption: caption,
            imgUrl: imgUrl,
            publicOrNot: publicOrNot,
            location: location
        }
        this.posts.push(newPost);
    }
}

