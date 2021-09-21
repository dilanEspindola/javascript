//funcion que verifica los campos del formulario
function verificar_formulario()
{
    let nombre, email, contraseña, expresiones_regulares;

    nombre = document.getElementById("nombre").value;
    email = document.getElementById("email").value;
    contraseña = document.getElementById("contraseña").value;
    expresiones_regulares = /^[ -\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if((nombre == "") && (email == "") && (contraseña == ""))
    {
        alert("Los campos no pueden estar vacios");
    }
    else if(nombre == "" && email == "")
    {
        alert("Los campos nombre y email no pueden estar vacios");
    }
    else if(nombre == "" && contraseña == "")
    {
        alert("Los campos nombre y contraseña no pueden estar vacios")
    }
    else if(email == "" && contraseña == "")
    {
        alert("Los campos email y contraseña no pueden estar vacios");
    }
    else if(nombre == "")
    {
        alert("El campo 'nombre' no puede estar vacio");
    }
    else if(email == "")
    {
        alert("El campo 'email' no puede estar vacio");
    }
    else if(contraseña == "")
    {
        alert("El campo 'contraseña' no puede estar vacio");
    }   
    else if(!expresiones_regulares.test(email))
    {
        alert("Por favor, ingresa una direccion de correo valida");        
    }
    /*else if((nombre != "") && (email != "") && (contraseña != ""))
    {
        alert("Todos los campos han sido completados");
    } */
    else
    {
        alert("Todos los campos han sido completados");
    }
}