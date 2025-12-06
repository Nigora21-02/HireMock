export type TimerSize = 'sm' | 'lg';

export type TimerState = 'normal' | 'warning' | 'danger';

export type CircularTimerProps = {
  timeText: string;
  label?: string;
  size?: TimerSize;
  state?: TimerState;
};
