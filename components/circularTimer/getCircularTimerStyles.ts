import { ViewStyle, TextStyle } from 'react-native';
import { ColorTokens } from '../../constants/tokens';
import { TimerSize, TimerState } from './types';

const SIZES: Record<TimerSize, {
  container: number;
  fontSize: number;
  labelSize: number;
}> = {
  sm: {
    container: 60,
    fontSize: 16,
    labelSize: 9,
  },
  lg: {
    container: 70,
    fontSize: 20,
    labelSize: 11,
  },
};

const STATES: Record<TimerState, {
  borderColor: string;
  textColor: string;
  backgroundColor: string;
}> = {
  normal: {
    borderColor: ColorTokens.blue[600],
    textColor: ColorTokens.blue[800],
    backgroundColor: ColorTokens.white,
  },
  warning: {
    borderColor: ColorTokens.yellow[600],
    textColor: ColorTokens.yellow[600],
    backgroundColor: ColorTokens.yellow[50],
  },
  danger: {
    borderColor: ColorTokens.pink[600],
    textColor: ColorTokens.pink[700],
    backgroundColor: ColorTokens.pink[50],
  },
};

export const getCircularTimerStyles = (
  size: TimerSize,
  state: TimerState
): {
  container: ViewStyle;
  timeText: TextStyle;
  label: TextStyle;
} => {
  const sizeConfig = SIZES[size];
  const stateConfig = STATES[state];

  return {
    container: {
      width: sizeConfig.container,
      height: sizeConfig.container,
      borderRadius: sizeConfig.container / 2,
      backgroundColor: stateConfig.backgroundColor,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: ColorTokens.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      borderWidth: 4,
      borderColor: stateConfig.borderColor,
    },
    timeText: {
      fontSize: sizeConfig.fontSize,
      fontWeight: 'bold',
      color: stateConfig.textColor,
    },
    label: {
      fontSize: sizeConfig.labelSize,
      color: ColorTokens.gray[600],
      marginTop: 2,
    },
  };
};
