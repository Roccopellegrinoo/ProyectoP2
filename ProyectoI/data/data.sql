create schema programacion2;
use programacion2;
create TABLE usuario(
/*Nombre tipo de dato restricciones*/
id_usuario INT unsigned primary key auto_increment,
nombre varchar(50) NOT NULL,
apellido varchar(50) NOT NULL,
email varchar(50) NOT NULL,
usuario varchar(50) NOT NULL,
contrasenia varchar(50) NOT NULL,
fecha_nacimiento DATE NOT NULL,
numero_documento INT unsigned NOT NULL,
foto varchar(100) NOT NULL

);
create table posteos(
id int unsigned primary key auto_increment,
id_usuario int unsigned,
texto varchar(100) NOT NULL,
texto_descriptivo varchar(100) NOT NULL,
foreign key (id_usuario) references usuario(id_usuario),
createdAt timestamp default current_timestamp,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

create table comentarios(
id_post int unsigned ,
id_usuario int unsigned,
texto varchar(50),
foreign key (id_post) references posteos(id),
foreign key (id_usuario) references usuario(id_usuario),
createdAt timestamp default current_timestamp,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

insert into usuarios (`id_usuario`,`nombre`,`apellido`, `email`,`usuario`, `contrasenia`,`fecha_nacimiento`,`numero_documento`, `foto`)
values (default, '', '', '', ''   );

insert into usuarios (`id_usuario`,`nombre`,`apellido`, `email`,`usuario`, `contrasenia`,`fecha_nacimiento`,`numero_documento`, `foto`)
values (default, '', '', '', ''  );

insert into usuarios (`id_usuario`,`nombre`,`apellido`, `email`,`usuario`, `contrasenia`,`fecha_nacimiento`,`numero_documento`, `foto`)
values (default, '', '', '', ''  );

insert into usuarios (`id_usuario`,`nombre`,`apellido`, `email`,`usuario`, `contrasenia`,`fecha_nacimiento`,`numero_documento`, `foto`)
values (default, '', '', '', ''   );

insert into usuarios (`id_usuario`,`nombre`,`apellido`, `email`,`usuario`, `contrasenia`,`fecha_nacimiento`,`numero_documento`, `foto`)
values (default, '', '', '', ''  );

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