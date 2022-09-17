const data = {
usuarios:[{
    id: 1,
   
   username:'AnteojosRobert',
   foto: '/images/usuarios/usuario_roberto.jpeg',
   mail: 'Robertito@gmail.com',
   contrasenia: 'contrasenia12',
   nacimiento: '2002-11-05',
   DNI: '44566344',
   posteos: 5,
   seguidores : 1250,
   seguidos: 800,

},
{
    id: 2,
 
username:'La Betty',
foto: '/images/usuarios/usuario_betty.jpeg',
mail: 'Labetty@gmail.com',
contrasenia: 'contrasenia13',
nacimiento: '1995-11-05',
DNI: '41440334',
posteos: 3,
   seguidores : 150,
   seguidos: 30,

}, 
{id: 3,

username:'Juanitaok',
foto: '/images/usuarios/usuario_juani.jpeg',
mail: 'Juanitaok@gmail.com',
contrasenia: 'contrasenia14',
nacimiento: '1991-09-06',
DNI: '44366344',
posteos: 4,
   seguidores : 114,
   seguidos: 150,
},
{id:4,
 
username:'El Petter',
foto: '/images/usuarios/usuario_elpetter.jpeg',
mail: 'PedroVelazco@gmail.com',
contrasenia: 'contrasenia123',
nacimiento: '1991-09-06',
DNI: '44242000',
posteos: 30,
   seguidores :100,
   seguidos: 100,
},
{id: 5,
 
username:'MartitaEnMoto',
foto: '/images/usuarios/usuario_martita.jpeg',
mail: 'MarthaLamothe@gmail.com',
contrasenia: 'contrasenia34',
nacimiento: '1990-10-07',
DNI: '434568574',
posteos: 20,
   seguidores : 130,
   seguidos: 49,
}
],


posteos:[
    {
    id_posteo : 1,
    id_usuario:1,
    foto:'/images/posteos/posteo1.jpeg',
    fotoPerfil: '/images/usuarios/usuario_roberto.jpeg',
    texto:'Modelo verano para playa',
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
    },
    {
        id_posteo : 1,
        id_usuario:1,
        foto:'/images/posteos/posteo12.jpeg',
        fotoPerfil: '/images/usuarios/usuario_roberto.jpeg',
        texto:'Modelo verano para playa',
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
        },
    {
        id_posteo : 2,
        id_usuario:2,
        foto:'/images/posteos/posteo2.jpeg',
        fotoPerfil:'/images/usuarios/usuario_betty.jpeg',
        texto:'Modelo verano nuevos',
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
            id_usuario:3,
            foto:'/images/posteos/posteo3.jpeg',
            fotoPerfil:'/images/usuarios/usuario_juani.jpeg',
            texto:'Modelo verano tendencia',
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
            },
            {
                id_posteo : 4,
                id_usuario:4,
                foto:'/images/posteos/posteo4.jpeg',
                fotoPerfil:'/images/usuarios/usuario_elpetter.jpeg',
                texto:'Partido con amigos',
                username: 'El Petter',
                comentarios :[
                    {
                        id_usuario : 1,
                        nombre : 'Lucas',
                        texto : 'Que buen partido'
                    },
                    {
                        id_usuario : 2,
                        nombre : 'Dolores',
                        texto : 'que divertido!'
                    }
                ]
                },{
                    id_posteo : 5,
                    id_usuario:5,
                    foto:'/images/posteos/posteo5.jpeg',
                    fotoPerfil:'/images/usuarios/usuario_martita.jpeg',
                    texto:'Paseando',
                    username: 'MartitaEnMoto',
                    comentarios :[
                        {
                            id_usuario : 1,
                            nombre : 'Mercedes',
                            texto : 'Que linda te queda esa bufanda'
                        },
                        {
                            id_usuario : 2,
                            nombre : 'Agustin',
                            texto : 'que buena moto!'
                        }
                    ]
                    }],
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
],
  
detalleUsuario: function(id){ 
    let resultado = [];
    for (let i=0; i<data.posteos.length; i++) {
        if (id==data.posteos[i].id_usuario ) {
                resultado.push(data.posteos[i])
            
        }     
    }

    return resultado


},
detallePosteo: function(id){
    let resultado = {};
    for (let i = 0; i < data.posteos.length; i++) {
        if(id==data.posteos[i].id){
            resultado = data.posteos[i]
        }
         
    }
    return resultado
},

}

module.exports = data;