import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styled from 'styled-components';

const TitleText = styled(Text)`
  font-size: 36px;
  font-weight: 600;
`;
const Title = ({title, style}) => {
  return (
    <View style={styles.container}>
      <TitleText style={style}>{title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Title;
