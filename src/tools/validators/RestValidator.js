export const RestValidator = (data, dataType) => {
  if(data.headers['Content-Type'].indexOf("application/json") <= 0) {
    return {
      codeStatus: 500,
      msg: 'Not a JSON response'
    }
  }
  if(dataType !== 'Object') {
    return {
      codeStatus: 500,
      msg: 'The response is not an object'
    }
  }
    
}
