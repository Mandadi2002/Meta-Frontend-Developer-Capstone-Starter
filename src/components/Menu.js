import React from "react";
import receipes from "../recipes";
import Swal from 'sweetalert2';

const Menu = () => {

    const handleOrder = (id) => {
        console.log(id,"id is clicked");
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, order it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Ordered!',
                'Your order has been processing.',
                'success'
              )
            }
          })
    }
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
                    <div className="menu-content">
                        <div className="heading">
                            <h5>{receipe.title}</h5>
                            <p>{receipe.price}</p>
                        </div>
                        <p>{receipe.description}</p>
                    </div>
                    <p>{receipe.description}</p>
                    <button className="orderBtn">Order Now</button>
                    </div>)
            }
        </div>
    </div>
    );
};

export default Menu;