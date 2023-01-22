// shows the list of bots and when clicked on a function should trigger that affects Your bot army
import React, {useState, useEffect} from "react";

function BotCollection (){
    const [botArray, getBotArray] = useState([])

    useEffect(()=>{
        fetch("https://api.jsonbin.io/v3/b/63cd5577c0e7653a055e8a42/?meta=false")
        .then(res => res.json())
        .then((data) => {
            getBotArray(data.bots)
            console.log(data.bots)
            console.log(data)
        })
    },[])
    
    return(
        <div className="row mb-3">
            {botArray.map((z)=>{
                return (
                    <div className="col-2">
                        <div className="card mb-3"  key={z.id}>
                            <img src={z.avatar_url} alt="Bot"/>
                            <div className="card-body">
                                <h5 className="card-title">{z.name}</h5>
                                <p className="card-text">Health: {z.health}  Damage: {z.damage}  Armor: {z.armor}</p>
                                <br/>
                                <p className="card-text">{z.catchphrase}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default BotCollection
