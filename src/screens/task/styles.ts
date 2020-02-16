import {StyleSheet} from 'react-native';

import {
  sizeM,
  secondaryButtonBg,
  primaryWhite,
  secondaryBg,
  primaryDarkGrey,
} from '../../components/typography';

export default StyleSheet.create({
  container: {
    paddingVertical: 10,
    flex: 1,
  },
  titleContainer: {
    backgroundColor: secondaryBg,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginHorizontal: 8,
  },
  title: {
    fontSize: sizeM,
    fontWeight: 'bold',
    color: primaryDarkGrey,
    marginBottom: 10,
  },
  dueBy: {
    fontSize: sizeM,
    color: primaryDarkGrey,
  },
  priorityContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: secondaryBg,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
  },
  priorityTitle: {
    fontSize: sizeM,
    fontWeight: 'bold',
    color: primaryDarkGrey,
  },
  priorityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  priorityValue: {
    fontSize: sizeM,
    fontWeight: 'bold',
    color: 'red',
    marginLeft: 10,
  },
  button: {
    padding: 10,
  },
});
