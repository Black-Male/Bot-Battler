// shows the list of bots and when clicked on a function should trigger that affects Your bot army
import React from "react";


function BotCollection ({botArray, prepareToShow,deleteStuff}){ 

    return(

            <div className="row mb-3">
                {botArray.map((z)=>{
                    return (
                         
                        <div className="col-2 mb-3" key={z.id}  id= {z.id} >
                            <div className="card " onClick = {()=>prepareToShow(z)}  >
                                
                                <img src={z.avatar_url} alt="Bot"/>
                                <div className="card-body">
                                    <h5 className="card-title">{z.name}</h5>
                                    <p className="card-text">{z.catchphrase}</p>
                                    <br/>
                                    <p className="card-text">Health: {z.health}  Damage: {z.damage}  Armor: {z.armor}</p>
                                    

                                </div>
                                
                            </div>
                            <button type="submit" className="btn btn-danger" onClick={()=>deleteStuff(z)}>Discharge</button>
                        </div>
                    )
                })}
            </div>

    )
}

export default BotCollection
