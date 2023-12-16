function attachEventsListeners() {

    // const mainEvent = document.getElementsByTagName('main')[0];
    const daysBtn = document.getElementById('daysBtn');
    const hoursBtn = document.getElementById('hoursBtn');
    const minutesBtn = document.getElementById('minutesBtn');
    const secondsBtn = document.getElementById('secondsBtn');

    let inputDays = document.getElementById('days');
    let inputHours = document.getElementById('hours');
    let inputMinutes = document.getElementById('minutes');
    let inputSeconds = document.getElementById('seconds');

    

    daysBtn.addEventListener('click', () => {
        inputHours.value = inputDays.value * 24;
        inputMinutes.value = inputDays.value * 1440;
        inputSeconds.value = inputDays.value * 86400;
        console.log('clicked');
       
    })

    hoursBtn.addEventListener('click', () => {
        inputDays.value = inputHours.value / 24;
        inputMinutes.value = inputHours.value * 60;
        inputSeconds.value = inputHours.value * 3600;
    })

    minutesBtn.addEventListener('click', () => {
        inputDays.value = inputMinutes.value / 1440;
        inputHours.value = inputMinutes.value / 60;
        inputSeconds.value = inputMinutes.value * 60;
    })

    secondsBtn.addEventListener('click', () => {
        inputDays.value = inputSeconds.value / 86400;
        inputHours.value = inputSeconds.value / 3600;
        inputMinutes.value = inputSeconds.value / 60;
        
    })

}