import React from 'react'
import './Table.css'

class Table extends React.Component {
  constructor() {
    super()
    this.state = {
      cryptoData: [
        {"Currency": null, "Price": null, "24h": null, "7d": null, "1 month": null, "24h Volume": null, "Mkt Cap": null}
      ]
    }
  }

  componentDidMount() {
    const readAPI = async () => {      
      await fetch("http://localhost:4567/crypto_api").then(res => res.json()).then(cryptos => {
        console.log(cryptos) // api array  
        cryptos.forEach(crypto => {
          this.setState({cryptoData: [...this.state.cryptoData, crypto]}) 
        })
      })
      this.setState({cryptoData: this.state.cryptoData.slice(1)}) // remove first empty line in table, shift() will mutate
      console.log(this.state.cryptoData.length)
    } 
    readAPI()    
  }

  renderTableHeader() {
    let header = Object.keys(this.state.cryptoData[0])
    return header.map((key, index) => {
      return <th key={index}>{key}</th>
    })
  }

  renderTableData() {
    return this.state.cryptoData.map((crypto, index) => {
      const {Currency, Price, "24h":TwentyFourHour, "7d":SevenDay, "1 month":OneMonth, "24h Volume":TwentyFourHourVolume, "Mkt Cap":MktCap} = crypto //destructuring
      return (
        <tr key={Currency}>
          <td>{Currency}</td>
          <td>{Price}</td>
          <td>{TwentyFourHour}</td>
          <td>{SevenDay}</td>
          <td>{OneMonth}</td>
          <td>{TwentyFourHourVolume}</td>
          <td>{MktCap}</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div>
          <table id='cryptoData'>
            <tbody>
              <tr>{this.renderTableHeader()}</tr>
              {this.renderTableData()}
            </tbody>
          </table>
      </div>
    )
  }
}

export default Table;