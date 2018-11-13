import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, Picker, FlatList } from 'react-native'
import Header from '../orders/navbar.component'
import styles from './order-style'
import { Icon } from 'react-native-elements'
import { ENVIRONMENT } from '../environment/environment'
import { BuildRoute } from '../../redux/selectors/routeBuilder'

const APIKEY = 'AIzaSyB3l00WrFhgw_bk5C9H93JgML7RTLDfLWw'

export default class Order extends Component {
  constructor(props) {
    super(props)

    const { navigation } = this.props
    const { order } = navigation.state.params

    this.state = {
      order: order,
      statuses: ENVIRONMENT.STATUSES,
      selectedStatus: order.status,
    }

  }

  static navigationOptions = { header: null }

  updateOrderState = async () => {
    const { order, selectedStatus } = this.state;
    try {
      const url = ENVIRONMENT.DEVELOPMENT.BASE_URL + ENVIRONMENT.DEVELOPMENT.UPDATE_ORDER_STATE
      const params = { id: order.id, status: selectedStatus }
      const route = BuildRoute(url, params)
      const response = await fetch(route, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })

      if (response.status === 200) {
        alert('Order status updated')
      } else if (response.status === 404) {
        alert(`Order status can't be updated`)
      } else if (response.status === 500) {
        alert('Internal server error')
      }
    } catch (error) {
      alert('You cannot change order status, please try again later')
    }
  }

  isOrderImageEmpty = (order) => {
    const defaultTruckImage = `https://s3-us-west-2.amazonaws.com/truckr-dev/blank-profile-picture.png`
    return order.image ? order.image.url : defaultTruckImage
  }

  render() {
    const { order, statuses, selectedStatus } = this.state
    const { items } = order

    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.personInfo}>
          <Image style={styles.avatar} source={{ uri: this.isOrderImageEmpty(order) }} />
          <Text style={styles.orderNumber}>Order # {order.id}</Text>
          <View style={styles.inline}>
            <Text style={styles.personName}>{order.personName}</Text>
            <Icon name='email' size={17} type='zocial' color='black' />
          </View>
        </View>
        <FlatList
          data={items}
          style={styles.itemsList}
          renderItem={({ item }) =>
            <View style={styles.itemContainer}>
              <View style={styles.productInfo}>
                <View style={styles.inline}>
                  <Text style={styles.bigFontSize}>{item.product}</Text>
                  <Text style={[styles.bigFontSize, styles.right]}> $ {(item.price * item.amount).toFixed(2)}</Text>
                </View>
                <View style={styles.itemDetail}>
                  <Text style={[styles.grey]}>Quantity: <Text>{item.amount}</Text></Text>
                </View>
                <View style={styles.itemIngredients}>
                  <View style={styles.ingredients}>
                    {
                      item.ingredients.map((ingredient, i) =>
                        <Text key={i} style={styles.grey}>{ingredient.name}</Text>
                      )
                    }
                  </View>
                </View>
              </View>
              <View style={styles.divider} />
            </View>
          }
          keyExtractor={(item, index) => index.toString()}
        />
        <View style={styles.detailContainer}>
          <Text style={[styles.grey, styles.bigFontSize]}>$ <Text>{order.subtotal.toFixed(2)}</Text></Text>
          <View style={styles.detailRow}>
            <View style={styles.detailName}>
              <Text style={[styles.grey, styles.bigFontSize]}>Tax</Text>
            </View>
            <View style={styles.detailValue}>
              <Text style={[styles.grey, styles.bigFontSize]}>$ <Text>{order.tax.toFixed(2)}</Text></Text>
            </View>
          </View>
          <View style={styles.detailRow}>
            <View style={styles.detailName}>
              <Text style={[styles.bigFontSize]}>Total</Text>
            </View>
            <View style={styles.detailValue}>
              <Text style={[styles.bold, styles.bigFontSize]}>$ <Text>{order.total.toFixed(2)}</Text></Text>
            </View>
          </View>
          <View style={[styles.inline, styles.centered]}>
            <Picker
              selectedValue={selectedStatus}
              style={styles.picker}
              itemStyle={styles.pickerItem}
              onValueChange={(itemValue, itemIndex) => { this.setState({ selectedStatus: itemValue }) }}>
              {
                statuses.map((STATUS, index) => {
                  return (<Picker.Item key={index} label={STATUS.NAME} value={STATUS.ID} />)
                })
              }
            </Picker>
            <TouchableOpacity style={styles.button} onPress={() => { this.updateOrderState() }}>
              <Icon name='check' type='entypo' color='white' />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}