import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Loader from "./Loader";

const ItemListContainer = () => {
  const { categoria } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const db = getFirestore();

    const itemsCollection = collection(db, "ollas");
    getDocs(itemsCollection)
      .then((snapshot) => {
        const docs = snapshot.docs.map((doc) => doc.data());
        docs.sort((a, b) => a.id - b.id);
        setProductos(docs);
        setLoading(false);
      })
      .catch((error) => {
        console.error(" Error al cargar los datos", error);
        setLoading(false);
      });
  }, []);

  const productosFiltrados = categoria
    ? productos.filter((producto) => producto.categoria === categoria)
    : productos;

  return (
    <>{loading ? <Loader /> : <ItemList productos={productosFiltrados} />}</>
  );
};

export default ItemListContainer;
