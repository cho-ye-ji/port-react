import React from "react";
import SubTitle from "../../components/common/SubTitle";

const SkillSection = () => {
  return (
    <>
      <div>
        <SubTitle />
      <h2 className="content-title heading-lg">
        Skills
      </h2>

      <div className="block">
        <h3 className="heading-md">Core</h3>
        <ul className="tags">
          <li>React</li>
          <li>Vue</li>
          <li>TypeScript</li>
        </ul>
      </div>

      <div className="block">
        <h3 className="heading-md">
          Styling
        </h3>
        <ul className="tags">
          <li>SCSS</li>
          <li>Styled-Components</li>
          <li>Responsive</li>
        </ul>
      </div>
       {/* about me, education, career, front-end */}

      </div>
    </>
  );
};

export default SkillSection;
