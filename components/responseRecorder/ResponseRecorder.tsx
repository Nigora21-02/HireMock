import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ColorTokens, SizeTokens } from '../../constants/tokens';
import { ResponseRecorderProps } from './types';

export default function ResponseRecorder({
  isRecording,
  onStartRecording,
  onStopRecording,
}: ResponseRecorderProps) {
  return (
    <View style={{ gap: SizeTokens.spacing.md }}>
      <TouchableOpacity
        onPress={isRecording ? onStopRecording : onStartRecording}
        style={{
          borderWidth: 2,
          borderStyle: 'dashed',
          borderColor: isRecording ? ColorTokens.blue[600] : ColorTokens.gray[300],
          borderRadius: 12,
          padding: SizeTokens.spacing.xl,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: isRecording ? ColorTokens.blue[50] : ColorTokens.white,
          minHeight: 150,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: isRecording ? ColorTokens.purple[700] : ColorTokens.gray[600],
            textAlign: 'center',
          }}
        >
          {isRecording ? '🔴 Spelar in...' : '🎤 Tryck för att spela in'}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: ColorTokens.gray[500],
            marginTop: SizeTokens.spacing.sm,
            textAlign: 'center',
          }}
        >
          {isRecording ? 'Tryck igen för att stoppa' : 'Röst eller text'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
