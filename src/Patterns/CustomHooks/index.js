import { useClapAnimation } from "./hooks/useClapAnimation";
import userStyles from "./userStyles.css";
import { Stream } from "./usage/Stream";
import { CupBase } from "./usage/CupBase";
import { CupHandle } from "./usage/CupHandle";
import { CupBowl } from "./usage/CupBowl";

export const CustomHooksPattern = () => {
  const animationTimeline = useClapAnimation({
    duration: 300,
    bounceEl: "#stream",
    fadeEl: "#cupHandle",
    burstEl: "#coffe",
  });

  const handleClick = () => animationTimeline.replay();

  return (
    <section className={userStyles.cupContainer}>
      <div className={userStyles.cupStream}>
        <Stream />
      </div>
      <div id="coffee" style={{ fontSize: "0.5rem" }}>
        coffee
      </div>
      <div className={userStyles.cupBody}>
        <CupHandle />
        <CupBowl />
      </div>
      <div>
        <CupBase />
      </div>
      <footer>
        <button onClick={handleClick}>Animate</button>
      </footer>
    </section>
  );
};
