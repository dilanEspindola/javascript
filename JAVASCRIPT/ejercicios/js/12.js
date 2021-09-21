let nombres = [45, 12, 42, 2];

if(nombres.length == 0){
    alert("el arreglo esta vacio");
}
else{
    alert("el arreglo no esta vacio " + nombres.length);    
    nombres.sort();
    for(let i = 0; i < nombres.length; i++){
        if(i == 3){
            document.write(nombres[i] + ".");
        }
        else{
            document.write(nombres[i] + ", ");
        }     
    }                
}