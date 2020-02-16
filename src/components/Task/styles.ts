import {StyleSheet} from 'react-native';

import {
  sizeL,
  sizeM,
  secondaryBg,
  secondaryButtonText,
  primaryDarkGrey,
} from '../../components/typography';

export default StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 20,
    borderBottomColor: secondaryBg,
    borderBottomWidth: 1,
    paddingTop: 15,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    paddingRight: 15,
  },
  title: {
    color: primaryDarkGrey,
    fontWeight: 'bold',
    fontSize: sizeL,
    paddingBottom: 5,
  },
  time: {
    color: primaryDarkGrey,
    fontSize: sizeM,
    paddingBottom: 5,
  },
  priority: {
    color: secondaryButtonText,
    fontSize: sizeM,
    paddingLeft: 10,
  },
  priorityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
});
