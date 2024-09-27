import * as styles from "./TeamMember.module.css";

type TeamMemberProps = {
  imageSource: string;
  name: string;
  role: string;
  alt: string;
};

const TeamMember = ({ imageSource, name, role, alt }: TeamMemberProps) => {
  return (
    <div className={styles.teamMember}>
      <img src={imageSource} alt={alt} className={styles.teamImage} />
      <h2 className={styles.teamName}>{name}</h2>
      <p className={styles.teamRole}>{role}</p>
    </div>
  );
};

export default TeamMember;
