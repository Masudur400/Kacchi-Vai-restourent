import { useEffect, useState } from "react"
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import OurRecipe from "./components/OurRecipe/OurRecipe"
import CardContainer from "./components/CardContainer/CardContainer";



function App() {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('fakeData.json')
      .then(res => res.json())
      .then(data => setCards(data))
  }, []); 


  return (
    <>
      <div className="container mx-auto px-10 mt-10">
        <Navbar></Navbar>
        <Header></Header>
        <OurRecipe></OurRecipe>

        <div className="flex gap-10">
          <div className="w-2/3 grid grid-cols-2 gap-10">
            {
              cards.map(card => <CardContainer
              key={card.id}
              card = {card}
              
              ></CardContainer>)
            } 
          </div> 

          <div className="w-1/3">

          </div>
        </div>



      </div>
    </>
  )
}

export default App
