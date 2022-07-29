import './App.css';

import axios from "axios";
import { useState, useEffect } from "react";

import Navbar from "./Components/Navbar/Navbar";
import Coins from "./Components/Coins/Coins";

function App() {
  const [coins, setCoins] = useState([]);

  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false";

  useEffect(() => {
    axios.get(url)
      .then(res => {
        setCoins(res.data)
        console.log(res.data[0])
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Coins coins={coins}/>
    </div>
  );
}

export default App;
