import React from "react";
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "ollas");

    getDocs(itemsCollection)
      .then((snapshot) => {
        const docs = snapshot.docs.map((doc) => doc.data());
        setProducto(docs);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error getting documents: ", error);
        setLoading(false);
      });
  }, []);
  const filteredProduct = producto.filter((producto) => producto.id == id);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        filteredProduct.map((p) => {
          return <ItemDetail producto={p} key={p.id} />;
        })
      )}
    </>
  );
};

export default ItemDetailContainer;
