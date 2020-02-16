import {StyleSheet} from 'react-native';
import {
  primaryError,
  primaryInput,
  sizeM,
  primaryButton,
  secondaryButtonText,
  sizeXL,
} from '../../components/typography';
export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  inputContainer: {
    borderColor: primaryInput,
    borderRadius: 4,
    borderWidth: 1,
    marginTop: 20,
  },
  inputStyle: {
    color: primaryInput,
    fontSize: sizeM,
    paddingLeft: 10,
  },
  errorInput: {
    fontSize: sizeM,
    paddingLeft: 10,
    color: primaryError,
  },
  inputStyleError: {
    borderColor: primaryError,
    borderRadius: 4,
    borderWidth: 1,
    marginTop: 20,
  },
  passwordIcon: {
    marginRight: 10,
  },
  submitButton: {
    width: '100%',
    backgroundColor: primaryButton,
  },
  buttonContainer: {
    marginTop: 20,
  },
  title: {
    color: primaryInput,
    marginBottom: 20,
    fontSize: sizeXL,
  },
  logo: {
    width: 120,
    height: 120,
  },
  subtitle: {
    fontSize: sizeM,
    color: primaryInput,
  },
  subtitleButton: {
    color: secondaryButtonText,
    fontSize: sizeM,
  },
});
