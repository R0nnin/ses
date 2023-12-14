import { StyleSheet, View } from 'react-native'
import Home from './src/Screens/Home'
import ItemListCategories from './src/Screens/ItemListCategories'
import { useState } from 'react'
import { useFonts } from "expo-font"
import { colors } from './src/Global/colors'

const  App = () => {
  const [categorySelected,setCategorySelected] = useState("")
  
  const [fontLoaded] = useFonts({
    Josefin:require("./assets/Fonts/JosefinSans-Bold.ttf")
  })

  if(!fontLoaded) return null

  
  return (
    <View style={styles.container}>
      {categorySelected ?
        <ItemListCategories category = {categorySelected}/>
        :
        <Home setCategorySelected={setCategorySelected}/>
      }
     
    </View>
  )
}

export default App


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.mint1,
    alignItems: 'center',
    justifyContent: 'start',
  },
})