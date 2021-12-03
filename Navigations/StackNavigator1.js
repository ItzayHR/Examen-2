import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import CartScreen from '../Screens/CartScreen';

const Stack = createStackNavigator();

export default function StackNavigator1(){
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen}
                options={{headerShown:false, headerTitle:'Inicio'}}
            />

            <Stack.Screen name="CartScreen" component={CartScreen}
                options={{headerShow:false, headerTitle:"Carrito"}}
            />

        </Stack.Navigator>

    )
}