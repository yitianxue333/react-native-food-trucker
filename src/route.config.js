import { createStackNavigator } from 'react-navigation'
import Login from './components/login/login.component'
import Orders from './components/orders/orders.component'
import Order from './components/order/order.component'

const RootStack = createStackNavigator(
  {
    login: Login,
    orders: Orders,
    order: Order,
  },
  {
    initialRouteName: 'login',
    navigationOptions: {}
  }
)

export default RootStack