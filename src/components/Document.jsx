import React,{useEffect,useState} from 'react'
import {doc,getDoc,getFirestore} from 'firebase/firestore'
import { useParams } from 'react-router-dom';
const document = () => {
  const [product,setProduct] = useState([])
  /* console.log(product); */

  useEffect(()=>{
    const {id} = useParams()
    const db = getFirestore()
    const oneItem = doc(db, "ollas",`${id}`);
    getDoc(oneItem).then((snapshot)=>{
      if(snapshot.exists()){
        const docs = snapshot.data()
        setProduct(docs)
      }
    })
  }, [])
  return (
    <div>
      <h1>Producto</h1>
      {
        <div>
          <h2>Producto: {product.nombre}</h2>
          <h3>Descripcion: {product.descripcion}</h3>
          <h4>${product.precio}</h4>
        </div>
      }

    </div>
  )
}

export default document