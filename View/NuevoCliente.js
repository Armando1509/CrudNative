import React, { useState, useEffect } from "react";
import { View, StyleSheet, Platform } from "react-native";
import {
  TextInput,
  Headline,
  Button,
  Paragraph,
  Dialog,
  Portal,
} from "react-native-paper";
import globalStyles from "../styles/global";
import axios from "axios";
import { useNavigation, useRoute } from '@react-navigation/native';

const NuevoCliente = ({route, navigation}) => {
  
console.log(route.params);
 const { guardarConsultarAPI } = route.params; 

 useEffect(() => {
  navigation.setOptions({
    guardarConsultarAPI: guardarConsultarAPI,
  });
}, [navigation]);


  const [nombre, guardarNombre] = useState("");
  const [telefono, guardarTelefono] = useState("");
  const [correo, guardarCorreo] = useState("");
  const [empresa, guardarEmpresa] = useState("");
  const [alerta, guardarAlerta] = useState(false);

  //almacenar cliente en la bd
  const guardarCliente = async () => {
    //validar
    if (nombre === "" || telefono === "" || correo === "" || empresa === "") {
      guardarAlerta(true);
      return;
    }
    //Generar cliente
    const cliente = { nombre, telefono, correo, empresa };

    // Si estamos editando o creando un nuevo cliente
    if (route.params.cliente) {
      const { id } = route.params.cliente;
      cliente.id = id;
      const url = `http://10.0.2.2:3000/clientes/${id}`;

      try {
        await axios.put(url, cliente);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        if (Platform.OS === "ios") {
          await axios.post("http://localhost:3000/clientes", cliente);
        } else {
          await axios.post("http://10.0.2.2:3000/clientes", cliente);
        }
      } catch (error) {
        console.log(error);
      }
    }
    //redireccionar
    navigation.navigate("Inicio");
    //Limpiar el form
    guardarNombre("");
    guardarTelefono("");
    guardarCorreo("");
    guardarEmpresa("");
    // cambiar a true para traernos el nuevo cliente
    guardarConsultarAPI(true);
  };
  return (
    <View style={globalStyles.contenedor}>
      <Headline style={globalStyles.titulo}>Añadir Nuevo Cliente</Headline>
      <TextInput
        label="Nombre"
        placeholder="Armando"
        onChangeText={(texto) => guardarNombre(texto)}
        style={styles.input}
      />
      <TextInput
        label="Telefono"
        placeholder="5555-5555"
        onChangeText={(texto) => guardarTelefono(texto)}
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        label="Correo"
        placeholder="correo@correo"
        onChangeText={(texto) => guardarCorreo(texto)}
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        label="Empresa"
        placeholder="Nombre Empresa"
        onChangeText={(texto) => guardarEmpresa(texto)}
        style={styles.input}
      />
      <Button
        onPress={() => guardarCliente()}
        icon="pencil-circle"
        mode="contained"
      >
        Guarda Ciente
      </Button>

      <Portal>
        <Dialog visible={alerta} onDismiss={() => guardarAlerta(false)}>
          <Dialog.Title>Error</Dialog.Title>
          <Dialog.Content>
            <Paragraph>Todos los campos son obligatorios</Paragraph>
          </Dialog.Content>
          <Button onPress={() => guardarAlerta(false)}>OK</Button>
        </Dialog>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
    backgroundColor: "transparent",
  },
});

export default NuevoCliente;
