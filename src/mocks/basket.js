import logo from '../../assets/logo.png'

import tomato from '../../assets/frutas/Tomate.png'
import broccoli from '../../assets/frutas/Brócolis.png'
import pumpkin from '../../assets/frutas/Abóbora.png'
import cucumber from '../../assets/frutas/Pepino.png'
import potato from '../../assets/frutas/Batata.png'

const basket = {
  header: {
    title: 'Basket Detail'
  },
  details: {
    name: 'Basket of Vegetables',
    logoFarm: logo,
    farmName: 'Jenny Jack Farm',
    description: 'A basket with carefully selected products from the farm straight to your kitchen',
    price: '$40,00',
    button: 'Buy'
  },
  items: {
    title: 'Items in the Basket',
    list: [
      {
        name: 'Tomato',
        image: tomato,
      },
      {
        name: 'Broccoli',
        image: broccoli,
      },
      {
        name: 'Pumpkin',
        image: pumpkin,
      },
      {
        name: 'Cucumber',
        image: cucumber,
      },
      {
        name: 'Potato',
        image: potato,
      },
    ]
  }
}

export default basket