import { Team } from "./team/team";
import "./_about.scss";

export const About = ({ data }) => {
  return (
    <main className="about">
      <h1>
        about us {data.name} {data.age}
      </h1>
      <Team data={data} />
    </main>
  );
};
