import { useState } from 'react';

import './Order.css';

import beetroot from "./beetroot.jpg";
import onion from "./onion.jpg";
import carrot from "./carrot.jpg";
import kiwi from "./kiwi.jpg";
import lettuce from "./lettuce.jpg";
import pineapple from "./Pineapple.jpg";
import pomegranate from "./Pomegranate.jpg";
import pumpkin from "./pumpkin.jpg";
import cart from "./cart.png";


function Sell() {

    const [data, setdata] = useState(["Beetroot", "Onion", "Carrot", "Kiwi"])
    const [data2, setdata2] = useState(["Lettuce", "PineApple", "Pomegranate", "Pumpkin"])
    const [count, setcount] = useState([0, 0, 0, 0])
    const [count2, setcount2] = useState([0, 0, 0, 0])
    const [img, setimg] = useState([beetroot, onion, carrot, kiwi])
    const [img2, setimg2] = useState([lettuce, pineapple, pomegranate, pumpkin])

    return (
    <div class = "Order">
        <div class = "symb">
                <img class = "symbimg" src = {cart} alt = "..." />
        </div>
        <div class = "search">
            {/* <div class = "box"> */}
                {/* <input></input> */}
            {/* </div> */}
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Type Product name to sell" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                {/* <span class="input-group-text" id="basic-addon2"></span> */}
            </div>
        </div>
        <div class = "products">
            <div class = "Row">
                {
                    data.map((element, index) => {
                        if (count[index] == 0){
                            console.log(data[index])
                            return (
                                <div class="card" >
                                    <img src={img[index]} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{data[index]}</h5>
                                        <h6 class="card-title">Rs 50</h6>
                                        <div class = "cart">
                                            {/* Add to Cart */}
                                            <a href="#" class="btt btn btn-primary">Add to Cart</a>
                                            {/* <a href="#" class="bt btn btn-primary">-</a> */}
                                            {/* 0 */}
                                        </div>
                                    </div>
                                </div>
                            )
                        } else {
                            console.log('hiw')
                            return (
                                <div class="card" >
                                    <img src="beetroot.jpg" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Beetroot</h5>
                                        <h6 class="card-title">Rs 50</h6>
                                        <div class = "cart">
                                            {/* Add to Cart */}
                                            <a href="#" class="btt btn btn-primary">+</a>
                                            0
                                            <a href="#" class="bt btn btn-primary">-</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }

                </div>

                <div class = "Row">
                {
                    data.map((element, index) => {
                        if (count2[index] == 0){
                            // console.log(data2[index])
                            // count2[index] += 1;
                            // setcount2(count2);
                            return (
                                <div class="card" >
                                    <img src={img2[index]} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{data2[index]}</h5>
                                        <h6 class="card-title">Rs 50</h6>
                                        <div class = "cart">
                                            {/* Add to Cart */}
                                            <a href="#" class="btt btn btn-primary">Add to Cart</a>
                                            {/* <a href="#" class="bt btn btn-primary">-</a> */}
                                            {/* 0 */}
                                        </div>
                                    </div>
                                </div>
                            )
                        } else {
                            console.log('hiw')
                            return (
                                <div class="card" >
                                    <img src={img2[index]} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{data2[index]}</h5>
                                        <h6 class="card-title">Rs 50</h6>
                                        <div class = "cart">
                                            {/* Add to Cart */}
                                            <a href="#" class="btt btn btn-primary">+</a>
                                            0
                                            <a href="#" class="bt btn btn-primary">-</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }

                </div>
                
                {/* <div class="card" >
                    <img src="onion.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Onion</h5>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card" >
                    <img src="carrot.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Carrot</h5>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card" >
                    <img src="kiwi.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Kiwi</h5>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

            <div class = "Row">
                <div class="card" >
                    <img src="lettuce.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Lettuce</h5>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card" >
                    <img src="Pineapple.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Pineapple</h5>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card" >
                    <img src="Pomegranate.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Pomegranate</h5>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card" >
                    <img src="pumpkin.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Pumpkin</h5>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div> */}
            {/* </div> */}
        </div>
    </div>
  );
}

export default Sell;