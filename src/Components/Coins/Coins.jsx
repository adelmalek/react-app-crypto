import React from 'react';
import "./Coins.css";
import CoinItem from "../CoinItem/CoinItem";
import Coin from "../../Routes/Coin";
import { Link } from "react-router-dom";

export default function Coins({coins}) {
  return (
    <div className="coins">
        <div>
            <div className="header">
                <p>#</p>
                <p className="coin-name">Coin</p>
                <p>Price</p>
                <p>24h</p>
                <p className="hide-mobile">Volume</p>
                <p className="hide-mobile">Mkt Cap</p>
            </div>
            
            {coins.map(coin => {
              return (
                <Link to={`coin/${coin.id}`} element={<Coin />}>
                  <CoinItem coin={coin} key={coin.id} />
                </Link>
              )
            })}
        </div>
    </div>
  )
}
