import { StyleSheet } from 'react-native';
import { ColorTokens, SizeTokens } from '../../constants/tokens';

export const getModalStyles = () => StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SizeTokens.spacing.md,
  },
  backdrop: {
    flex: 1,
    backgroundColor: ColorTokens.black + 66,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    minWidth: 280,
    maxWidth: '90%',
    shadowColor: ColorTokens.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontWeight: 'bold',
  },
  closeButton: {
    padding: SizeTokens.spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    marginTop: SizeTokens.spacing.md,
  },
});
