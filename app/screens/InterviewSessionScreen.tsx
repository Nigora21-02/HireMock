import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import Button, { ButtonText } from '../../components/button';
import Card from '../../components/card/Card';
import ResponseRecorder from '../../components/responseRecorder/ResponseRecorder';
import ProgressBar from '../../components/progressBar/ProgressBar';
import CircularTimer from '../../components/circularTimer/CircularTimer';
import { ColorTokens, SizeTokens } from '../../constants/tokens';
import { MOCK_QUESTIONS } from '../../mocks/interviewQuestions';

export default function InterviewSessionScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();

  const category = params.category as string;
  const language = params.language as string;
  const level = params.level as string;
  const timer = parseInt(params.timer as string);

  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [isRecording, setIsRecording] = useState(false);
  const [timeLeft, setTimeLeft] = useState(timer * 60);
  const [showTip, setShowTip] = useState(false);
  const totalQuestions = MOCK_QUESTIONS.length;

  // Timer countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Handle time up - navigate after render
  useEffect(() => {
    if (timeLeft === 0) {
      const timeout = setTimeout(() => {
        router.back();
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getTimerState = () => {
    if (timeLeft === 0) return 'danger';
    if (timeLeft < 60) return 'warning';
    return 'normal';
  };

  const handleNextQuestion = () => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
      setIsRecording(false);
    }
  };

  const handleEndInterview = () => {
    router.back();
  };

  return (
    <View style={{ flex: 1, backgroundColor: ColorTokens.white }}>
      <View
        style={{
          padding: SizeTokens.spacing.lg,
          backgroundColor: ColorTokens.blue[50],
          borderBottomWidth: 1,
          borderBottomColor: ColorTokens.gray[200],
          gap: SizeTokens.spacing.md,
        }}
      >
        {/* Timer and Actions */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Button
            variant="outline"
            size="small"
            onPress={handleEndInterview}
          >
            <ButtonText variant="outline">Avsluta</ButtonText>
          </Button>

          <CircularTimer
            timeText={formatTime(timeLeft)}
            label="återstår"
            size="lg"
            state={getTimerState()}
          />

          {currentQuestion < totalQuestions ? (
            <Button
              variant="primary"
              size="small"
              onPress={handleNextQuestion}
            >
              <ButtonText variant="primary">Nästa</ButtonText>
            </Button>
          ) : (
            <Button
              variant="primary"
              size="small"
              onPress={handleEndInterview}
            >
              <ButtonText variant="primary">Slutför</ButtonText>
            </Button>
          )}
        </View>

        {/* Progress */}
        <View style={{ gap: SizeTokens.spacing.xs }}>
          <Text style={{ fontSize: 14, fontWeight: '600', color: ColorTokens.gray[700], textAlign: 'center' }}>
            Fråga {currentQuestion} av {totalQuestions}
          </Text>
          <ProgressBar
            progress={(currentQuestion / totalQuestions) * 100}
            size="sm"
            showPercent={false}
            label=""
          />
        </View>

        {/* Metadata */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            gap: SizeTokens.spacing.sm,
          }}
        >
          <Text style={{ fontSize: 12, color: ColorTokens.gray[600] }}>
            {category}
          </Text>
          <Text style={{ fontSize: 12, color: ColorTokens.gray[600] }}>
            {level}
          </Text>
          <Text style={{ fontSize: 12, color: ColorTokens.gray[600] }}>
            {language}
          </Text>
        </View>
      </View>

      {/* Content */}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: SizeTokens.spacing.lg }}
      >
        <ResponseRecorder
          isRecording={isRecording}
          onStartRecording={() => setIsRecording(true)}
          onStopRecording={() => setIsRecording(false)}
        />
        
        <Card
          title={`Fråga ${currentQuestion}`}
          subtitle={MOCK_QUESTIONS[currentQuestion - 1]}
          showTipIcon={true}
          onTipPress={() => setShowTip(!showTip)}
        >
          {showTip && (
            <View style={{ 
              marginTop: SizeTokens.spacing.md, 
              padding: SizeTokens.spacing.md,
              backgroundColor: ColorTokens.yellow[50],
              borderRadius: 8,
              borderLeftWidth: 3,
              borderLeftColor: ColorTokens.yellow[500]
            }}>
              <Text style={{ 
                fontSize: 14, 
                color: ColorTokens.gray[700],
                lineHeight: 20
              }}>
                <Text style={{ fontWeight: '600' }}>Tips: </Text>
                Strukturera ditt svar med konkreta exempel. Använd STAR-metoden (Situation, Task, Action, Result).
              </Text>
            </View>
          )}
        </Card>
      </ScrollView>
    </View>
  );
}
