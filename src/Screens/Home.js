import { StyleSheet } from 'react-native'
import Header from '../Components/Header'
import Categories from '../Components/Categories'

const Home = ({setCategorySelected}) => {
  
  return (
        <>
            <Header title='Inventario' />
            <Categories setCategorySelected={setCategorySelected}/>
        </>
  )
}

export default Home

const styles = StyleSheet.create({

})