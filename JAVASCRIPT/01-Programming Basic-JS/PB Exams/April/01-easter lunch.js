function easterLunch(input){
    let cakes = Number(input[0]) * 3.20;
    let eggs = Number(input[1]) * 4.35;
    let cookies = Number(input[2]) * 5.40;
    let eggPaint = Number(input[1]) * 12 * 0.15;


    let expenses = cakes + eggs + cookies + eggPaint;

    console.log(expenses.toFixed(2));

}



easterLunch (["4",
"4",
"3"])

