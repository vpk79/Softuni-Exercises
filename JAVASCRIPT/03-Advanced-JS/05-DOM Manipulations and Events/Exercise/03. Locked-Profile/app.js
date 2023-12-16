function lockedProfile() {
    const profiles = Array.from(document.getElementsByClassName('profile'));
    let locked = true;

    for (let profile of profiles) {
        profile.addEventListener('click', (event) => {
                        
            let radio = profile.querySelectorAll('input[type="radio"]')

            if(radio[0].checked === true){
                locked = true;
            } else if(radio[1].checked === true){
                locked = false
            }
            if (event.target.innerText === 'Show more' && locked === false) {
                profile.getElementsByTagName('div')[0].style.display = 'block';
                event.target.innerText = 'Hide it';
            } else if (event.target.innerText === 'Hide it' && locked === false){
                profile.getElementsByTagName('div')[0].style.display = 'none';
                event.target.innerText = 'Show more';
            }
        })
    }
}