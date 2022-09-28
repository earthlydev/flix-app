export class PostsController {
    constructor(currentId = 0){
        this.posts = [];
        this.currentId = currentId;
    }
    
    addPost(title, caption, imageUrl){
        const newPost = {
            id: this.currentId++,
            title: title,
            caption: caption,
            imageUrl: imageUrl
        }
        this.posts.push(newPost);

        localStorage.setItem("posts", JSON.stringify(this.posts));
    }

    loadPostsFromLocalStorage(){
        const storagePosts = localStorage.getItem("posts")
        if (storagePosts) {
            const posts = JSON.parse(storagePosts)
            for (var i = 0, size = posts.length; i < size; i++) {
                const post = posts[i];
                this.posts.push(post);
            }
        }
    }
}