import { StyleSheet } from 'react-native';
import { ColorTokens, SizeTokens } from '../../constants/tokens';

export const styles = StyleSheet.create({
  button: {
    borderRadius: SizeTokens.borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100,
  },
  
  fullWidth: {
    width: '100%',
  },
  
  // Storlekar
  small: {
    paddingHorizontal: SizeTokens.spacing.sm + 4,
    paddingVertical: SizeTokens.spacing.xs + 4,
  },
  medium: {
    paddingHorizontal: SizeTokens.spacing.md,
    paddingVertical: SizeTokens.spacing.sm + 4,
  },
  large: {
    paddingHorizontal: SizeTokens.spacing.lg - 4,
    paddingVertical: SizeTokens.spacing.md,
  },
  
  // Varianter
  primaryButton: {

    shadowColor: ColorTokens.gray[600], // Use gray for shadow
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8, // Android shadow
  },
  secondaryButton: {
    backgroundColor: ColorTokens.gray[500],
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1.2,
    borderColor: ColorTokens.pink[500],
  },
  dangerButton: {
    shadowColor: '#E53E3E',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8, // Android shadow
  },
  successButton: {
    backgroundColor: ColorTokens.green[500],
  },
  ghostButton: {
    backgroundColor: 'transparent',
  },
  pinkButton: {
    shadowColor: ColorTokens.gray[600],
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8, // Android shadow
  },
  disabledButton: {
    backgroundColor: ColorTokens.gray[200],
    borderColor: ColorTokens.gray[200],
  },
  
  // Text styles
  text: {
    fontWeight: '600',
    textAlign: 'center',
  },
  smallText: {
    fontSize: SizeTokens.fontSize.sm,
  },
  mediumText: {
    fontSize: SizeTokens.fontSize.md,
  },
  largeText: {
    fontSize: SizeTokens.fontSize.lg,
  },
  
  // Text färger
  primaryText: {
    color: ColorTokens.white,
  },
  secondaryText: {
    color: ColorTokens.white,
  },
  outlineText: {
    color: ColorTokens.blue[900],
  },
  dangerText: {
    color: ColorTokens.white,
  },
  successText: {
    color: ColorTokens.white,
  },
  ghostText: {
    color: ColorTokens.purple[500],
  },
  disabledText: {
    color: ColorTokens.gray[500],
  },
});