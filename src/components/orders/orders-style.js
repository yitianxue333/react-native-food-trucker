import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    height: '100%',
  },

  truckInfo: {
    backgroundColor: 'white',
    height: 245,
    alignItems: 'center',
  },

  avatar: {
    borderRadius: 125 / 2,
    width: 125,
    height: 125,
    marginTop: 25,
    resizeMode: 'cover',
  },

  truckName: {
    fontSize: 20,
    marginTop: 25,
  },

  orderContainer: {
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
    paddingBottom: 13,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },

  divider: {
    backgroundColor: '#cccdce',
    height: 1,
    width: '85%',
    alignSelf: 'center',
  },

  personImage: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
  },

  status: {
    position: 'absolute',
    right: 25,
  },

  orderNumber: {
    margin: 15,
    fontSize: 17,
  },

  emptyOrders: {
    fontSize: 20,
    width: '100%',
    textAlign: 'center',
    marginTop: 20,
  },
})

export default styles