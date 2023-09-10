import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { Flex } from "@chakra-ui/react";

const ItemDetailContainer = () => {
  const productos = [
    {
      id: 1,
      nombre: "Olla 1",
      imagen:"../src/img/olla.png",
      descripcion: "Descripcion Olla 1",
      stock: 10,
      categoria: "Ollas Chicas",
      precio: 100,
    },
    {
      id: 2,
      nombre: "Olla 2",
      imagen:"../src/img/olla.png",
      descripcion: "Descripcion Olla 2",
      stock: 5,
      categoria: "Ollas Chicas",
      precio: 200,
    },
    {
      id: 3,
      nombre: "Olla 3",
      imagen:"../src/img/olla.png",
      descripcion: "Descripcion Olla 3",
      stock: 7,
      categoria: "Ollas Medianas",
      precio: 300,
    },
    {
      id: 4,
      nombre: "Olla 4",
      imagen:"../src/img/olla.png",
      descripcion: "Descripcion Olla 4",
      stock: 9,
      categoria: "Ollas Medianas",
      precio: 400,
    },
    {
      id: 5,
      nombre: "Olla 5",
      imagen:"../src/img/olla.png",
      descripcion: "Descripcion Olla 5",
      stock: 3,
      categoria: "Ollas Grandes",
      precio: 500,
    },
    {
      id: 6,
      nombre: "Olla 6",
      imagen:"../src/img/olla.png",
      descripcion: "Descripcion Olla 6",
      stock: 20,
      categoria: "Ollas Grandes",
      precio: 600,
    },
  ];
  const getProductos = new Promise ((resolve, reject) =>{
    if (productos.length > 0){
      setTimeout(() => {
        resolve(productos)
      }, 2000);
    }else{
      reject(new Error("No hay mas productos"))
    }
  });
  getProductos.then((res) =>{

  }).catch((error) =>{
    console.log(error);
  });
 /*  // Define una función asincrónica 'getProducts' para obtener datos de una API
  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    return data;
  };

 // Establece el estado inicial de 'product' como un arreglo vacío
  const [product, setProduct] = useState([]);
  // Utiliza 'useEffect' para cargar los productos de la API cuando el componente se monta
  useEffect(() => {
  // Llama a la función 'getProducts' para obtener los datos de la API
    getProducts().then((product) => setProduct(product));
  }, []); */
  return (
    <Flex
      flexWrap="wrap"
      justifyContent="space-around"
      alignItems="center"
      gap={4}
    >
      <ItemDetail productos = {productos} />
    {/*   {product.map((p) => {
        return <ItemDetail key={p.id} product={p} />;
      })} */}
    </Flex>
  );
};

export default ItemDetailContainer;