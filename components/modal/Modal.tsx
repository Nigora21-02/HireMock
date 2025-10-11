import React from 'react';
import { Modal as RNModal, View, Text, Pressable } from 'react-native';
import { ColorTokens } from '../../constants/tokens';
import { getModalStyles } from './styles';
import { Feather } from '@expo/vector-icons';
import type { ModalProps } from './types';

const Modal = ({ visible, onClose, title, children, style }: ModalProps) => {
  const styles = getModalStyles();
  return (
    <RNModal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.backdrop}>
        <View style={[styles.container, style]}>
          <View style={styles.headerRow}>
            {title && <Text style={styles.title}>{title}</Text>}
            <Pressable
              style={({ pressed }) => [
                styles.closeButton,
                pressed && {
                  borderWidth: 2,
                  borderColor: ColorTokens.blue[800],
                  borderRadius: 50,
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.35,
                  shadowRadius: 6,
                  elevation: 6,
                },
              ]}
              onPress={onClose}
              accessibilityLabel="Stäng modal"
            >
              <Feather name="x" size={28} color={ColorTokens.gray[700] || '#222'} />
            </Pressable>
          </View>
          <View style={styles.content}>{children}</View>
        </View>
      </View>
    </RNModal>
  );
};

export default Modal;