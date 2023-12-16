function solution(string) {
    let report = [];
    let rating;

    if (string === 'upvote') {
        this.upvotes += 1;
    } else if (string === 'downvote') {
        this.downvotes += 1;
    } else if (string === 'score') {
        if (this.upvotes + this.downvotes > 50) {
            let maxNumber = Math.max(this.upvotes, this.downvotes);
            let increment = Math.ceil(maxNumber * 0.25);
            report.push(this.upvotes + increment);
            report.push(this.downvotes + increment);
        } else {
            report.push(this.upvotes);
            report.push(this.downvotes);
        }

        report.push(this.upvotes - this.downvotes);

        if (this.upvotes + this.downvotes < 10) {
            rating = 'new';
        } else if (this.upvotes > (this.upvotes + this.downvotes) * 0.66)  {
            rating = 'hot'
        } else if (this.upvotes - this.downvotes >= 0 && this.upvotes + this.downvotes > 100) {
            rating = 'controversial';
        } else if (this.upvotes - this.downvotes < 0) {
            rating = 'unpopular'
        } else {
            rating = 'new';
        }
        report.push(rating);

        return report;
    }

}






let post = {
    id: '3',
    author: 'emil', content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
solution.call(post, 'upvote');
// let score = solution.call(post, 'score');

solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
console.log(score);
// solution.call(post, 'downvote'); // (executed 50 times)
for(let i = 0; i < 50; i++){
    solution.call(post, 'downvote');
}
score = solution.call(post, 'score'); // [139, 189, -50, 'unpopular']
console.log(score);