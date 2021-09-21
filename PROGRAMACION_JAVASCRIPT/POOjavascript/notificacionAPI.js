//NOTIFICAION API: LLEGA NOPTIFICIIONES

let boton = document.querySelector('#boton');

boton.addEventListener('click', () =>{
    Notification.requestPermission().then(response => console.log(response))

    if(Notification.permission == 'granted'){        
        new Notification('', {
            icon: 'skewb.jpg',
            body: 'code'
        });
        setTimeout(() => {
            alert('granted');
        }, 500)
    }
});