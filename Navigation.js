import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Views
import Inicio from "./View/Inicio";

const Stack= createNativeStackNavigator()
function MyStack () {
    return(
        <Stack.Navigator>
            <Stack.Screen
            name='Inicio'
            component={Inicio}
            />
        </Stack.Navigator>
    )
}
const Navigation = () =>{
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}

export default Navigation