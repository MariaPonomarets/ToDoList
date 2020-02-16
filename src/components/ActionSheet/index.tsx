import React from 'react';
import {ActionSheetCustom} from 'react-native-custom-actionsheet';
import {useDispatch} from 'react-redux';
import {setSort} from '../../state/reducers/sortReducer';
import {FETCH_TASKS} from '../../state/reducers/tasksReducer';

const CANCEL_INDEX = 0;
const values = {
  'Title ascending': 'title asc',
  'Title descending': 'title desc',
  'Due by ascending': 'dueBy asc',
  'Due by descending': 'dueBy desc',
  'Priority ascending': 'priority asc',
  'Priority descending': 'priority desc',
};

const options = [
  'Cancel',
  'Title ascending',
  'Title descending',
  'Due by ascending',
  'Due by descending',
  'Priority ascending',
  'Priority descending',
];

interface Props {
  innerRef: ActionSheetCustom;
}

const ActionSheet = ({innerRef}: Props) => {
  const dispatch = useDispatch();
  const handlePress = async (index: number) => {
    const sort = values[options[index]];
    await dispatch(setSort(sort));
    await dispatch({type: FETCH_TASKS, reset: true});
  };
  return (
    <ActionSheetCustom
      ref={innerRef}
      title={'Sort'}
      message="Chose sort"
      options={options}
      cancelButtonIndex={CANCEL_INDEX}
      onPress={handlePress}
    />
  );
};

export default ActionSheet;
