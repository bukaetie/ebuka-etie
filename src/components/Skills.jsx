import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io5";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa6";

const Skills = () => {
  return (
    <div className="container mt-4">
      <h4 className="text-center">My Technical Skills</h4>
      <div className="d-flex flex-wrap justify-content-center mt-3 mb-4 gap-4 text-dark">
        <div className="text-center">
          <IoLogoHtml5 size={30} />
          <p className="mt-2 fs-6">HTML5</p>
        </div>
        <div className="text-center">
          <IoLogoCss3 size={30} />
          <p className="mt-2 fs-6">CSS3</p>
        </div>
        <div className="text-center">
          <TbBrandJavascript size={30} />
          <p className="mt-2 fs-6">JavaScript</p>
        </div>
        <div className="text-center">
          <FaReact size={30} />
          <p className="mt-2 fs-6">React</p>
        </div>
        <div className="text-center">
          <FaSquareGithub size={30} />
          <p className="mt-2 fs-6">GitHub</p>
        </div>
        <div className="text-center">
          <FaBootstrap size={30} />
          <p className="mt-2 fs-6">Bootstrap</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
