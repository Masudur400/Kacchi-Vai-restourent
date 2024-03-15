import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import OurRecipe from "./components/OurRecipe/OurRecipe"

 

function App() {
   

  return (
    <> 
      <div className="container mx-auto px-10 mt-10">
      <Navbar></Navbar>
      <Header></Header>
      <OurRecipe></OurRecipe>



      </div> 
    </>
  )
}

export default App
