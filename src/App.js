import { useLinkClickHandler, useNavigate } from "react-router-dom";
import bg from "./bg.jpeg"
import './App.css';


function App() {

  let navigate = useNavigate();

  const buy = () => {
    navigate('/order');
  }

  const sell = () => {
    navigate('/sell');
  }

  return (
    <div className="App" style={{ 
      backgroundImage: `URL(${bg})`
     }}>
      <div class = "left">
        <div class = 'title'>
          NAME
        </div>
        <div class = 'content'>
          Solving inefficiencies across Agro-logistical sector with technology
        </div>
      </div>
      <div class = "right">
        <div class = 'buy'>
          <div class = "container">
            <div class = "top">BUY</div>
              <div class = "bottom">
                <div class = "text">Get fresh fruits and vegetables</div>
                <div class = "button" onClick={buy}>Place Order</div>
              </div>
          </div>
        </div>
        <div class = 'sell'>
          <div class = "container">
            <div class = "top">SELL</div>
              <div class = "bottom">
                <div class = "text">Sell your produce to us at a reasonable price</div>
                <div class = "button" onClick={sell}>List Items</div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
