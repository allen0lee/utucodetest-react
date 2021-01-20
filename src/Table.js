import React from 'react'

class Table extends React.Component {
  constructor() {
    super()
    this.state = {
      cryptoData: [
        {"Currency": "xrp", "Price": "7,200.03", "24h": "0.0%", "7d": "0.0%", "1 month": "0.0%", "24h Volume": "0", "Mkt Cap": "0"}
      ]
    }
  }

  renderTableHeader() {
    console.log("!!!!!!!!!!!!")

    // const prepData = async () => {
    //   let cryptos = await fetch("https://nameless-sea-84524.herokuapp.com/crypto_api").then(res => {return res.json()})
      
    //   console.log(cryptos)
    //   let cryptoData = [...this.state.cryptoData]
  
    //   cryptos.forEach(crypto => {
    //     cryptoData.push(crypto)
    //   })
  
    //   this.setState({cryptoData})
      
    // } 

    // prepData()
    // console.log(this.state.cryptoData.length)

    let header = Object.keys(this.state.cryptoData[0])
    return header.map((key, index) => {
      return <th key={index}>{key}</th>
    })
  }

  renderTableData() {
    console.log(this.state.cryptoData[0])

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
          <h1 id='title'>React Dynamic Table</h1>
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