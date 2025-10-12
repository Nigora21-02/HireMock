import { StyleSheet } from 'react-native';
import { ColorTokens, SizeTokens } from '../../constants/tokens';

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: SizeTokens.spacing.lg,
    paddingVertical: SizeTokens.spacing.xs,
    borderRadius: 20,
    backgroundColor: ColorTokens.blue[200],
    borderWidth: 1,
    borderColor: ColorTokens.gray[300],
    marginRight: SizeTokens.spacing.sm,
    marginBottom: SizeTokens.spacing.sm,
    alignSelf: 'flex-start',
    elevation: 2,
    shadowRadius: 2,
  },
  selected: {
    backgroundColor: ColorTokens.blue[400],
    shadowColor: ColorTokens.blue[800],
    shadowOffset: { width: 0, height: 1 },    
  },
  label: {
    color: ColorTokens.blue[800],
    fontSize: SizeTokens.fontSize.md,
  },
  selectedLabel: {
    color: ColorTokens.white,
   
    
  },
});

export default styles;
