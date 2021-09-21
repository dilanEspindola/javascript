function recogerDatos() {
    let nombre_cliente = document.getElementById("nombre_cliente").value;
    let telefono_cliente = document.getElementById("telefono_cliente").value;
    let correo_cliente = document.getElementById("correo_cliente").value;

    let sabor = "";
    let sabor_vainilla = document.getElementById("vainilla");
    let sabor_chocolate = document.getElementById("chocolate");
    let mixto = document.getElementById("mixto");

    if(sabor_vainilla.checked){
        sabor = sabor_vainilla.value;
    }
    else if(sabor_chocolate.checked){
        sabor = sabor_chocolate.value;
    }
    else if(mixto.checked){
        sabor = mixto.checked;
    }

    let recipiente = "";
    let copa = document.getElementById("copa");
    let tarrina = document.getElementById("tarrina");

    if(copa.checked){
        recipiente = copa.value;
    }
    else if(tarrina.checked){
        recipiente = tarrina.value;
    }

    let extras = [];
    let caramelo = document.getElementById("carameloExtra");
    let kitkat = document.getElementById("kitkatExtra");
    let chocolate = document.getElementById("chocolateExtra");

    if(caramelo.checked){
        extras.push(caramelo.value);        
    }
    if(kitkat.checked){
        extras.push(kitkat.value);
    }
    if(chocolate.checked){
        extras.push(chocolate.checked);
    }

    let mensajeFinal = "El cliente: " + nombre_cliente +
                    ", telefono: " + telefono_cliente +
                    ", email: "+ correo_cliente + 
                    " ha elegido: " + sabor +
                    " en un recipiente: " + recipiente +
                    " con los siguientes extras: " + extras;
    
    for(let i = 0; extras.length; i++){
        const element = extras[i];

        mensajeFinal += element + " ";
    }

    console.log(mensajeFinal);

}