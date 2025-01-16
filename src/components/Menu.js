import React from "react";
import receipes from "../recipes";


const Menu = () => {
    <div classname='menu=container'>
        <div>
            <h2>This week specials</h2>
            <button>Online Menu</button>
        </div>

        <div>
            {
                receipes.map(receipe => <div key={receipe.id}>
                <img src={receipe.image} alt=''/>
                <div>
                    <div>
                        <h5>{receipe.title}</h5>
                        <p>{receipe.price}</p>
                    </div>
                       <p>{receipe.description}</p>
                       <button>Order Now</button>
                    </div>
                </div>)
}
        </div>
    </div>
}

export default Menu;