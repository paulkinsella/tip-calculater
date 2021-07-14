import { useState, useEffect } from 'react';
import './Card.css';

const Card = () => {
  const [totalBill, setTotalBill] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [numOfPeople, setNumOfPeople] = useState(0);
  const fivePercent = totalBill * 5 / 100;
  const tenPercent = totalBill * 10 / 100;
  const fifteenPercent = totalBill * 15 / 100;
  const twentyFivePercent = totalBill / 4;
  const fiftyPercent = totalBill / 2;
  const spiltCost = totalBill / numOfPeople;
  const spiltTip = tipAmount / numOfPeople;
  const totalWithTip = spiltTip + spiltCost;


  const reset = () => {
    setTipAmount(0);
    setTotalBill(0);
    setNumOfPeople(0);
    document.getElementById('billInput').value = '';
    document.getElementById('numOfPeople').value = '';
  };

  return <div className="card">
    <div className="inputs">
      <div className="bill">
        <div className="tip">
          Bill:<br></br>
          <input
            id="billInput"
            className="billInput"
            onChange={(event) =>
              setTotalBill(event.target.value)
            }>
          </input>
          Select Tip %<br></br>
          <div className="buttonGroup">
            <button
              className="tipButton"
              onClick={() => setTipAmount(fivePercent)}>5%
            </button>
            <button
              className="tipButton"
              onClick={() => setTipAmount(tenPercent)}>10%
            </button>
            <button
              className="tipButton"
              onClick={() => setTipAmount(fifteenPercent)}>15%
            </button>
          </div>
          <div className="buttonGroup">
            <button
              className="tipButton"
              onClick={() => setTipAmount(twentyFivePercent)}>25%
            </button>
            <button
              className="tipButton"
              onClick={() => setTipAmount(fiftyPercent)}>50%
            </button>
            <button className="tipButton">Custom</button>
          </div>
        </div>
        Number of people:
        <input
          id="numOfPeople"
          // disabled={disabled, "disabled"}
          className="billInput"
          onChange={(event) =>
            setNumOfPeople(event.target.value)
          }></input>
      </div>
    </div>

    <div className="outputs">
      <div className="tipOutputArea-left">
        <div className="billOutput">Tip Amount:
          <div className="subNote"> / person</div>
          Total Amount:<div className="subNote"> / person</div>
          Total with Tip:<div className="subNote"> / person</div>
        </div>

      </div>

      <div className="tipOutputArea-right">
        <span className="valueOne">€{spiltTip ? spiltTip.toFixed(2) : 0}<br />
          <br />€{spiltCost && numOfPeople ? spiltCost.toFixed(2) : 0}<br />
          €{totalWithTip ? totalWithTip.toFixed(2) : 0}
        </span><br />
      </div>
      <div className="totalBillarea">Bill: €{totalBill}</div>
      <button
        className="resetButton"
        onClick={reset}>Reset
      </button>
    </div>
  </div>;
};

export default Card;