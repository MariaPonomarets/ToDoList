import {primaryWhite, sizeM} from './typography';

export const flexOne = {
  flex: 1,
};

export const flexCenter = {
  alignItems: 'center',
  justifyContent: 'center',
};

export const rowCenter = {
  flexDirection: 'row',
  ...flexCenter,
};

export const headerTitle = {
  fontSize: sizeM,
  color: primaryWhite,
  fontWeight: 'bold',
};
