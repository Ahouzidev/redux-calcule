import React from 'react'
import { useSelector } from 'react-redux'

const Output = () => {
  const { result, num1, num2, nb_operation, operation_type } = useSelector(state => state)

  return (
    <div>
      {num1} {operation_type} {num2} = {result} <br />
      Number of operations: {nb_operation}
    </div>
  )
}

export default Output
