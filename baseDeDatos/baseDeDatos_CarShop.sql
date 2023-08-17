
-- Creacion de la base de datos CarShop.

create database `carshop`; 
use carshop;

-- Creacion de la tabla Usuarios.

create table `usuarios`(
idUsuario int primary key auto_increment not null,
nombre varchar(15) not null,
apellido varchar(15) not null,
email varchar(25) not null,
telefono varchar(20) not null,
rol varchar(10) not null,
provincia varchar(20) not null,
localidad varchar(20) not null,
direccion varchar(30) not null);

-- Creacion de la tabla Publicaciones.

create table `publicaciones`(
idPublicacion int primary key auto_increment not null,
dominio varchar(10) unique not null,
marca varchar(10) not null, 
modelo varchar(10) not null,
version varchar(10) not null,
año int not null,
kilometros int not null,
tipoVehiculo varchar(10) not null,
transmision varchar(10) not null,
precio int not null,
fotos json,
usuario_id int,
foreign key(usuario_id) references usuarios(idUsuario));

use carshop; 

-- Modificando nombre de Tabla Publicaciones => Vehiculos.

alter table publicaciones
	rename to vehiculos;
    
-- Renombrando el campo Rol => Administrador de tipo Booleano.
    
alter table usuarios
	change rol administrador boolean;

alter table usuarios
	modify administrador boolean;




