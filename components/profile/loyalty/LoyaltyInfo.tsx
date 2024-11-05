import React from 'react'
import WalletInfoSingle from '../wallet/WalletInfoSingle'

const LoyaltyInfo = () => {
  return (
    <div className='mb-5 space-y-3 md:w-1/2 lg:w-full'>
      <WalletInfoSingle 
        info = 'Convert your loyalty points into wallet money'
      /> 
      <WalletInfoSingle 
        info = 'Minimum 200 points required to convert into currency'
      /> 
    </div>
  )
}

export default LoyaltyInfo