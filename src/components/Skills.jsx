
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io5";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa6";

const Skills = () => {
  return (
    <div className="container mt-3">
        <h4 className='text-center'>My Technical Skills</h4>
        <div className='w-50 mt-3 mb-4 ms-auto me-auto d-flex justify-content-between align-items-center text-dark'>
            <IoLogoHtml5 size={40}/>
            <IoLogoCss3 size={40}/>
            <TbBrandJavascript size={40}/>
            <FaReact size={40}/>
            <FaSquareGithub size={40}/>
            <FaBootstrap size={40}/>
        </div>
    </div>
  )
}

export default Skills;