const data = {
usuarios:[{
    id: 1,
   nombre:'Roberto', 
   username:'AnteojosRobert',
   foto: '/images/usuarios/usuario_roberto.jpeg',
   mail: 'roberto@gmail.com',
   contrasenia: 'contrasenia12',
   nacimiento: '2002-11-05',
   DNI: '44566344',

},
{
    id: 2,
 nombre:'Beatriz ', 
username:'La Betty',
foto: '/images/usuarios/usuario_roberto.jpeg',
mail: 'Labetty@gmail.com',
contrasenia: 'contrasenia13',
nacimiento: '1995-11-05',
DNI: '41440334',

}, 
{id: 3,
nombre:'Pedrito', 
username:'El Petter',
foto: '/images/usuarios/usuario_roberto.jpeg',
mail: 'PedroVelazco@gmail.com',
contrasenia: 'contrasenia123',
nacimiento: '1991-09-006',
DNI: '40242000',
},
{id:4,
nombre:'Pedrito', 
username:'El Petter',
foto: '/images/usuarios/usuario_roberto.jpeg',
mail: 'PedroVelazco@gmail.com',
contrasenia: 'contrasenia123',
nacimiento: '1991-09-06',
DNI: '40242000',
},
{id: 5,
nombre:'Martha', 
username:'MartitaEnMoto',
foto: '/images/usuarios/usuario_roberto.jpeg',
mail: 'MarthaLamothe@gmail.com',
contrasenia: 'contrasenia34',
nacimiento: '1990-10-07',
DNI: '434568574',
}
],


posteos:[{
    id_posteo : 1,
    foto:'/images/posteos/posteo1.jpeg',
    texto:'Modelo verano',
},{
    id_posteo : 1,
    foto:'/images/posteos/posteo2.jpeg',
    texto:'Ultimo modelo '
},{
    id_posteo : 1,
    foto:'/images/posteos/posteo3.jpeg',
    texto:'Disfruta del verano',
}

],
comentarios : [
    {id_comment :1,
        texto: "Buenardos esos lentes"
    
    },
    {id_comment :2,
        texto: "ke precio tienen esos?"
    
    },
    {id_comment :3,
        texto: "tenes unos mas masculinos?"
    
    },
    {id_comment :4,
        texto: "hay en color negros?"
    
    },

]
}



module.exports = data