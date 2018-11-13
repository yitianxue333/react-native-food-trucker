import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

  centeredItems: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },

  loginForm: {
    width: '70%',
    height: '100%',
  },

  logo: {
    height: '20%',
    width: '60%',
  },

  loginImage: {
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  button: {
    marginTop: 15,
    height: 30,
    backgroundColor: '#CB4640',
    marginBottom: 10,
    borderRadius: 5,
    width: '100%',
    height: 45,
  },

  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },

  loginFormLabels: {
    color: 'white',
    fontSize: 15,
    marginBottom: 4,
    marginLeft: 0,
    fontWeight: 'bold',
  },

  loginFormInput: {
    color: 'white',
    height: 50,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderColor: 'white',
  },

  loginFormRow: {
    marginTop: 15,
    width: '100%',
  },

  accountText: {
    fontSize: 14,
    color: 'white',
  },

  createAccount: {
    color: '#CB4640',
    fontSize: 14,
    textDecorationLine: 'underline'
  },

})

export default styles