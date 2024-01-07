import React from 'react'
import {checkToken} from '../utilities/users-services';

function OrderHistoryPage() {
  const handleCheckToken = async () => {
    try {
      const expDate = await checkToken()
      console.log(expDate)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <h1>OrderHistoryPage</h1>
      <button onClick={handleCheckToken}>Check Log In Expiration</button>
    </div>
  )
}

export default OrderHistoryPage