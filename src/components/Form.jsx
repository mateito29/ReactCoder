import { useState } from "react";
import { Button, Stack } from "@chakra-ui/react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Form = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState(null);
  const db = getFirestore();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que los campos estén llenos
    if (nombre === "" || email === "") {
      toast.error("Por favor ingresa tu nombre y tu email");
      return;
    }

    const order = { nombre, email };
    addDoc(ordersCollection, order)
      .then(({ id }) => {
        toast.success(`Hola ${nombre}`);
        toast.info(`Tu email es ${email}`);
        setOrderId(id);
      })
      .catch((error) => console.error("Error al agregar la orden:", error));
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
            COMPRAR
          </Button>
        </Stack>
      </form>

      {orderId && (
        <h3 className="title-compra">Id de tu compra: {orderId}</h3>
      )}
      <ToastContainer position="top-right" autoClose={5000} />
    </>
  );
};

export default Form;
