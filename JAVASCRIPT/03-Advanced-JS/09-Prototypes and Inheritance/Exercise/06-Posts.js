function solution(){

    class Post{
        constructor(title, content){
            this.title = title;
            this.content = content;
        }

        toString(){
            let result = `Post: ${this.title}\nContent: ${this.content}`
            return result;
        }
    }

    class SocialMediaPost extends Post{
        constructor(title, content, likes, dislikes){
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment){
            this.comments.push(comment);
        }

        toString(){
            
            let rating = `Rating: ${this.likes - this.dislikes}`
            let commentary = 'Comments:';
            if(this.comments.length !== 0){
                this.comments.forEach(x => commentary += '\n' + ' * ' + x)
                return super.toString() + '\n' + rating + '\n' + commentary;
            }
            return super.toString() + '\n' + rating;
        }

    }

    class BlogPost extends Post{
        constructor(title, content, views){
            super(title, content);
            this.views = views;
        }

        view(){
            this.views += 1;
            return this;
        }

        toString(){
           
            return super.toString() + '\n' + `Views: ${this.views}`
        }

    }
    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}


const classes = solution();
let post = new classes.Post("Post", "Content");
console.log(post.toString());
// Post: Post
// Content: Content
let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);
scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");
console.log(scm.toString());
// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
// * Good post
// * Very good post
// * Wow!
let blog = new classes.BlogPost('Title', 'Content', 30);
blog.view();
blog.view();
console.log(blog.toString());