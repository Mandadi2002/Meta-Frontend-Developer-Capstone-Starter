import React from "react";
import receipes from "../recipes";


const Menu = () => {
    <div classname='menu=container'>
        <div>
            <h2>This week specials</h2>
            <button>Online Menu</button>
        </div>

        <div className='cards'>
            {
                receipes.map(receipe => <div key={receipe.id} className='menu-items'>
                <img src={receipe.image} alt=''/>
                <div>
                    <div>
                        <h5>{receipe.title}</h5>
                        <p>{receipe.price}</p>
                    </div>
                       <p>{receipe.description}</p>
                       <button className="orderBtn">Order Now</button>
                    </div>
                </div>)
}
        </div>
    </div>
}

export default Menu;