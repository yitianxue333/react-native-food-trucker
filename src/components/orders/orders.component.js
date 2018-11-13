import React, { Component } from 'react'
import { View, Image, Text, FlatList, TouchableOpacity, RefreshControl } from 'react-native'
import NavBar from './navbar.component'
import styles from './orders-style'
import { ENVIRONMENT } from '../environment/environment'
import { connect } from 'react-redux'
import { Icon } from 'react-native-elements'
import { BuildRoute } from '../../redux/selectors/routeBuilder'
import MapView, { Marker } from 'react-native-maps';

class Orders extends Component {

  constructor(props) {
    super(props)
    const { currentTruck } = props
    this.state = {
      truck: currentTruck,
      orders: [],
      refreshing: false,
      latitude: 0.0,
      longitude: 0.0
    }
    this.pullOrders()

  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
    );
  }

  updateLocation() {
    fetch('url', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
      body: 'latitude=' + this.state.latitude +
        '&longitude=' + this.state.longitude
    }).then((result) => {
      console.log(result)
    }).catch(err => {
      console.log(err)
    })
  }

  static navigationOptions = { header: null }

  pullOrders = async () => {
    const { id } = this.state.truck
    try {
      const url = ENVIRONMENT.DEVELOPMENT.BASE_URL + ENVIRONMENT.DEVELOPMENT.GET_ORDERS
      const params = { id: id }
      const route = BuildRoute(url, params)
      const response = await fetch(route, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })

      if (response.status === 200) {
        const orders = await response.json()
        this.setState({
          orders: orders.orders
        })
      } else if (response.status === 500) {
        alert(`Internal server error`)
      }
    } catch (error) {
      alert(`Your orders can't be retrieved, please try again later`)
    }
  }

  isTruckImageEmpty = () => {
    const defaultTruckImage = require(`../../../assets/images/foodTruckEmpty.jpg`)
    const { truck } = this.state
    if (truck.imageId) {
      return {
        uri: truck.imageId.url,
      }
    } else {
      return defaultTruckImage
    }
  }

  renderStatus(order) {
    switch (order.status) {
      case ENVIRONMENT.ORDER_STATUS.IN_PROGRESS.ID:
        return (
          <Icon name='hour-glass' type='entypo' size={32} color='#9C9A40' />
        )
        break
      case ENVIRONMENT.ORDER_STATUS.READY.ID:
        return (
          <Icon name='ios-thumbs-up' size={32} type='ionicon' color='#04B431' />
        )
        break
      case ENVIRONMENT.ORDER_STATUS.DELIVERED.ID:
        return (
          <Icon name='check' size={32} type='entypo' color='#2E4A62' />
        )
        break
      case ENVIRONMENT.ORDER_STATUS.REJECTED.ID:
        return (
          <Icon name='ios-thumbs-down' size={32} type='ionicon' color='#CB4640' />
        )
        break
      case ENVIRONMENT.ORDER_STATUS.NEW.ID:
        return (
          <Icon name='burst-new' type='foundation' size={35} color='#F6D155' />
        )
        break
      default:
        return (
          <Icon name='not-interested' size={35} color='black' />
        )
        break
    }
  }

  isOrderImageEmpty = (order) => {
    const defaultTruckImage = `https://s3-us-west-2.amazonaws.com/truckr-dev/blank-profile-picture.png`
    return order.image ? order.image.url : defaultTruckImage
  }

  isOrdersListEmpty = () => {
    const { orders } = this.state
    return orders.length > 0
  }

  onRefresh = () => {
    this.setState({ refreshing: true })
    this.pullOrders()
    this.setState({ refreshing: false })
  }

  render() {
    const { navigation } = this.props
    const { orders, truck } = this.state
    return (
      <View style={styles.container}>
        <NavBar />
        <View style={styles.truckInfo}>
          <Image style={styles.avatar} source={this.isTruckImageEmpty()} />
          <Text style={styles.truckName}>{truck.name}</Text>
        </View>
        <View style={{ height: 200, width: '100%' }}>
          <MapView
            provider='google'
            style={{ flex: 1.0 }}
            region={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <Marker title='You are here' coordinate={{ latitude: this.state.latitude, longitude: this.state.longitude }}></Marker>
          </MapView>
        </View>
        {
          this.isOrdersListEmpty()
            ?
            <FlatList
              data={orders}
              refreshControl={
                <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={() => { this.onRefresh() }}
                />
              }
              renderItem={({ item: order }) =>
                <TouchableOpacity onPress={() => { navigation.navigate('order', { order: order }) }}>
                  <View style={styles.orderContainer}>
                    <Image style={styles.personImage} source={{ uri: this.isOrderImageEmpty(order) }} />
                    <Text style={styles.orderNumber}> Order # {order.id}</Text>
                    <TouchableOpacity style={styles.status}>
                      {
                        this.renderStatus(order)
                      }
                    </TouchableOpacity>
                  </View>
                  <View style={styles.divider} />
                </TouchableOpacity>
              }
              keyExtractor={(_, index) => index.toString()}
            />
            :
            <Text style={styles.emptyOrders}>You have no orders</Text>
        }
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  currentTruck: state.session.currentTruck,
})

export default connect(mapStateToProps)(Orders)