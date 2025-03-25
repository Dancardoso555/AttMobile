

import {View, Text, Image, StyleSheet, Button, TextInput, ImageBackground} from 'react-native';


export default function Home(){
    return(

            <ImageBackground source={require('../assets/fundo.jpg')} style={{width: '100%', height: '100%'}}>
              <View style={estilo.containertexto}>    
            <Text style={estilo.containertexto}>
          Olá seja bem vindo(a)!
          Aqui é sua tela de login!!!:
          </Text>
          </View>

          <View style={estilo.containertexto}>    
          <Text style={estilo.containertexto1}>
          <TextInput
            placeholder="Usuário"
            placeholderTextColor={'white'}

        />

        <TextInput
            placeholder="Senha"
            placeholderTextColor={'white'}

        />
        <Button
            title="Enviar"
            color={'#blue'}
            />
        </Text>
        </View>
          
  
            </ImageBackground>
 
    )}


const estilo=StyleSheet.create({
    containertexto : {
        flex: 1,
        color: '#fff',
        alignSelf:'center',
        padding: 30,
        justifyContent: 'space-evenly'
    },
    containertexto1 : {
        flex: 2,
        color: '#fff',
        alignSelf:'center',
        padding: 10,
        
    },
    containertexto2 : {
        flex: 2,
        color: '#fff',
        alignItems:'center',
    },
    containerImage1 : {
        flex: 2,
        width:200,
        height: 200,
        alignSelf:'flex-end'
    },
    containerImages: {
        flex: 4,
        flexDirection:'row',
        justifyContent:'space-evenly',
    },
    tamanhoImg: {
        width: 100,
        height:100,

    },
    txtinput:{
        borderWidth: 2,
        borderColor: 'black',
        borderRadius:5,
        padding:10,
        alignSelf: 'center'
    },

})

