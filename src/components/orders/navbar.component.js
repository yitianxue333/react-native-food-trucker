import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Header, Icon } from 'react-native-elements'
import styles from './navbar-style'

export default class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <View>
        <Header
        statusBarProps={{ barStyle: 'light-content' }}
        leftComponent={
          <TouchableOpacity>
            <Icon name='menu' color='white' />
          </TouchableOpacity>
        }
        rightComponent={
          <TouchableOpacity>
            <Icon name='location-on' color='white' />
          </TouchableOpacity>
        }
        outerContainerStyles={styles.header}
        />
      </View>
    )
  }
}
