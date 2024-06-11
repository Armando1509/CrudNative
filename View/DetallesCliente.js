import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Headline, Text, Subheading, Button, FAB } from "react-native-paper";
import globalStyles from "../styles/global";
import axios from "axios";

const DetallesCliente = ({navigation, route}) => {
  const {guardarConsultarAPI} = route.params
  const {nombre, correo, telefono, empresa, id} = route.params.item
  const mostrarConfirmacion = () =>{
    Alert.alert(
      '¿Desea eliminar este cliente?',
      'Un contacto eliminado no se puede recuperar',
      [
        {text: 'Si, Eliminar', onPress: () => eliminarContacto() },
        {text: 'Cancelar', style: 'cancel'}
      ]
    )
  }
  const eliminarContacto = async () =>{
    const url = `http://10.0.2.2:3000/clientes/${id}`
    try {
      await axios.delete(url)
    } catch (error) {
      console.log(error);
    }
    //redireccionar
    navigation.navigate('Inicio')
    // volver a consultar la api
    guardarConsultarAPI(true)
  }
  return (
    <View style={globalStyles.contenedor} >
      <Headline style={globalStyles.titulo} >{nombre}</Headline>
      <Text style={globalStyles.texto} >Empresa: <Subheading> {empresa} </Subheading> </Text>
      <Text style={globalStyles.texto} >Correo: <Subheading> {correo} </Subheading> </Text>
      <Text style={globalStyles.texto} >Telefono: <Subheading> {telefono} </Subheading> </Text>
      
    </View>
  );
};

export default DetallesCliente;
