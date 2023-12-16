function validate() {
    const input = document.getElementById('email');
    let pattern = /^[a-z]+@[a-z]+[.][a-z]+/;

    input.addEventListener('focus', ()=>{
    })
    input.addEventListener('change', () => {
        let text = input.value;
        let test = pattern.test(text)
        console.log(test);
        if(test){
            input.classList.remove('error')
        } else{
            input.classList.add('error');
        }
    })
    input.addEventListener('blur', () => {
    })
}