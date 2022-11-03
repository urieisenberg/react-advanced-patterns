import { useClapState } from "./hooks/useClapState";
import { useEffectAfterMount } from "./hooks/useEffectAfterMount";
import { useDOMRef } from "./hooks/useDOMRef";
import { useClapAnimation } from "./hooks/useClapAnimation";
import { ClapContainer } from "./components/ClapContainer";
import { ClapCount } from "./components/ClapCount";
import { CountTotal } from "./components/CountTotal";

export const PropsCollectionPattern = () => {
  const { clapState, updateClapState, togglerProps, counterProps } =
    useClapState();

  const { count, countTotal, isClicked } = clapState;

  const [{ clapRef, clapCountRef, clapTotalRef }, setRef] = useDOMRef();

  const animationTimeline = useClapAnimation({
    clapEl: clapRef,
    countEl: clapCountRef,
    clapTotalEl: clapTotalRef,
  });

  useEffectAfterMount(() => {
    animationTimeline.replay();
  }, [count]);

  return (
    <ClapContainer setRef={setRef} data-refkey="clapRef" {...togglerProps}>
      🇳🇬
      <ClapCount setRef={setRef} data-refkey="clapCountRef" {...counterProps} />
      <CountTotal
        countTotal={countTotal}
        setRef={setRef}
        data-refkey="clapTotalRef"
      />
    </ClapContainer>
  );
};
