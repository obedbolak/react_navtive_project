import React from 'react'
import { Text, View } from 'react-native'

const dashboard = () => {
  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      <Text style={{fontSize:45, fontWeight:"bold"}} numberOfLines={2}>hi, welcome to dashboard</Text>
    </View>
  )
}

export default dashboard