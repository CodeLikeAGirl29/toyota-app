import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    zIndex: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
    title: {
    fontSize: 19,
    color: '#DA291C',
    fontWeight: '800',
    padding : 2,
    textAlign: 'center',
    margin: 10,
  },
  // logo: {
  //   width: 100,
  //   height: 20,
  //   resizeMode: 'contain',
  // },
  menu: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  }
});

export default styles;
