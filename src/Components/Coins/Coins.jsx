import React from 'react';
import "./Coins.css";
import CoinItem from "../CoinItem/CoinItem";

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

            {coins.map(coin => <CoinItem coin={coin} key={coin.id} />)}
        </div>
    </div>
  )
}
