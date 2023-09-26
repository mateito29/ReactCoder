import React from "react";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";
const Collection = () => {
  const {categoria} = useParams()
  const [products, setProducts] = useState([]);
 /*  console.log(products); */

  useEffect(() => {
    const db = getFirestore();
    const itemCollections = collection(db,`${categoria}` );
    getDocs(itemCollections).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data());
      setProducts(docs);
    });
  });
  return (
    <div>
      <h1>Collection</h1>
      {products.map((p) => {
        <div key={p.nombre}>
          <h3>Producto: {p.nombre}</h3>
          <h4>categoria: {p.categoria}</h4>
          <h5>precio: {p.precio}</h5>
        </div>;
      })}
    </div>
  );
};

export default Collection;
