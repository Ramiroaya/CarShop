
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
    
alter table usuarios
	rename to usuario;
alter table vehiculos
	rename to vehiculo;


ALTER TABLE usuario
MODIFY COLUMN administrador BOOLEAN AFTER direccion;

alter table vehiculo
	change idPublicacion idVehiculo int;

alter table vehiculo
	modify idVehiculo int auto_increment;

ALTER TABLE vehiculo
ADD CONSTRAINT usuario_id
FOREIGN KEY (usuario_id) REFERENCES usuario (idUsuario);

use carshopl;

alter table usuario
drop column localidad;

alter table usuario
drop column direccion;

alter table usuario
add password  varchar(255) not null unique;

alter table vehiculo
drop column dominio;

alter table vehiculo
drop column marca;

alter table vehiculo
drop column modelo;

create table provincia (
	idProvincia int primary key auto_increment not null,
    nombre varchar(45) not null);

create table version (
	idVersion int primary key auto_increment not null,
    nombre varchar(255) not null );
    
create table modelo (
	idModelo int primary key auto_increment not null,
    nombre varchar(255) not null,
    version_id int);
    
alter table modelo
	add constraint version_id
    foreign key (version_id) references version(idVersion);
    
create table marca (
	idMarca int primary key auto_increment not null,
    nombre varchar(255),
    modelo_id int);
    
alter table marca
	add constraint modelo_id
    foreign key (modelo_id) references modelo(idModelo);
    
alter table vehiculo
add column version_id int;
    
alter table vehiculo
	add constraint version_id
    foreign key (version_id) references version(idVersion);

alter table vehiculo
change version version_id int;

use carshop;
alter table vehiculo
	drop version;
    
alter table vehiculo
	modify fotos varchar(255);
    
alter table vehiculo
	add column fotos varchar(255);
    
ALTER TABLE marca
ADD COLUMN `modelo_id` INT not NULL;
ALTER TABLE marca
ADD CONSTRAINT `modelo_id`
  FOREIGN KEY (`modelo_id`)
  REFERENCES modelo (`idModelo`);

alter table usuario
	drop column provincia;
    
alter table usuario
	add column provincia_id int not null;
    
alter table usuario
	add constraint provincia_id
    foreign key (provincia_id)
    references provincia(idProvincia);
    
alter table marca
	drop column modelo_id;
alter table modelo
	drop column version_id;
    
alter table modelo
	add column marca_id int not null;
alter table modelo
	add constraint marca_id
    foreign key (marca_id)
    references marca(idMarca);
    
alter table version
	add column modelo_id int not null;
alter table version
	add constraint modelo_id
	foreign key (modelo_id)
    references modelo(idModelo);


select * from usuario;