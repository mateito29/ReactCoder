import { useState } from "react";
import { Button, Stack } from "@chakra-ui/react";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Form = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState(null);
  const db = getFirestore();
  const handleSubmit = (e) => {
    e.preventDefault();
    nombre === ""
      ? alert("Por favor ingresa tu nombre")
      : alert(`Hola ${nombre}`);
    email === ""
      ? alert("Por favor ingresa tu email")
      : alert(`Tu email es ${email}`);
    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
  };
  const order = {
    nombre,
    email,
  };
  const ordersCollection = collection(db, "orden");

  return (
    <>
      <h1 className="title-formulario">Formulario</h1>
      <form onSubmit={handleSubmit} className="formulario">
        <input
          type="text"
          placeholder="Nombre:"
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email:"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Stack spacing={4} direction="column" align="center">
          <Button colorScheme="blackAlpha" size="sm" type="submit">
            Enviar
          </Button>
        </Stack>
      </form>

      <h3 className="title-compra">Id de tu compra: {orderId}</h3>
    </>
  );
};

export default Form;
