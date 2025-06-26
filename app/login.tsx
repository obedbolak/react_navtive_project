import { router } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'

const login = () => {
    const [userName, setUserName] =useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    useEffect(() => {
        // console.log(userName)
        console.log(password)
    }, [userName,password])

const hanldeLogin = () =>{
    if(password === ""){
        // here plase use slash instead of typing index because by default the shah represents index already incase you created another page without the name index then you can point to it 
        router.push("/")
    }else{
        setError("hey we are sorry")
    }
}

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:"center"}}>
      <Text style={{fontSize:45}}>Login</Text>
      <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <TextInput
              placeholder='username'
              value={userName}
              onChangeText={setUserName}
              style={{borderWidth:1, padding:10, borderRadius:10, width:400, marginVertical:10}}
            />
            <TextInput
              placeholder='password'
              value={password}
              onChangeText={setPassword}
              style={{borderWidth:1, padding:10, borderRadius:10, width:400,marginVertical:10}}
            />
            <Text style={{color:"red", fontSize:25}}>{error}</Text>
            <TouchableOpacity onPress={hanldeLogin} style={{backgroundColor:"green", alignItems:"center",padding:10, borderRadius:10}}>
              <Text style={{color:"white", fontSize:25, fontWeight:"bold"}}>Login</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  )
}

export default login

const styles = StyleSheet.create({})