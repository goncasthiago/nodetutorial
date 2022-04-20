//Modules - Encapsulated Code (only share minimum)
//CommonJS, every file is module (by default)

//const names = require('./4-names') // we use ./ when we create the module
const {john, peter} = require('./4-names') // we use ./ when we create the module
const sayHi = require('./5-utils')
//console.log(names)

const data = require('./6-alternative-flavor')

//console.log(data)


//sayHi(names.john)
//sayHi(names.peter)
sayHi("susan")
sayHi(john)
sayHi(peter)

require('./7-mind-grenade') //we are not importing, we are running the code