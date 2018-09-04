export interface Votes {
  count?: number;
  name: string;
  onIncrement?: () => void;
  onDecrement?: () => void;
}
