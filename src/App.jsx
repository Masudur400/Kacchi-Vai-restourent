import { useEffect, useState } from "react"
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import OurRecipe from "./components/OurRecipe/OurRecipe"
import CardContainer from "./components/CardContainer/CardContainer"; 
import WantToCook from "./components/WantToCook/WantToCook";


function App() {

  const [cards, setCards] = useState([]);
  const [wantToCook, setWantToCook]= useState([]);

  useEffect(() => {
    fetch('fakeData.json')
      .then(res => res.json())
      .then(data => setCards(data))
  }, []); 


  const handleWantToCook = (item)=>{
    const inExiest = wantToCook.find(cd => cd.id === item.id)
    if(!inExiest){
      setWantToCook([...wantToCook,item])
    } 
    else{
      alert('already have.')
    }
    
  };
  // console.log(wantToCook);


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
              handleWantToCook={handleWantToCook}

              
              ></CardContainer>)
            } 
          </div> 

          <div className="w-1/3">
            <h3 className="text-2xl font-semibold my-4">Want to cook: 01</h3>
            <hr />

            <div className="flex justify-around my-5">
               <p className="font-bold"> Title</p>
               <p className="font-bold">Time</p>
               <p className="font-bold">Calories</p>
            </div>

            {
              wantToCook.map((singleCard,idx) => <WantToCook
              key={singleCard.index}
              singleCard ={singleCard}
              idx={idx}
              ></WantToCook> )
            }

             


          </div>
        </div>



      </div>
    </>
  )
}

export default App
