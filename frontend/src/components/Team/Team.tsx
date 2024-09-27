import TeamMember from "../TeamMember/TeamMember";
import * as styles from "./Team.module.css";
const teamMembers = [
  {
    name: "Jane Doe",
    alt: "Jane Doe",
    role: "Operations Director",
    img: "https://plus.unsplash.com/premium_photo-1683121771856-3c3964975777?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Mike Ethan",
    alt: "Mike Ethan",
    role: "Operations Manager",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Robert Cliford",
    alt: "Robert Cliford",
    role: "Project Manager",
    img: "https://images.unsplash.com/photo-1637684666772-1f215bfd0f5d?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Team = () => {
  return (
    <section className={styles.teamSection}>
      <h1 className={styles.teamTitle}>Meet the Team</h1>
      <div className={styles.teamContainer}>
        {teamMembers.map((member) => {
          return (
            <TeamMember
              imageSource={member.img}
              alt={member.alt}
              name={member.name}
              role={member.role}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Team;
