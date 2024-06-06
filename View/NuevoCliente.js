import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput, Headline, Button, Paragraph, Dialog, Portal, TextInputMask } from 'react-native-paper';
import globalStyles from '../styles/global';


const NuevoCliente = () => {

  const[nombre, guardarNombre] = useState("")
  const[telefono, guardarTelefono] = useState("")
  const[correo, guardarCorreo] = useState("")
  const[empresa, guardarEmpresa] = useState("")
  const[alerta, guardarAlerta] = useState(false)

  //almacenar cliente en la bd
  const guardarCliente =() =>{
    //validar
    if(nombre === "" || telefono === "" || correo === "" || empresa === ""){
      guardarAlerta(true)
      return
    }
    //Generar cliente
    const cliente = {nombre, telefono, correo, empresa}
    console.log(cliente);
  }
  return (
    <View style={globalStyles.contenedor}>

      <Headline style={globalStyles.titulo} >Añadir Nuevo Cliente</Headline>
      <TextInput
      label="Nombre"
      placeholder='Armando'
      onChangeText={texto => guardarNombre(texto)}
      style={styles.input}
      />
      <TextInput
      label="Telefono"
      placeholder='5555-5555'
      onChangeText={texto => guardarTelefono(texto)}
      style={styles.input}
      keyboardType='numeric'
      />
      <TextInput
      label="Correo"
      placeholder='correo@correo'
      onChangeText={texto => guardarCorreo(texto)}
      style={styles.input}
      keyboardType='email-address'
      />
      <TextInput
      label="Empresa"
      placeholder='Nombre Empresa'
      onChangeText={texto => guardarEmpresa(texto)}
      style={styles.input}
      />
      <Button   
      onPress={()=>guardarCliente()}
      icon="pencil-circle"
      mode='contained'
      >
        Guarda Ciente
      </Button>

      <Portal>
        <Dialog
          visible={alerta}
          onDismiss={() => guardarAlerta(false)}
        >
          <Dialog.Title>Error</Dialog.Title>
          <Dialog.Content>
            <Paragraph>Todos los campos son obligatorios</Paragraph>

          </Dialog.Content>
          <Button onPress={()=> guardarAlerta(false)} >OK</Button>
        </Dialog>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  input:{
    marginBottom: 20,
    backgroundColor: "transparent"
  }
})

export default NuevoCliente;
