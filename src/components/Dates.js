import React, { useState } from 'react'

const dateFns = require("date-fns")



export default function Dates() {
  const [d, setD] = useState("")
  const [amount, setAmount] = useState("")

  const handleClick = () => {
    const ir = document.getElementById("ir").value;
    var amount = document.getElementById("amount").value;
    amount = +amount;
    var date1 = new Date(document.getElementById("start").value)
    var date2 = new Date(document.getElementById("end").value)
    var totalDuration = dateFns.intervalToDuration({
      start: date1,
      end: date2
    })
    console.log(totalDuration)
    var a = totalDuration.years
    var b = totalDuration.months
    var c = totalDuration.days
    const d = a + "  years  " + b + "  months  " + c + "  days "
    setD(d)
    b = b + (c / 30)


    if (a !== 0) {
      while (a > 0) {
        var ia = (amount / 100) * (12 * ir)
        console.log(ia)
        amount = amount + ia
        a--
      }

    }
    ia = (amount / 100) * (ir * b)
    amount = amount + ia
    setAmount(amount)
  }

  return (
    <div className='container'>
      <div className='container bg-info '>
        <div className='container'>
          <br />
          <h6>Start Date</h6>
          <input type="date" id="start" />
        </div>
        <div className='container my-4'>
          <h6>End Date</h6>
          <input type="date" id="end" />
        </div>
        <br />
        <div className='container my-4'>
          <h3>Amount Given</h3>
          <input type="number" id="amount" />
        </div>
        <br />
        <div className='container my-4'>
          <h5>Interest for 100 Rupees(per month)</h5>
          <input type="number" id="ir" value="1.5"/>
        </div>
        <br />
        <button className='btn btn-warning btn-lg' onClick={handleClick}> Calculate</button>
        <hr className='' />
      </div>


      <div className='container'>
        <div className='container my-3'><h6><b>Duration: </b>{d}</h6></div>
        <div className='container my-5'><h3>Final Amount: <b>{amount}</b></h3></div>
      </div>
    </div>
  );
}
