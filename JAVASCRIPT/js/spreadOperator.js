let persona = {
    nombre: "laura",
    edad: 45,
    pais: "colombia"
}

let medidas = {
    peso: "gramo",
    distancia: "metro"
}

let personaMedidas = {...persona, ...medidas}
console.log(personaMedidas);