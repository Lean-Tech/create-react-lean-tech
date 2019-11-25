import _ from 'lodash'
const array = []
function ArrayString (key, value, avoid) {
  // Creates and object with the key an its value
  const obj = {
    key,
    value
  }

  // If the avoid props is set in the Text component then the key and content won't be checked neither stored
  if (avoid) {
    return
  }

  // Looks for the key and its content, and if the is and existing key with different values
  // then a error will be displayed 
  _.findIndex(array, function (k) {
    if (k.key === obj.key && k.value !== obj.value) {
      throw Error(`Error the key: ${k.key} exist!`)
    }
  })

  //Filters the arrys to check if the is and existing key
  var filteredKey = array.filter(function (hero) {
    return hero.key === obj.key
  })

  //If there is not filteredKey items then the object will be added to the array
  if (filteredKey.length <= 0) {
    array.push(obj)
  }

  return array
}
export { ArrayString }
