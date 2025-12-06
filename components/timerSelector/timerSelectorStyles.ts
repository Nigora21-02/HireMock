import { StyleSheet } from 'react-native';
import { ColorTokens } from '../../constants/tokens';

const timerSelectorStyles = StyleSheet.create({
  container: {
    backgroundColor: ColorTokens.gray[200],
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 12,
    
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
  },
  label: {
    fontWeight: '600',
    fontSize: 16,
  },
  subLabel: {
    color: ColorTokens.gray[600],
    fontWeight: '400',
  },
  chipRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 6,
  },
  chip: {
    marginRight: 4,
  },
});

export default timerSelectorStyles;
