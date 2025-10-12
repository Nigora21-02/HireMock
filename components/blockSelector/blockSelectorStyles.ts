import { StyleSheet } from 'react-native';
import { ColorTokens } from '../../constants/tokens';

const blockSelectorStyles = StyleSheet.create({
  container: {
    backgroundColor: ColorTokens.gray[200],
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 8,
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  label: {
    fontWeight: '600',
    fontSize: 16,
  },
});

export default blockSelectorStyles;
