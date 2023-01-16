export const add = (num1, num2) => {
  return {
    type: 'ADD',
    num1,
    num2
  }
}

export const subtract = (num1, num2) => {
  return {
    type: 'SUBTRACT',
    num1,
    num2
  }
}

export const multiply = (num1, num2) => {
  return {
    type: 'MULTIPLY',
    num1,
    num2
  }
}

export const divide = (num1, num2) => {
  return {
    type: 'DIVIDE',
    num1,
    num2
  }
}
