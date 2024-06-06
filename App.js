import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./Navigation";
import {DefaultTheme, Provider as PaperProvider} from "react-native-paper"

import Inicio from "./View/Inicio";
import NuevoCliente from "./View/NuevoCliente";
import DetallesCliente from "./View/DetallesCliente";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

// Definir tema del diseño

const theme={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme,
    primary:"#1774f2",
    accent:"#0655BF"
  }
}



export default function App() {
  return (
    <PaperProvider>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Inicio" //esto es para indicar con que componente va a iniciar la app
        screenOptions={{
          headerStyle:{
            backgroundColor: theme.colors.primary
          },
          headerTintColor: theme.colors.surface,
          headerTitleAlign: "center",
          headerTitleStyle:{
            fontWeight: "bold"
            
          }
        }}
      >
        <Stack.Screen
          name="Inicio"
          component={Inicio}
          options={{ title: "Bienvenido" }}
        />
        <Stack.Screen
          name="NuevoCliente"
          component={NuevoCliente}
          options={{ title: "Nuevo Cliente" }}
        />
        <Stack.Screen
          name="DetallesCliente"
          component={DetallesCliente}
          options={{ title: "Detalles Cliente" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}
