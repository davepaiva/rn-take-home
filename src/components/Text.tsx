import palette from '@styles/palette';
import React from 'react';
import {Text as RNText, TextProps} from 'react-native';

type TextVariant = 'primary' | 'secondary' | 'tertiary' | 'light';

type TextSize = 'small' | 'medium' | 'large' | 'x_large';

type TextWeight = 'Regular' | 'Medium' | 'SemiBold';

interface CustomTextProps extends TextProps {
  children: React.ReactNode;
  variant?: TextVariant;
  size?: TextSize;
  weight?: TextWeight;
}

const Text = ({children, style, variant = 'primary', size = 'medium', weight = 'Regular', ...props}: CustomTextProps) => {

  const getFontColor = (variant: TextVariant) => {
    switch (variant) {
      case 'primary':
        return palette.text_primary;
      case 'secondary':
        return palette.text_secondary;
      case 'tertiary':
        return palette.text_tertiary;
      case 'light':
        return palette.text_light;
    }
  };

  const getFontSize = (size: TextSize) => {
    switch (size) {
      case 'small':
        return 12;
      case 'medium':
        return 14;
      case 'large':
        return 16;
      case 'x_large':
        return 18;
    }
  };

  const getFontFamily = (weight: TextWeight) => {
    switch (weight) {
      case 'Regular':
        return 'Poppins-Regular';
      case 'Medium':
        return 'Poppins-Medium';
      case 'SemiBold':
        return 'Poppins-SemiBold';
    }
  };


  return (
    <RNText style={[{color: getFontColor(variant), fontSize: getFontSize(size), fontFamily: getFontFamily(weight)}, style]} {...props}>
      {children}
    </RNText>
  );
};


export default Text;
