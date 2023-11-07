import React from 'react'
import InvestmentLogo from ".././assets/investment-calculator-logo.png"

const Header = () => {
  return (
    <header id='header'>
      <img src={InvestmentLogo} alt='investment-logo'/>
      <h1>Investment-calculator</h1>
    </header>
  )
}

export default Header
