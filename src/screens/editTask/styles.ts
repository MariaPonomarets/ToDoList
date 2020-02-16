import {StyleSheet} from 'react-native';

import {
  sizeM,
  primaryLightGrey,
  primaryDarkGrey,
} from '../../components/typography';

export default StyleSheet.create({
  section: {
    borderBottomColor: primaryLightGrey,
    borderBottomWidth: 1,
    paddingBottom: 20,
    paddingTop: 10,
  },
  multilineInputContainer: {
    borderColor: primaryLightGrey,
    borderRadius: 4,
    borderWidth: 1,
  },
  inputStyle: {
    color: primaryDarkGrey,
    fontSize: sizeM,
    height: 80,
    paddingHorizontal: 5,
  },
  label: {
    fontSize: sizeM,
    fontWeight: 'bold',
    color: primaryDarkGrey,
    paddingBottom: 10,
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  priorityButtonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  separator: {
    width: 10,
  },
});
