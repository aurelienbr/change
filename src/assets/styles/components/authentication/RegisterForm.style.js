import { StyleSheet } from 'react-native';
import { WHITE, GREY } from '~constants/colorConstants';

export default StyleSheet.create({
  loginTitle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  travelText: {
    color: WHITE,
    fontSize: 30,
    fontFamily: 'bold'
  },
  plusText: {
    color: WHITE,
    fontSize: 30,
    fontFamily: 'regular'
  },
  inputContainer: { marginVertical: 10 },
  input: { marginLeft: 10, color: WHITE },
  loginInput: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputError: { textAlign: 'center', fontSize: 12 },
  footerView: {
    marginTop: 20,
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerText: { color: GREY },
  buttonCreateTitle: { color: WHITE, fontSize: 15 },
  buttonCreateContainer: { marginTop: -10 },
  buttonLogin: {
    height: 50,
    width: 300,
    backgroundColor: 'rgba(171, 189, 219, 1)'
  },
  buttonLoginTitle: { fontWeight: 'bold', color: WHITE },
  buttonLoginContainer: { marginVertical: 10 },
  loginTitleContent: { flexDirection: 'row' },
  loginSubtitleContent: { marginTop: -10 }
});
