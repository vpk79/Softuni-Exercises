function solve(input){

    let users = [];
    let articles = {};

    for(let line of input){
        if(line.includes('user')) addUser(line);
        if(line.includes('article')) addArticle(line);
        if(line.includes('posts on')) post(line);
    }

    let sortedArticlesArray = Object.keys(articles).sort((a,b) => articles[b].length - articles[a].length);

    let sortedArticles = {};

    for(let article of sortedArticlesArray){
        sortedArticles[article] = articles[article];
    }
    
    Object.values(sortedArticles).forEach(arr => {
        arr.sort((a, b) => {
            const keysA = Object.keys(a);
            const keysB = Object.keys(b);
            return keysA[0].localeCompare(keysB[0]);
        });
    });

    for(let [article, comments] of Object.entries(sortedArticles)){
        console.log(`Comments on ${article}`);
        for(let line of comments){
            for(let [user, comment] of Object.entries(line)){
                console.log(`--- From user ${user}: ${comment}`);
            }
        }
    }

    function addUser(string){
        let username = string.split('user ')[1];
        if(!users.includes(username)){
            users.push(username);
        }
    }

    function addArticle(string){
        let article = string.split('article ')[1]
        if(!articles.hasOwnProperty(article)){
            articles[article] = [];
        }
    }

    function post(string){
        let [user, article, post] = string.split(/ posts on |: /);
        post = post.replace(/,/g, ' -');

        if(users.includes(user) && articles.hasOwnProperty(article)){
            articles[article].push({[user] : post})
        }
    }
}



// solve([
// 'user aUser123',
// 'someUser posts on someArticle: NoTitle, stupidComment',
// 'article Books',
// 'article Movies',
// 'article Shopping',
// 'user someUser',
// 'user uSeR4',
// 'user lastUser',
// 'uSeR4 posts on Books: I like books, I do really like them',
// 'uSeR4 posts on Movies: I also like movies, I really do',
// 'someUser posts on Shopping: title, I go shopping every day',
// 'someUser posts on Movies: Like, I also like movies very much'])

solve(['user Mark', 'Mark posts on someArticle: NoTitle, stupidComment', 'article Bobby',
'article Steven', 'user Liam', 'user Henry', 'Mark posts on Bobby: Is, Ido really like them',
 'Mark posts on Steven: title, Run', 'someUser posts on Movies: Like'])