import * as styles from "./Icon.module.css";

type IconProps = {
  Component: JSX.Element;
  text: string;
};

const Icon = ({ Component, text }: IconProps) => {
  return (
    <div className={styles.iconContainer}>
      <div className={styles.icon}>{Component}</div>
      <hr className={styles.underline} />
      <p className={styles.iconText}>{text}</p>
    </div>
  );
};

export default Icon;
