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
  
  return (
    <View>
      <Text>Desde detalles cliente</Text>
    </View>
  );
};

export default DetallesCliente;
