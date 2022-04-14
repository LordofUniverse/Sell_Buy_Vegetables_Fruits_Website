import { useNavigate } from "react-router-dom";

import './cart.css'
import home from "./home.jpg";

function Cart() {

    let navigate = useNavigate(); 

    const ToHome = () =>{ 
        navigate("../");
    }

    return (
        <div class = "App3">
            <div class = "symb2">
                <img class = "symbimg2" src = {home} alt = "..." onClick={ToHome}/>
            </div>
            
            <div class = "tit">
                My Cart
            </div>
            <div class = "cont"></div>
        </div>
    )

}

export default Cart;