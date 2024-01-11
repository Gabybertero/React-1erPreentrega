import './App.css'
import NavBar from './components/NavBar/NavBar'
import CartWidget from './components/CartWidget/CartWidget'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App () {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a Kick's Hub"}/>
      
    </>
  )
}

export default App
