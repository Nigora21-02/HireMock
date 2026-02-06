import { StyleSheet } from 'react-native';
import { ColorTokens, SizeTokens } from '../../../constants/tokens';

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
  
});