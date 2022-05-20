//Crear un arreglo con 5 objetos, 
//cada uno de estos objetos debe de tener las propiedades 
//nombre, email y edad, con valores asignados por ti.

    var arrayUser = [
        {nombre:'ismael', email:'ismaelchampy12@gmail.com', edad:26, estado:'puebla', codigoPostal: 72510 },
        {nombre:'monica', email:'monikcarreon@gmail.com', edad:22, estado:'monterrey', codigoPostal: 34310 },
        {nombre:'miguel', email:'miguelsoledad12@gmail.com', edad:44, estado:'queretaro', codigoPostal: 52310 },
        {nombre:'victoria', email:'vicsar1267@gmail.com', edad:33, estado:'guerrero', codigoPostal: 92310 },
        {nombre:'angeles', email:'angee1994@gmail.com', edad:28, estado:'veracruz', codigoPostal: 22310 }
    ]

    var text = 'los valores del array son:' + arrayUser[0].nombre + arrayUser[0].email + arrayUser[0].edad + arrayUser[0].estado + arrayUser[0].codigoPostal;
    console.log(text);

    //Crear un arreglo de nombre correos y 
    //guardar todos los correos que existan 
    //en el arreglo del primer 
    //paso(debes de acceder a los correos apoyandote en lo aprendido anteriormente).

    var correos = [
        {nombre:'ismael', email:'ismaelchampy12@gmail.com' },
        {nombre:'mariana', email:'mariannna132@gmail.com' },
        {nombre:'luis', email:'luismane@gmail.com' },
        {nombre:'raul', email:'rauul12@gmail.com' }
    ]

    var texto = 'los correos existentes son:' + correos[0].email + correos[1].email + correos[2].email + correos[3].email;
    console.log(texto);