import { useState, useCallback } from "react";

const generateRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const MAX_CLAP = 50;
const INIT_STATE = {
  count: 0,
  countTotal: generateRandomNumber(500, 10000),
  isClicked: false,
};

export const useClapState = ({ initialState = INIT_STATE } = {}) => {
  const [clapState, setClapState] = useState(initialState);
  const { count, countTotal } = clapState;
  const handleClapClick = useCallback(() => {
    setClapState({
      count: Math.min(count + 1, MAX_CLAP),
      countTotal: count < MAX_CLAP ? countTotal + 1 : countTotal,
      isClicked: true,
    });
  }, [count, countTotal]);

  return {
    clapState,
    handleClapClick,
  };
};
