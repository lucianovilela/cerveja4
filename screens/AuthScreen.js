import { View, Text, TextInput, Button, Alert,AsyncStorage } from "react-native";


import React, { useState, useEffect, useRef } from "react";

import ProviderFirebase from "../providers/ProviderFirebase";
import  PERSISTENCE from  "../constants/Persistence";


const AuthScreen = ({ navigation }) => {

  const provider= useRef();


  useEffect( ()=>{
      provider.current =  new ProviderFirebase("/user");
  },[]);
 
  const usuarioLogadoComSucesso= async()=>{
    
  }

  const login = async ()=>{
    const msg = await provider.current.loginUser(info.email, info.senha);
 
    if(msg.operationType === "signIn")
        usuarioLogadoComSucesso();
  }
  const [info, setInfo] = useState({email:"lucianovilela@gmail.com", senha:"123456"});

  return (
    <React.Fragment>
      <View style={{justifyContent:"center"}}>
        <TextInput
          name="email"
          placeholder="email"
          value={info.email}
          
          onChangeText={( text ) => {
            setInfo({...info, email:text});
          }}
        />
        <TextInput
          name="senha"
          placeholder="password"
          type="password"
          value={info.senha}
          secureTextEntry
          onChangeText={( text ) => {
            setInfo({...info, senha:text});
          }}
        />
      </View>
      <View>
        <Button title="entrar" onPress={login} />
      </View>
    </React.Fragment>
  );
};

export default AuthScreen;
