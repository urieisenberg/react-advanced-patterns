import styles from "../../index.css";

export const ClapContainer = ({
  children,
  setRef,
  handleClick,
  ...restProps
}) => {
  return (
    <button
      ref={setRef}
      className={styles.clap}
      onClick={handleClick}
      {...restProps}
    >
      {children}
    </button>
  );
};
