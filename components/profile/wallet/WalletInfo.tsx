import React from 'react'
import WalletInfoSingle from './WalletInfoSingle'

const WalletInfo = () => {
  return (
    <div className='mb-5 space-y-3 md:w-1/2 lg:w-full'>
      <WalletInfoSingle 
        info = 'Convert your loyalty points into wallet money'
      /> 
      <WalletInfoSingle 
        info = 'Use your wallet money to order'
      />
      <WalletInfoSingle 
        info = 'Admin also reward their top customers with wallet money'
      />      
    </div>
  )
}

export default WalletInfo