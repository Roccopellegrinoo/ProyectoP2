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
        texto:'Al fin vacaciones',
        username: 'AnteojosRoberto',
        comentarios :[
            {
                id_usuario : 1,
                nombre : 'Tobias',
                texto : 'que ganas de playa'
            },
            {
                id_usuario : 2,
                nombre : 'Betty',
                texto : 'ojala estar asi!'
            }
        ]
        },
        {
            id_posteo : 1,
            id_usuario:1,
            foto:'/images/posteos/posteo6.jpeg',
            fotoPerfil: '/images/usuarios/usuario_roberto.jpeg',
            texto:'Asado en casa',
            username: 'AnteojosRoberto',
            comentarios :[
                {
                    id_usuario : 1,
                    nombre : 'Alexis',
                    texto : 'que rico estaba!'
                },
                {
                    id_usuario : 2,
                    nombre : 'Toto',
                    texto : 'la pasamos muy bien!'
                }
            ]
            },
            {
                id_posteo : 1,
                id_usuario:1,
                foto:'/images/posteos/posteo7.jpeg',
                fotoPerfil: '/images/usuarios/usuario_roberto.jpeg',
                texto:'nuevo integrante',
                username: 'AnteojosRoberto',
                comentarios :[
                    {
                        id_usuario : 1,
                        nombre : 'Mili',
                        texto : 'que bonito!'
                    },
                    {
                        id_usuario : 2,
                        nombre : 'Meche',
                        texto : 'igual que nemo!'
                    }
                ]
                },
                {
                    id_posteo : 1,
                    id_usuario:1,
                    foto:'/images/posteos/posteo8.jpeg',
                    fotoPerfil: '/images/usuarios/usuario_roberto.jpeg',
                    texto:'nuevo integrante',
                    username: 'AnteojosRoberto',
                    comentarios :[
                        {
                            id_usuario : 1,
                            nombre : 'Mili',
                            texto : 'que bonito!'
                        },
                        {
                            id_usuario : 2,
                            nombre : 'Meche',
                            texto : 'igual que nemo!'
                        }
                    ]
                    },
                    {
                        id_posteo : 1,
                        id_usuario:1,
                        foto:'/images/posteos/posteo9.jpeg',
                        fotoPerfil: '/images/usuarios/usuario_roberto.jpeg',
                        texto:'nuevo integrante',
                        username: 'AnteojosRoberto',
                        comentarios :[
                            {
                                id_usuario : 1,
                                nombre : 'Mili',
                                texto : 'que bonito!'
                            },
                            {
                                id_usuario : 2,
                                nombre : 'Meche',
                                texto : 'igual que nemo!'
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
                nombre : 'Fausto',
                texto : 'que buenos!'
            },
            {
                id_usuario : 2,
                nombre : 'Julio',
                texto : 'que lindos'
            }
        ]
        },
        {
        id_posteo : 2,
        id_usuario:2,
        foto:'/images/posteos/posteo21.jpeg',
        fotoPerfil:'/images/usuarios/usuario_betty.jpeg',
        texto:'Mi perrito feliz',
        username: 'La Betty',
        comentarios :[
            {
                id_usuario : 1,
                nombre : 'Anita',
                texto : 'Muy linda'
            },
            {
                id_usuario : 2,
                nombre : 'Laura',
                texto : 'que linda foto Betty'
            }
        ]
        },
        {
            id_posteo : 2,
            id_usuario:2,
            foto:'/images/posteos/posteo10.jpeg',
            fotoPerfil:'/images/usuarios/usuario_betty.jpeg',
            texto:'Mi perrito feliz',
            username: 'La Betty',
            comentarios :[
                {
                    id_usuario : 1,
                    nombre : 'Anita',
                    texto : 'Muy linda'
                },
                {
                    id_usuario : 2,
                    nombre : 'Laura',
                    texto : 'que linda foto Betty'
                }
            ]
            },
            {
                id_posteo : 2,
                id_usuario:2,
                foto:'/images/posteos/posteo11.jpeg',
                fotoPerfil:'/images/usuarios/usuario_betty.jpeg',
                texto:'Mi nuevo mate',
                username: 'La Betty',
                comentarios :[
                    {
                        id_usuario : 1,
                        nombre : 'Rama',
                        texto : 'Muy lindo'
                    },
                    {
                        id_usuario : 2,
                        nombre : 'Pelu',
                        texto : 'que buen mate'
                    }
                ]
                },
                {
                    id_posteo : 2,
                    id_usuario:2,
                    foto:'/images/posteos/posteo13.jpeg',
                    fotoPerfil:'/images/usuarios/usuario_betty.jpeg',
                    texto:'Conocinedo el mundo',
                    username: 'La Betty',
                    comentarios :[
                        {
                            id_usuario : 1,
                            nombre : 'Cande',
                            texto : 'Despues contanos a donde fuiste!'
                        },
                        {
                            id_usuario : 2,
                            nombre : 'Pili',
                            texto : 'que lindo NYC'
                        }
                    ]
                    },
                    {
                        id_posteo : 2,
                        id_usuario:2,
                        foto:'/images/posteos/posteo14.jpeg',
                        fotoPerfil:'/images/usuarios/usuario_betty.jpeg',
                        texto:'Arranque clase de cocina',
                        username: 'La Betty',
                        comentarios :[
                            {
                                id_usuario : 1,
                                nombre : 'Angie',
                                texto : 'que pintaa'
                            },
                            {
                                id_usuario : 2,
                                nombre : 'Martu',
                                texto : 'pasa receta!!'
                            }
                        ]
                        },
        
                        {
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
                                id_posteo : 3,
                                id_usuario:3,
                                foto:'/images/posteos/posteo18.jpeg',
                                fotoPerfil:'/images/usuarios/usuario_juani.jpeg',
                                texto:'Tomando el te con agus',
                                username: 'Juanitaok',
                                comentarios :[
                                    {
                                        id_usuario : 1,
                                        nombre : 'Mechi',
                                        texto : 'Que lindas'
                                    },
                                    {
                                        id_usuario : 2,
                                        nombre : 'Agus',
                                        texto : 'te amo!'
                                    }
                                ]
                                },
                                {
                                    id_posteo : 3,
                                    id_usuario:3,
                                    foto:'/images/posteos/posteo17.jpeg',
                                    fotoPerfil:'/images/usuarios/usuario_juani.jpeg',
                                    texto:'Recien casados!',
                                    username: 'Juanitaok',
                                    comentarios :[
                                        {
                                            id_usuario : 1,
                                            nombre : 'Mery',
                                            texto : 'Felicitaciones!'
                                        },
                                        {
                                            id_usuario : 2,
                                            nombre : 'Vicky',
                                            texto : 'Que bueno Juani!'
                                        }
                                    ]
                                    },
                                    {
                                        id_posteo : 3,
                                        id_usuario:3,
                                        foto:'/images/posteos/posteo16.jpeg',
                                        fotoPerfil:'/images/usuarios/usuario_juani.jpeg',
                                        texto:'Nueva playa favorita',
                                        username: 'Juanitaok',
                                        comentarios :[
                                            {
                                                id_usuario : 1,
                                                nombre : 'Juan',
                                                texto : 'vuelvan!!'
                                            },
                                            {
                                                id_usuario : 2,
                                                nombre : 'Tomi',
                                                texto : 'Quien pudiera!'
                                            }
                                        ]
                                        },
                                        {
                                            id_posteo : 3,
                                            id_usuario:3,
                                            foto:'/images/posteos/posteo15.jpeg',
                                            fotoPerfil:'/images/usuarios/usuario_juani.jpeg',
                                            texto:'Compa de gym',
                                            username: 'Juanitaok',
                                            comentarios :[
                                                {
                                                    id_usuario : 1,
                                                    nombre : 'Lauti',
                                                    texto : 'jajaja bien ahi'
                                                },
                                                {
                                                    id_usuario : 2,
                                                    nombre : 'Joaqui',
                                                    texto : 'lindoos!'
                                                }
                                            ]
                                            },

            {
                id_posteo : 3,
                id_usuario:3,
                foto:'/images/posteos/posteo31.jpeg',
                fotoPerfil:'/images/usuarios/usuario_juani.jpeg',
                texto:'Mi nuevo auto',
                username: 'Juanitaok',
                comentarios :[
                    {
                        id_usuario : 1,
                        nombre : 'Delfi',
                        texto : 'Que lindo auto'
                    },
                    {
                        id_usuario : 2,
                        nombre : 'Fede',
                        texto : 'alto auto!'
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
                },
                {
                    id_posteo : 4,
                    id_usuario:4,
                    foto:'/images/posteos/posteo19.jpeg',
                    fotoPerfil:'/images/usuarios/usuario_elpetter.jpeg',
                    texto:'De fiesta con amigos',
                    username: 'El Petter',
                    comentarios :[
                        {
                            id_usuario : 1,
                            nombre : 'Torto',
                            texto : 'Que buena noche'
                        },
                        {
                            id_usuario : 2,
                            nombre : 'Choco',
                            texto : 'Hay que repetir!'
                        }
                    ]
                    },
                    {
                        id_posteo : 4,
                        id_usuario:4,
                        foto:'/images/posteos/posteo20.jpeg',
                        fotoPerfil:'/images/usuarios/usuario_elpetter.jpeg',
                        texto:'De fiesta con amigos',
                        username: 'El Petter',
                        comentarios :[
                            {
                                id_usuario : 1,
                                nombre : 'Torto',
                                texto : 'Que buena noche'
                            },
                            {
                                id_usuario : 2,
                                nombre : 'Choco',
                                texto : 'Hay que repetir!'
                            }
                        ]
                        },
                        {
                            id_posteo : 4,
                            id_usuario:4,
                            foto:'/images/posteos/posteo41.jpeg',
                            fotoPerfil:'/images/usuarios/usuario_elpetter.jpeg',
                            texto:'De fiesta con amigos',
                            username: 'El Petter',
                            comentarios :[
                                {
                                    id_usuario : 1,
                                    nombre : 'Torto',
                                    texto : 'Que buena noche'
                                },
                                {
                                    id_usuario : 2,
                                    nombre : 'Choco',
                                    texto : 'Hay que repetir!'
                                }
                            ]
                            },
                            {
                                id_posteo : 4,
                                id_usuario:4,
                                foto:'/images/posteos/posteo41.jpeg',
                                fotoPerfil:'/images/usuarios/usuario_elpetter.jpeg',
                                texto:'De fiesta con amigos',
                                username: 'El Petter',
                                comentarios :[
                                    {
                                        id_usuario : 1,
                                        nombre : 'Torto',
                                        texto : 'Que buena noche'
                                    },
                                    {
                                        id_usuario : 2,
                                        nombre : 'Choco',
                                        texto : 'Hay que repetir!'
                                    }
                                ]
                                },
                                {
                                    id_posteo : 4,
                                    id_usuario:4,
                                    foto:'/images/posteos/posteo41.jpeg',
                                    fotoPerfil:'/images/usuarios/usuario_elpetter.jpeg',
                                    texto:'De fiesta con amigos',
                                    username: 'El Petter',
                                    comentarios :[
                                        {
                                            id_usuario : 1,
                                            nombre : 'Torto',
                                            texto : 'Que buena noche'
                                        },
                                        {
                                            id_usuario : 2,
                                            nombre : 'Choco',
                                            texto : 'Hay que repetir!'
                                        }
                                    ]
                                    },
                {
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
                    },
                    {
                        id_posteo : 5,
                        id_usuario:5,
                        foto:'/images/posteos/posteo51.jpeg',
                        fotoPerfil:'/images/usuarios/usuario_martita.jpeg',
                        texto:'Mi gatito nuevo',
                        username: 'MartitaEnMoto',
                        comentarios :[
                            {
                                id_usuario : 1,
                                nombre : 'Mercedes',
                                texto : 'Miau'
                            },
                            {
                                id_usuario : 2,
                                nombre : 'Agustin',
                                texto : 'que lindo gato!'
                            }
                        ]
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