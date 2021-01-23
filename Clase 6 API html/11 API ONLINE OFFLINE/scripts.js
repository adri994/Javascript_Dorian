const alerta = document.getElementById('alert');

window.addEventListener('online',(e)=>{
    setAlert(1);
})
window.addEventListener('offline',(e)=>{
    setAlert(0);
})

const setAlert = (status) =>{
    alerta.classList.remove('alert--online');
    alerta.classList.remove('alert--offline');

    status === 0 ?
        setTimeout(() => {
            alerta.textContent = "Ups, it seems you're offline"
            alerta.classList.add('alert--offline')
        }, 100) :
        setTimeout(() => {
            alerta.textContent = "Great! You're online again!"
            alerta.classList.add('alert--online')
        }, 100)


}

