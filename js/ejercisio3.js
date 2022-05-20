//Crear un objeto de nombre user con las propiedades 
//nombre, apellidos, y edad, despues de crear el objeto 
//crear una nueva variable llamada nombreCompleto de tipo 
//string y guardar en esta variable el nombre y el apellido 
//concatenados.

    var user = {
        nombre:'ismael',
        apellidos: 'hernandez carreon',
        edad:26
    }

    var nombreCompleto = 'los datos del usuario son:' + user.nombre + user.apellidos;
    console.log(nombreCompleto);