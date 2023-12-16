function attachEventsListeners() {
    const convert = document.getElementById('convert');
    const input = document.getElementById('inputDistance');
    const output = document.getElementById('outputDistance');
    const selectInput = document.getElementById('inputUnits');
    const selectOutput = document.getElementById('outputUnits');

    const measureUnits = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    }
    convert.addEventListener('click', () => {

        const inputValue = Number(input.value);
        const selectedInput = Array.from(selectInput.children).filter(x => x.selected);
        const inputMeasure = selectedInput[0].value;
        const selectedOutput = Array.from(selectOutput.children).filter(x => x.selected);
        const outputMeasure = selectedOutput[0].value;

        const convertValue = (inputValue * measureUnits[inputMeasure]) / measureUnits[outputMeasure];

        output.disabled = false;
        output.value = convertValue;
    })
}