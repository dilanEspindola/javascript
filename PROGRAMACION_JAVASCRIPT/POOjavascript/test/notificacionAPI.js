//NOTIFICAION API: LLEGA NOPTIFICIIONES

let boton = document.querySelector('#boton');

boton.addEventListener('click', () =>{
    Notification.requestPermission().then((respuesta) => console.log(respuesta))    
});

if(Notification.permission == 'granted'){
    setTimeout(() => {
        new Notification('Esto es una notificaicion', {
            icon: 'skewb.jpg',
            body: 'codigo ...'
        })
    }, 2000)
    
}


