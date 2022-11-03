import { useClapState } from "./hooks/useClapState";
import { useEffectAfterMount } from "./hooks/useEffectAfterMount";
import { useDOMRef } from "./hooks/useDOMRef";
import { useClapAnimation } from "./hooks/useClapAnimation";
import { ClapIcon, ClapCount, CountTotal } from "./components";
import styles from "../../index.css";

export const MediumClap = () => {
  const { clapState, handleClapClick } = useClapState();
  const { count, countTotal } = clapState;
  const { isClicked } = clapState;

  const [{ clapContainerRef, clapCountRef, countTotalRef }, setRef] =
    useDOMRef();

  const animationTimeline = useClapAnimation({
    duration: 300,
    bounceEl: clapCountRef,
    fadeEl: countTotalRef,
    burstEl: clapContainerRef,
  });

  useEffectAfterMount(() => {
    animationTimeline.replay();
  }, [count]);

  return (
    <button
      ref={setRef}
      data-refkey="clapRef"
      className={styles.clap}
      onClick={handleClapClick}
    >
      <ClapIcon isClicked={isClicked} />
      <ClapCount count={count} setRef={setRef} />
      <CountTotal countTotal={countTotal} setRef={setRef} />
    </button>
  );
};
