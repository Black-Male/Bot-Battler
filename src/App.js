import React, {useState, useEffect} from 'react';
import './App.css';
import BotCollection from './Components/BotCollection';
import YourBotArmy from './Components/YourBotArmy'

function App() {

  const [botArray, getBotArray] = useState([])

  useEffect(()=>{
      fetch("https://api.jsonbin.io/v3/b/63cd5577c0e7653a055e8a42/?meta=false")
      .then(res => res.json())
      .then((data) => {
          getBotArray(data.bots)
      })
  },[])

  const [showResult, getResult] = useState([])

  function prepareToShow(item){
    // console.log(item)
    const matchItem =  botArray.find(result => result.id === item.id)
    getResult((current)=>{
      if(current.some(d=> d.id === matchItem.id)){
        return [...current]
      }
      return [...current, matchItem]
    })

  }

  function removeItem(item){
    console.log(item)
    getResult(data=> {return data.filter(info=>info.id !== item.id)})
  }

  function deleteStuff(stuff){
    console.log(stuff)
    getResult(data => {return data.filter(info => info.id !== stuff.id)})
    getBotArray(data => {return data.filter(info => info.id !== stuff.id)})
  }

  return (
    <div className="App">
      <YourBotArmy 
        showResult={showResult}
        removeItem = {removeItem}
      />
      <BotCollection
        botArray = {botArray}
        prepareToShow = {prepareToShow}
        deleteStuff = {deleteStuff}
      />
    </div>
  );
}

export default App;
