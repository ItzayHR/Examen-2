import React, {useContext} from 'react'
import { StyleSheet, Text, View, Dimensions,TextInput } from 'react-native'
import { Header, Card, Image, Button} from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import {CineContext} from '../Context/CineContext';

const CartScreen = ({navigation}) => {
    const {compra,calcular,eliminarCompra,comprar} = useContext(CineContext);
    let ScreenHeight = Dimensions.get("window").height;
    ScreenHeight= (ScreenHeight * .78);
    
    const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
      height:ScreenHeight,
    },
    container2: {
        flex: 1,
        backgroundColor: '#fff',
      },
    buttonStyle: {
        color: 'white',
        marginBottom: 15,
    },
    inputView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    texto:{
        fontSize: 25
    }
});
    return (
        <View style={styles.container2}>
            <Header
                centerComponent={{ text: 'CARRITO', style: { color: '#fff', fontWeight: 'bold', fontSize: 35}}}
                containerStyle={{backgroundColor:'blue',borderBottomWidth: 2 }}
            />
            <View style={styles.container}>
                    <Text style={styles.texto}>{compra.nombre}({compra.idioma})</Text>
                    <Text style={styles.texto}>Precio: ${compra.precio}.00</Text>
                    <Text style={styles.texto}>Hora: {compra.horario}</Text>
                <SafeAreaView>
                    <View style={styles.inputView}>
                    <Text style={styles.texto}>Cantidad: </Text>
                        <TextInput
                        onChangeText={(e)=>{calcular(e,compra)}}
                        maxLength={40}
                        placeholder=" Escribe la cantidad."
                        keyboardType='numeric'
                        />
                    </View>
                </SafeAreaView>
                    <Text style={styles.texto}>Total: ${compra.total}.00</Text>
                <View>
                    
                    <Button 
                    style={styles.buttonStyle}
                    buttonStyle={{backgroundColor:'red'}}
                    title="Cancelar"
                    onPress={()=>(
                        eliminarCompra(),
                        navigation.goBack()
                        )}
                    />
                </View>
                <View>
                    <Button 
                    style={styles.buttonStyle}
                    buttonStyle={{backgroundColor:'green'}}
                    title="Comprar"
                    onPress={()=>{
                        comprar(compra),
                        navigation.goBack()
                    }}
                    />  
                </View>
    
            </View>
            
        </View>
    )
}

export default CartScreen


  