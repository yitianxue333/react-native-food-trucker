import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
  },

  avatar: {
    borderRadius: 110 / 2,
    width: 110,
    height: 110,
    marginTop: 15,
    marginBottom: 15,
    resizeMode: 'cover',
  },

  personInfo: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },

  personName: {
    fontSize: 15,
    marginRight: 10,
  },

  picker: {
    borderRadius: 5,
    backgroundColor: '#CB4640',
    justifyContent: 'center',
    width: '65%',
    height: 45,
    paddingTop: 5,
    paddingBottom: 7,
    marginTop: 25,
    marginBottom: 25,
    marginLeft: 'auto',
    marginRight: 'auto',
    overflow: 'hidden',
  },

  button: {
    borderRadius: 5,
    backgroundColor: '#CB4640',
    justifyContent: 'center',
    width: 45,
    height: 45,
    paddingTop: 5,
    paddingBottom: 7,
    marginTop: 25,
    marginBottom: 25,
    marginLeft: 'auto',
    marginRight: 'auto',
    overflow: 'hidden',
  },

  pickerItem: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },

  detailContainer: {
    width: '100%',
    alignItems: 'flex-end',
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: 'white',
    paddingTop: 10,
  },

  detailRow: {
    flexDirection: 'row',
    width: '45%',
  },

  detailName: {
    width: '50%',
  },

  detailValue: {
    width: '50%',
    alignItems: 'flex-end',
  },

  orderNumber: {
    fontSize: 24,
  },

  inline: {
    flexDirection: 'row',
  },

  centered: {
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
  },

  bigFontSize: {
    fontSize: 18,
  },

  grey: {
    color: '#9a9ea5'
  },

  bold: {
    fontWeight: 'bold',
  },

  itemContainer: {
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  itemDetail: {
    marginLeft: 25,
    marginTop: 5,
  },

  itemIngredients: {
    marginLeft: 25,
    marginTop: 5,
  },

  divider: {
    backgroundColor: '#cccdce',
    height: 1,
    width: '100%',
    marginTop: 5,
    marginBottom: 5,
  },

  itemsList: {
    marginBottom: 0,
  },

  right: {
    position: 'absolute',
    right: 0,
  },
})

export default styles