import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { Flex } from "@chakra-ui/react";

const ItemDetailContainer = () => {
  const [productos, setProductos] = useState([]);
  const {id} = useParams()
  useEffect(() => {
    const db = getFirestore();

    const oneItem = doc(db, "ollas", `${id}`);
    getDoc(oneItem).then((snapshot) => {
      if (snapshot.exists()){
        const docs = snapshot.data()
        setProductos(docs)
      }
    })
  },[]);
  /* const filteredProduct = productos.filter((producto) => producto.id == id); */
  /*   const productos = [
    {
      id: 1,
      nombre: "Olla 1",
      imagen: "../src/img/olla.png",
      descripcion: "Descripcion Olla 1",
      stock: 20,
      categoria: "Ollas Chicas",
      precio: 100,
    },
    {
      id: 2,
      nombre: "Olla 2",
      imagen: "../src/img/olla.png",
      descripcion: "Descripcion Olla 2",
      stock: 20,
      categoria: "Ollas Chicas",
      precio: 200,
    },
    {
      id: 3,
      nombre: "Olla 3",
      imagen: "../src/img/olla.png",
      descripcion: "Descripcion Olla 3",
      stock: 20,
      categoria: "Ollas Medianas",
      precio: 300,
    },
    {
      id: 4,
      nombre: "Olla 4",
      imagen: "../src/img/olla.png",
      descripcion: "Descripcion Olla 4",
      stock: 20,
      categoria: "Ollas Medianas",
      precio: 400,
    },
    {
      id: 5,
      nombre: "Olla 5",
      imagen: "../src/img/olla.png",
      descripcion: "Descripcion Olla 5",
      stock: 20,
      categoria: "Ollas Grandes",
      precio: 500,
    },
    {
      id: 6,
      nombre: "Olla 6",
      imagen: "../src/img/olla.png",
      descripcion: "Descripcion Olla 6",
      stock: 20,
      categoria: "Ollas Grandes",
      precio: 600,
    },
  ];
  const getProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    } else {
      reject(new Error("No hay mas productos"));
    }
  });
    // Cuando el componente se monta, obtenemos los productos
    getProductos
      .then((res) => {
      })
      .catch((error) => {
        console.log(error);
      });  */
  return (
    <Flex
      flexWrap="wrap"
      justifyContent="space-around"
      alignItems="center"
      gap={4}
    >
      <ItemDetail productos={productos} />
    </Flex>
  );
};

export default ItemDetailContainer;
