import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Coin.css";

export default function Coin() {
  const params = useParams()
  const [coin, setCoin] = useState({});
  const url = `https://api.coingecko.com/api/v3/coins/${params.id}`;

  useEffect( () => {
    axios.get(url)
      .then(res => {
        setCoin(res.data)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <div>
      <div className="coin-container">

        <div className="content">
          <h1>{coin.name}</h1>
        </div>

        <div className="content">
          <div className="rank">
            <span className="rank-btn">Rank # {coin.market_cap_rank}</span>
          </div>
          <div className="info">
            <div className="coin-heading">
              {coin.image ? <img src={coin.image.small} alt=""/> : null}
              <p>{coin.name}</p>
              <p>{coin.symbol}</p>
            </div>
          </div>
          <div className="coin-price">
            {coin.market_data? <h1>{coin.market_data.current_price.usd}</h1> : null}
          </div>
        </div>

        <div className="content">
          <table>
            <thead>
              <tr>
                <th>1h</th>
                <th>24h</th>
                <th>7d</th>
                <th>14d</th>
                <th>30d</th>
                <th>1yr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {coin.market_data?.price_change_percentage_1h_in_curreny ? <td>{coin.market_data.price_change_percentage_1h_in_curreny.usd}</td> : null}
                {coin.market_data?.price_change_percentage_24h_in_curreny? <td>{coin.market_data.price_change_percentage_24h_in_curreny.usd}</td> : null}
                {coin.market_data?.price_change_percentage_1d_in_curreny? <td>{coin.market_data.price_change_percentage_1d_in_curreny.usd}</td> : null}
                {coin.market_data?.price_change_percentage_7d_in_curreny? <td>{coin.market_data.price_change_percentage_7d_in_curreny.usd}</td> : null}
                {coin.market_data?.price_change_percentage_30d_in_curreny? <td>{coin.market_data.price_change_percentage_30d_in_curreny.usd}</td> : null}
                {coin.market_data?.price_change_percentage_1y_in_curreny? <td>{coin.market_data.price_change_percentage_1y_in_curreny.usd}</td> : null}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="content">
          <div className="stats">

            <div className="left">
              <div className="row">
                <h1>24 Hour Low</h1>
                {coin.market_data? <p>{coin.market_data.low_24h.usd}</p> : null}
              </div>
              <div className="row">
                <h1>24 Hour High</h1>
                {coin.market_data? <p>{coin.market_data.high_24h.usd}</p> : null}
              </div>
            </div>

            <div className="right">
              <div className="row">
                <h1>Market Cap</h1>
                {coin.market_data? <p>{coin.market_data.market_cap.usd}</p> : null}
              </div>
              <div className="row">
                <h1>Circulating Supply</h1>
                {coin.market_data? <p>{coin.market_data.circulating_supply}</p> : null}
              </div>
            </div>

          </div>
        </div>

        <div className="content">
          <div className="about">
            <h3>About</h3>
            {coin.description? <p>{coin.description.en}</p> : null}
          </div>
        </div>

      </div>
    </div>
  )
}
