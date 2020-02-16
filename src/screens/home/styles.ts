import {StyleSheet} from 'react-native';

import {
  sizeM,
  secondaryButtonBg,
  primaryWhite,
} from '../../components/typography';

export default StyleSheet.create({
  headerTitle: {
    fontSize: sizeM,
    color: primaryWhite,
    fontWeight: 'bold',
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: 50,
    right: 20,
  },
  addButton: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: secondaryButtonBg,
  },
});
