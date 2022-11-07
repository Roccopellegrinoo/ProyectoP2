create schema red_social;
use red_social;
create TABLE usuario(
/*Nombre tipo de dato restricciones*/
id INT unsigned primary key auto_increment,
nombre varchar(50) NOT NULL,
apellido varchar(50) NOT NULL,
email varchar(50) NOT NULL,
usuario varchar(50) NOT NULL,
contrasenia varchar(150) NOT NULL,
fecha_nacimiento DATE NOT NULL,
numero_documento INT unsigned NOT NULL,
foto varchar(100) NOT NULL,
createdAt timestamp default current_timestamp,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

);
create table posteos(
id int unsigned primary key auto_increment,
id_usuario int unsigned,
texto varchar(100) NOT NULL,
texto_descriptivo varchar(100) NOT NULL,
imagen varchar(100) NOT NULL,
foreign key (id_usuario) references usuario(id),
createdAt timestamp default current_timestamp,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

create table comentarios(
id INT unsigned primary key auto_increment,
id_post int unsigned ,
id_usuario int unsigned,
texto varchar(50),
foreign key (id_post) references posteos(id),
foreign key (id_usuario) references usuario(id),
createdAt timestamp default current_timestamp,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

create table seguidores(
id INT unsigned primary key auto_increment,
id_seguido int unsigned ,
id_seguidor int unsigned,
foreign key (id_seguido) references usuario(id),
foreign key (id_seguidor) references usuario(id),
createdAt timestamp default current_timestamp,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

insert into usuario (`id_usuario`,`nombre`,`apellido`, `email`,`usuario`, `contrasenia`,`fecha_nacimiento`,`numero_documento`, `foto`)
values (default,  'Roberto', 'Blanco', 'Robertito@gmail.com','AnteojosRobert', 'contrasenia12', '2002-11-05', '44566344', '/images/usuarios/usuario_roberto.jpeg'  );

insert into usuario (`id_usuario`,`nombre`,`apellido`, `email`,`usuario`, `contrasenia`,`fecha_nacimiento`,`numero_documento`, `foto`)
values (default,  'Beatriz', 'Lopez', 'Labetty@gmail.com', 'La Betty', 'contrasenia13', '1995-11-05', '41440334', '/images/usuarios/usuario_betty.jpeg'  );

insert into usuario (`id_usuario`,`nombre`,`apellido`, `email`,`usuario`, `contrasenia`,`fecha_nacimeinto`,`numero_documento`, `foto`)
values (default,  'Juana', 'Ruiz', 'Juanitaok@gmail.com', 'Juanitaok', 'contrasenia14', '1991-09-06', '44366344', '/images/usuarios/usuario_juani.jpeg'  );

insert into usuario (`id_usuario`,`nombre`,`apellido`, `email`,`usuario`, `contrasenia`,`fecha_nacimiento`,`numero_documento`, `foto`)
values (default,  'Pedro', 'Velazco', 'PedroVelazco@gmail.com', 'contrasenia123', '1991-09-06', '40242000','/images/usuarios/usuario_elpetter.jpeg'   );

insert into usuario (`id_usuario`,`nombre`,`apellido`, `email`,`usuario`, `contrasenia`,`fecha_nacimiento`,`numero_documento`, `foto`)
values (default,  'Martha', 'Lamothe', 'MarthaLamothe@gmail.com', 'MartitaEnMoto', 'contrasenia34', '1990-10-07', '434568574', '/images/usuarios/usuario_martita.jpeg'  );

insert into posteos (`id`,`id_usuario`,`texto`,`texto_descriptivo`)
values (default,'1','/images/posteos/posteo1.jpeg', 'Modelo verano para playa' );

insert into posteos (`id`,`id_usuario`,`texto`,`texto_descriptivo`)
values (default,'2','/images/posteos/posteo2.jpeg', 'Modelo verano nuevos' );

insert into posteos (`id`,`id_usuario`,`texto`,`texto_descriptivo`)
values (default,'3','/images/posteos/posteo3.jpeg', 'modelo verano tendencia' );

insert into posteos (`id`,`id_usuario`,`texto`,`texto_descriptivo`)
values (default,'4','/images/posteos/posteo4.jpeg', 'Partido con amigos' );

insert into posteos (`id`,`id_usuario`,`texto`,`texto_descriptivo`)
values (default,'5','/images/posteos/posteo5.jpeg', 'paseando' );

insert into posteos (`id`,`id_usuarios`,`texto`,`texto_descriptivo`)
values (default,1,'/img/usuario.jpg', 'wegjwnew' );

insert into posteos (`id`,`id_usuarios`,`texto`,`texto_descriptivo`)
values (default,1,'/img/usuario.jpg', 'wegjwnew' );

insert into posteos (`id`,`id_usuarios`,`texto`,`texto_descriptivo`)
values (default,1,'/img/usuario.jpg', 'wegjwnew' );

insert into posteos (`id`,`id_usuarios`,`texto`,`texto_descriptivo`)
values (default,1,'/img/usuario.jpg', 'wegjwnew' );

insert into posteos (`id`,`id_usuarios`,`texto`,`texto_descriptivo`)
values (default,1,'/img/usuario.jpg', 'wegjwnew' );