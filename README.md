Proyecto de Tienda Ecommerce de Ollas de Barro en React
Este proyecto es una tienda en línea desarrollada en React como parte del curso de CoderHouse. La tienda se especializa en la venta de ollas de barro, ofreciendo a los usuarios una experiencia de compra intuitiva y atractiva para adquirir estos productos.

Características Principales
1. Componentización en React
El proyecto está estructurado utilizando la arquitectura de componentes de React. Cada elemento de la interfaz de usuario, desde el encabezado hasta los elementos individuales de producto, está representado como un componente reutilizable. Esto permite una fácil administración y escalabilidad del proyecto.

2. Manejo de Estado con Context API y useState
Se utiliza Context API para gestionar el estado global de la aplicación, facilitando el acceso y actualización de datos en diferentes partes de la interfaz sin la necesidad de pasar props a través de múltiples niveles de componentes. Además, se emplea useState para gestionar el estado local en componentes específicos.

3. Enrutamiento con React Router
React Router se implementa para gestionar la navegación dentro de la aplicación, permitiendo una experiencia de usuario fluida al cambiar entre páginas y visualizar diferentes secciones de la tienda, como la página de inicio, la página de productos y la página de detalles del producto.


4. Consumo de Datos de un Servicio Externo
La aplicación se integra con una base de datos que proporciona datos relacionados con los productos de ollas de barro. Estos datos se muestran en la tienda para que los usuarios puedan explorar y seleccionar productos.

5. Funcionalidades de Carrito de Compras
Se implementa un carrito de compras que permite a los usuarios agregar productos, ajustar cantidades y eliminar elementos del carrito. El carrito muestra el resumen de la compra y calcula el total de la compra en tiempo real.

6. Formulario de Checkout
Se incluye un formulario de checkout donde los usuarios pueden ingresar su información y posteriormente obtener su id de compra.

Instalación y Ejecución
Para ejecutar la aplicación en un entorno local, siga estos pasos:

1.Clonar este repositorio en su máquina local.
git clone https://github.com/mateito29/ReactCoder

2.Ingresar al directorio del proyecto.
cd tienda-ollas-barro-react

3.Instalar las dependencias.
npm install

4.Iniciar la aplicación.
npm start

![GIF](src/img/navegacion.gif)
