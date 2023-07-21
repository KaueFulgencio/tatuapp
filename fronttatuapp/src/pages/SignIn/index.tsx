import React, { useState, useContext } from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'

import { AuthContext } from '../../contexts/AuthContext'
import Navigator from '../../components/navbar/navigator';

export default function SignIn(){
  
  const { signIn, loadingAuth} = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin(){

    if(email === '' || password === ''){
      return;
    }

    await signIn({ email, password })
    
  }


  return(
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/tatu.png')}
      />

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Digite seu email"   
          style={styles.input}     
          placeholderTextColor="#000000"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Sua senha"      
          style={styles.input}   
          placeholderTextColor="#000000"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}          
        />     

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          { loadingAuth ? (
            <ActivityIndicator size={25} color="#FFF"/>
          ) : (
            <Text style={styles.buttonText}>Acessar</Text>
          )}
        </TouchableOpacity>  

      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#bdb76b'
  },
  logo:{
    
    marginBottom: 18,
    transform: [{scale: 0.5}],
    flex: 1
  },
  inputContainer:{
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 100,
    paddingHorizontal: 5,
  },
  input:{
    width: '95%',
    height: 40,
    backgroundColor: '#fffacd',
    marginBottom: 3,
    borderRadius: 10,
    paddingHorizontal: 8,
    color: '#FFF'
  },
  button:{
    width: '95%',
    height: 40,
    backgroundColor: '#f0e68c',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText:{
   fontSize: 18, 
   fontWeight: 'bold',
   color: '#000000'
  }
})