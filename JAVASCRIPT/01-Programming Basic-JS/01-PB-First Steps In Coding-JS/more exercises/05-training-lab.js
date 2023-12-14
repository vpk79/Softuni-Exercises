function trainingLab(input){
    let length = Number(input[0]) * 100;
    let width = Number(input[1]) * 100;

    let workplaceLength = 70;
    let workplaceWidth = 120;

    let hallWidthWorkplaces = Math.floor((width - 100) / workplaceLength);

    let hallLengthWorkplaces = Math.floor(length / workplaceWidth);

    let workplacesCount = hallWidthWorkplaces * hallLengthWorkplaces - 3;

    console.log(workplacesCount);
}

trainingLab(["8.4", "5.2"])