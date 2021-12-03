import React, {useContext} from 'react';
import { StyleSheet, View, ScrollView,Text } from 'react-native'
import { Header, Card, Image, Button} from 'react-native-elements';
import {CineContext} from '../Context/CineContext';

const HomeScreen = ({navigation}) => {
    const {cartelera,agregar} = useContext(CineContext);
    return (
        <ScrollView>
            <Header
                centerComponent={{ text: 'CINÉPOLIS', style: { color: '#fff', fontWeight: 'bold', fontSize: 35 }}}
                containerStyle={{backgroundColor:'blue',borderBottomWidth: 2 }}
            />

            <View style={styles.container2}>
            {cartelera.map((e,i)=>{
                return(
                    <Card  
                    containerStyle={{
                        width: '100%',
                        marginBottom: 10
                    }} 
                    key={i}>
                        <Card.Title>{e.nombre}</Card.Title> 
                        <Card.Divider/>
                       
                        <View style={styles.container}>
                            <View style={styles.container2}>
                                <Image
                                style={styles.imagen}
                                source={{
                                   uri: `${e.url}`, 
                                }}
                                
                                />
                            </View>
                            <View style={styles.container2}>
                                <Text>{e.idioma}</Text>
                                <Text>{e.clasificacion}</Text>
                                {e.horarios.map((horario,index)=>{
                                    return( 
                                        <View style={styles.container2}>
                                            <Button
                                                onPress={()=>(
                                                    agregar(e,horario),
                                                    navigation.navigate('CartScreen')
                                                    )}
                                                key={index}
                                                title={horario}
                                                style={styles.buttonStyle}
                                                buttonStyle={{backgroundColor:'blue'}}
                                            />
                                        </View>
                                        
                                    )
                                })} 

                            </View>
                        </View>
                    </Card>
                );
            })
            }
            </View>
        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        flexDirection:'row',    
    },
    container2:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    },
    imagen: {
        minHeight:250,
        minWidth: 200,
    },
    container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingBottom:10,
    },
      buttonStyle: {
        color: 'red',
        marginBottom: 15,
    }
});
  