import React from "react";
import receipes from "../recipes";


const Menu = () => {
    return (
    <div classname='menu=container'>
        <div className="menu-header">
            <h2>This weeks specials!</h2>
            <button>Online Menu</button>
        </div>
        
        <div className="cards">
            {
                receipes.map(receipe => <div key={receipe.id}>
                    <img src={receipe.image} alt=''/>
                    <div>
                        <div>
                            <h5>{receipe.title}</h5>
                            <p>{receipe.price}</p>
                        </div>
                        <p>{receipe.description}</p>
                    </div>
                    <p>{receipe.description}</p>
                    <button className="orderBtn">Order Now</button>
                    }

                )
            }
        </div>