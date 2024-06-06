import React, { useState } from "react";
import { Text, View } from "react-native";
import {List, Button, Headline, FAB} from "react-native-paper"

const Inicio = ({navigation}) =>{

    const [consultarAPI, guardarConsultarAPI] = useState(true)
    return(
        <View>
            <Text>Aplicacion de conde</Text>
            <Button icon="plus-circle" onPress={()=> navigation.navigate("NuevoCliente",{guardarConsultarAPI})} >
                Nuevo Cliente
            </Button>
        </View>
    )
}

export default Inicio   