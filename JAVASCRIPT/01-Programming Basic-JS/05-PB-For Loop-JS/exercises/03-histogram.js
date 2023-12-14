function histogram(input) {
    let numbersCount = Number(input[0]);
    let p1 = [];
    let p2 = [];
    let p3 = [];
    let p4 = [];
    let p5 = [];

    let counter1 = 0;
    let counter2= 0;
    let counter3=0;
    let counter4=0;
    let counter5=0;


    for (let i = 1; i <= numbersCount; i++) {

        if (input[i] < 200) {
            // p1.push(input[i]);
            counter1++;
            
        } else if (input[i] <= 399) {
            // p2.push(input[i]);
            counter2++;

        } else if (input[i] <= 599) {
            // p3.push(input[i]);
            counter3++;
        } else if (input[i] <= 799) {
            // p4.push(input[i]);
            counter4++;
        } else {
           
            counter5++;
        }
    }

    // console.log((p1.length / numbersCount * 100).toFixed(2) + "%");
    // console.log((p2.length / numbersCount * 100).toFixed(2) + "%");
    // console.log((p3.length / numbersCount * 100).toFixed(2) + "%");
    // console.log((p4.length / numbersCount * 100).toFixed(2) + "%");
    // console.log((p5.length / numbersCount * 100).toFixed(2) + "%");

    console.log((counter1/ numbersCount * 100).toFixed(2) + "%");
    console.log((counter2 / numbersCount * 100).toFixed(2) + "%");
    console.log((counter3 / numbersCount * 100).toFixed(2) + "%");
    console.log((counter4 / numbersCount * 100).toFixed(2) + "%");
    console.log((counter5 / numbersCount * 100).toFixed(2) + "%");


}



histogram(["9", "367", "99", "200", "799", "999", "333", "555", "111", "9"])