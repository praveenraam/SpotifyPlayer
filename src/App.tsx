import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, {useState,useEffect} from 'react'
import { setupPlayer, addTrack } from '../musicPlayerServices'

const App = ():JSX.Element => {

  const [isPlayerReady,setIsPlayerReady] = useState(false);

  async function setup() {
    let isSetup  = await setupPlayer();

    if(isSetup){
      await addTrack();
    }

    setIsPlayerReady(isSetup);
  }

  useEffect(()=>{
    setup()
  })

  if(!isPlayerReady){
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    )
  }
  return (
    <View>
      <Text>See you tmrw</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})