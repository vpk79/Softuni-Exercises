function validate() {
    const usernamePattern = /^[A-Za-z\d]{3,20}$/
    const passwordPattern = /^\w{5,15}$/
    const emailPattern = /.*@.*\..*/;
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPass = document.getElementById('confirm-password');
    const submit = document.getElementById('submit');
    const company = document.getElementById('company');
    const companyInfo = document.getElementById('companyInfo');
    const companyNumber = document.getElementById('companyNumber');
    const valid = document.getElementById('valid');
    
    company.addEventListener('change', ()=>{
       if(validator('checkbox')){
           companyInfo.style.display = 'block';
       } else {
           companyInfo.style.display = 'none';
           companyNumber.value = '';
       }
        
    })

    submit.addEventListener('click', (event)=>{
        event.preventDefault();

        validator('username') ? username.style.border = 'none' : (username.style.border = 'inset', username.style.borderColor = 'red');
        validator('email') ? email.style.border = 'none' : (email.style.border = 'inset', email.style.borderColor = 'red');
        validator('password') ? password.style.border = 'none' : (password.style.border = 'inset', password.style.borderColor = 'red');
        validator('confirm') ? confirmPass.style.border = 'none' : (confirmPass.style.border = 'inset', confirmPass.style.borderColor = 'red');
        validator('password') && validator('confirm') ? (password.style.border = 'none', confirmPass.style.border = 'none') :
         (password.style.border = 'inset', password.style.borderColor = 'red', confirmPass.style.border = 'inset', confirmPass.style.borderColor = 'red');
        
        if (validator('checkbox') && validator('companyNumber')){
            companyNumber.style.border = 'none'
        } else if (validator('checkbox') && !validator('companyNumber')){
            (companyNumber.style.border = 'inset', companyNumber.style.borderColor = 'red');
        } else {
            companyNumber.style.border = 'none';
            companyInfo.style.display = 'none';
        }
         
        if (validator('username') && validator('email') && validator('password') && validator('confirm') && !validator('checkbox')){
            valid.style.display = 'block';
        } else if (validator('username') && validator('email') && validator('password') && validator('confirm') && validator('checkbox') && validator('companyNumber')){
            valid.style.display = 'block';
        } else {
            valid.style.display = 'none';
        } 
    })

    function validator(string){
        if(string === 'username') return usernamePattern.test(username.value); 
        if(string === 'password') return passwordPattern.test(password.value);
        if(string === 'email') return emailPattern.test(email.value);
        if(string === 'confirm') return (confirmPass.value === password.value && confirmPass.value !== '');
        if(string === 'checkbox') return company.checked;
        if(string === 'companyNumber') return (companyNumber.value > 999 && companyNumber.value < 10000);
    }
}
