import React from 'react';
import {Text as RNText, TextProps, StyleSheet} from 'react-native';

interface CustomTextProps extends TextProps {
  children: React.ReactNode;
}

const Text = ({children, style, ...props}: CustomTextProps) => {
  return (
    <RNText style={[styles.text, style]} {...props}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#000000',
  },
});

export default Text;
