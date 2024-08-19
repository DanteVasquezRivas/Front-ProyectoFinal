-- Crear tablas de la base de datos

CREATE TABLE usuarios (
  id_user SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  apellido VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  contraseña VARCHAR(255) NOT NULL
);

CREATE TABLE perfiles (
  id_perfil SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  apellido VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  contraseña VARCHAR(255) NOT NULL
);

CREATE TABLE formularios (
  id_form SERIAL PRIMARY KEY,
  id_perfil INTEGER REFERENCES perfiles(id_perfil),
  nombre VARCHAR(100) NOT NULL,
  apellido VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  image BYTEA,
  descripcion TEXT
);

CREATE TABLE productos (
  id_productos SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  precio DECIMAL NOT NULL,
  descripcion TEXT,
  image_url VARCHAR(255)
);

CREATE TABLE pedidos (
  pedido_id SERIAL PRIMARY KEY,
  cliente_id INTEGER REFERENCES usuarios(id_user),
  fecha_pedido DATE NOT NULL,
  total DECIMAL NOT NULL
);

CREATE TABLE detalle_pedidos (
  detalle_id SERIAL PRIMARY KEY,
  pedido_id INTEGER REFERENCES pedidos(pedido_id),
  producto_id INTEGER REFERENCES productos(id_productos),
  cantidad INTEGER NOT NULL,
  precio_unitario DECIMAL NOT NULL
);
