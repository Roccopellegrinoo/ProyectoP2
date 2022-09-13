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
foto: '/images/usuarios/usuario_betty.jpeg',
mail: 'Labetty@gmail.com',
contrasenia: 'contrasenia13',
nacimiento: '1995-11-05',
DNI: '41440334',

}, 
{id: 3,
nombre:'Juana', 
username:'Juanitaok',
foto: '/images/usuarios/usuario_juani.jpeg',
mail: 'Juanitaok@gmail.com',
contrasenia: 'contrasenia13',
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


posteos:[
    {
    id_posteo : 1,
    foto:'/images/posteos/posteo1.jpeg',
    texto:'Modelo verano',
    username: 'AnteojosRoberto',
    comentarios :[
        {
            id_usuario : 1,
            nombre : 'Juana',
            texto : 'Muy buena foto'
        },
        {
            id_usuario : 2,
            nombre : 'Betty',
            texto : 'Muy linda'
        }
    ]
    },{
        id_posteo : 2,
        foto:'/imagenes/posteos/posteos2.jpeg',
        texto:'Modelo verano',
        username: 'La Betty',
        comentarios :[
            {
                id_usuario : 1,
                nombre : 'Anita',
                texto : 'Muy buenos anteojos'
            },
            {
                id_usuario : 2,
                nombre : 'Laura',
                texto : 'Muy buena foto Betty'
            }
        ]
        },{
            id_posteo : 3,
            foto:'/images/posteos/posteo3.jpeg',
            texto:'Modelo verano',
            username: 'Juanitaok',
            comentarios :[
                {
                    id_usuario : 1,
                    nombre : 'Flor',
                    texto : 'Que lindas'
                },
                {
                    id_usuario : 2,
                    nombre : 'Kika',
                    texto : 'Divinas!'
                }
            ]
            },],
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