import React from 'react';

export class ComponentToPrint extends React.PureComponent {
  render() {
    return (
      <>
        <div id="invoice-POS">
          <center id="top">
            <div className="info">
              <h2>  Etracs</h2>
            </div>
          </center>
          <div id="mid">
            <div className="info">
              <h2>Kiosk Transaction</h2>
              <p className='text-2xl'>
                Label : <br />
                Queue No : <br />
                Cashier No : <br />
              </p>
            </div >
          </div >
        </div>
      </>
    );
  }
}