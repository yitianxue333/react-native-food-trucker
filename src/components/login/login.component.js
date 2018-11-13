import React from 'react'
import styles from './login-style'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { ENVIRONMENT } from '../environment/environment'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addCurrentTruck } from '../../redux/modules/session'

class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      isEmailValid: false,
    }
  }

  static navigationOptions = { header: null }

  login = async (userAccount) => {
    const { navigation } = this.props

    try {
      const response = await fetch(ENVIRONMENT.DEVELOPMENT.BASE_URL + ENVIRONMENT.DEVELOPMENT.LOGIN, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userAccount),
      })

      if (response.status === 200) {
        const truck = await response.json()
        this.updateCurrenTruck(truck)
        navigation.navigate('orders')
      } else if (response.status === 404) {
        alert('Wrong email, try again!')
      } else if (response.status === 403) {
        alert('Wrong password, try again!')
      } else if (response.status === 500) {
        alert('Internal server error!')
      }
    } catch (error) {
      alert('You cannot login please try again later')
    }
  }

  updateCurrenTruck = (truck) => {
    const { addCurrentTruck } = this.props
    addCurrentTruck(truck)
  }
  
  submit = () => {
    const { isEmailValid } = this.state
    const userAccount = {
      email: this.state.email,
      password: this.state.password,
    }
    isEmailValid ? this.login(userAccount) : alert('Invalid email address')
  }

  validateEmail = (email) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    reg.test(email) ? this.setState({ isEmailValid: true }) : this.setState({ isEmailValid: false })
  }

  render() {
    return (
      <View style={styles.centeredItems}>
        <Image style={styles.loginImage}
          source={
            require('../../../assets/images/loginBackground.jpg')
          }
          blurRadius={5} />
        <View style={[styles.loginForm, styles.centeredItems]}>
          <Image style={styles.logo}
            source={
              require('../../../assets/logos/logoWithBackground_burned.png')
            } />
          <View style={styles.loginFormRow}>
            <Text style={styles.loginFormLabels}>Email</Text>
            <TextInput
              value={this.state.email}
              autoFocus={true}
              returnKeyType={"next"}
              keyboardType="default"
              autoCapitalize="none"
              onSubmitEditing={() => { this.textPassword.focus() }}
              style={styles.loginFormInput}
              onChangeText={(email) => {
                this.validateEmail(email)
                this.setState({
                  email: email
                })
              }}
            />
          </View>
          <View style={styles.loginFormRow}>
            <Text style={styles.loginFormLabels}>Password</Text>
            <TextInput
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              returnKeyType="send"
              keyboardType="default"
              autoCapitalize="none"
              ref={input => { this.textPassword = input }}
              secureTextEntry={true}
              style={styles.loginFormInput}
              onSubmitEditing={this.submit}
              blurOnSubmit={true} />
          </View>
          <TouchableOpacity style={[styles.button, styles.centeredItems]} onPress={() => this.submit()}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addCurrentTruck,
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(Login)