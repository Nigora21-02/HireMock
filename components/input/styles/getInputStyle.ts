import { TextStyle } from 'react-native';
import { ColorTokens, SizeTokens } from '../../../constants/tokens';

export type InputState = 'primary' | 'error' | 'disabled';

const inputStateStyles: Record<InputState, { input: TextStyle; errorText: TextStyle }> = {
  primary: {
    input: {
      color: ColorTokens.gray[900],
      borderColor: ColorTokens.purple[800],
    },
    errorText: {
      color: ColorTokens.red[600],
    },
  },
  error: {
    input: {
      color: ColorTokens.red[600],
      borderColor: ColorTokens.red[600],
    },
    errorText: {
      color: ColorTokens.red[600],
    },
  },
  disabled: {
    input: {
      color: ColorTokens.gray[400],
      borderColor: ColorTokens.gray[300],
    },
    errorText: {
      color: ColorTokens.gray[400],
    },
  },
};

export const getInputStyle = (
  state: InputState = 'primary',
  customStyle?: TextStyle
): { inputStyle: TextStyle[]; errorTextStyle: TextStyle } => {
  const baseInput: TextStyle = {
    fontSize: SizeTokens.fontSize.md,
    borderWidth: 1,
    borderRadius: SizeTokens.borderRadius.md, 
    ...inputStateStyles[state].input,
  };
  const inputStyle = [baseInput];
  if (customStyle) inputStyle.push(customStyle);
  return {
    inputStyle,
    errorTextStyle: inputStateStyles[state].errorText,
  };
};