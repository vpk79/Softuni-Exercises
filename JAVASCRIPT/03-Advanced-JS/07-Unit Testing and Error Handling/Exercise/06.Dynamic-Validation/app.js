function validate() {
    const pattern = /^[a-z]+@[a-z]+.[a-z]+$/
    const email = document.getElementById('email');
    let text = '';
    email.addEventListener('change', ()=>{
        text = email.value;
        let result = pattern.test(text);
        if(result){
            email.classList = '';
        } else{
            email.className = 'error';
        }
    })
}