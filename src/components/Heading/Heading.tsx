import React from 'react';
import {styles} from '../../styles/main';
import {Text} from 'react-native';

export const Heading: React.FC<any> = props => {
  return (
    <Text style={[styles.boldText, styles.secondaryText, {fontSize: 20}]}>
      {props.text}
    </Text>
  );
};
