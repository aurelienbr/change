import { StyleSheet } from 'react-native';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from 'constants/sizeConstants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
    paddingTop: 20,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  bgImage: {
    flex: 1,
    top: 0,
    left: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center'
  },

  formContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 20
  },
  formView: {
    marginTop: 150,
    width: 300,
    height: 400
  }
});
