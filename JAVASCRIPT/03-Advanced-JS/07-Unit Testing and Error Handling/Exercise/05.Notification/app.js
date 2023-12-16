function notify(message) {
  let notification = document.getElementById('notification');

  notification.style.display = 'block';
  notification.innerText = message;

  notification.addEventListener('click', ()=>{
    notification.style.display = 'none';
  })
}