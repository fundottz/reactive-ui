import React, { Component } from 'react'

const defaultPortfolio = {
  positions: []
}

class PortfolioSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ping: new Date(),
      portfolio: defaultPortfolio
    };

    let eventSource = new EventSource("http://localhost:8080/portfolio/50027");

    // listen on ping from server, keep time
    eventSource.addEventListener('ping', function (e) {
      this.setState(previousState => {
        return {
          ...previousState,
          ping: new Date(e.data)
        };
      });
    }.bind(this), false);

    eventSource.onmessage = (e) => {
      var portfolio = JSON.parse(e.data);
      console.log("message ", portfolio);

      this.setState(prevState => {
        return {
          ...prevState,
          portfolio: portfolio
        }
      })
      console.log("new portfolio ", portfolio);
    }
  }

  render() {
    return (
      <div className="container mt-3">
        <h1 className="App-title text-primary mb-3">Realtime portfolio</h1>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Ticker</th>
              <th>Price</th>
              <th>Amount</th>
              <th>Volume</th>
            </tr>
          </thead>
          <tbody>
            {this.state.portfolio.positions.map((position, i) =>
              <tr key={i}>
                <th>{i + 1}</th>
                <td className="col-sm-3">{position.security}</td>
                <td className="col-sm-3">{position.statement.averagePrice}</td>
                <td className="col-sm-3">{position.amount}</td>
                <td className="col-md-3 text-right">{financial(position.volume)}</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="float-right">
            <span>Net asset value: {financial(this.state.portfolio.netAssetValue)}</span>
        </div>
      </div >
    )
  }
}

export default PortfolioSection

function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}