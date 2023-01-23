//where drafted bots will be shown
import React from "react";


function YourBotArmy({showResult, removeItem}){
    return(
            <div className="height">
                {showResult && showResult.map(z=>{
                    return(
                        <div key={z.id}>
                            <div className="col-5" key={z.id}  id= {z.id}  onClick={()=> removeItem(z)}>
                                <div className="card mb-2" >
                                    <img src={z.avatar_url} alt="Bot"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{z.name} hello</h5>
                                        <p className="card-text">{z.catchphrase}</p>
                                        <br/>
                                        <p className="card-text">Health: {z.health}  Damage: {z.damage}  Armor: {z.armor}</p>
                                        

                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

    )
}

export default YourBotArmy