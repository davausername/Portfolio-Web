import '../css/Skills.css'
import CodeIcon from '../assets/icons/code.svg';
import APIIcon from '../assets/icons/api.svg';
import XMLIcon from '../assets/icons/code_xml.svg';
import CSSIMG from '../assets/img/vanilla-css.jpg';
import ReactIMG from '../assets/img/react.jpg';
import PythonIMG from '../assets/img/labyrinth-python.jpg';


function Skills(){
    return (
        <div className="skills" id='skills'>
            <div className="skill-title flex flex-col items-center justify-center">
                <h2 className='text-white'>MY SKILLS</h2>
                <div className='bg-white'></div>
            </div>

            <div className="main-skills">
                <div>
                    <img src={XMLIcon} alt="XML Icon" className='img-icon' />
                    <img src={CSSIMG} alt="CSS Code" className='skillImg' />
                    <div>
                        <p>Vanilla Front-End Web Development: HTML, CSS, JavaScript</p>
                    </div>
                </div>
                <div>
                    <img src={APIIcon} alt="API Icon" className='img-icon' />
                    <img src={ReactIMG} alt="React Code" className='skillImg' />
                    <div>
                        <p>Front-End Framework (React), Basics API, and many other cool stuff</p>
                    </div>
                </div>
                <div>
                    <img src={CodeIcon} alt="Code Icon" className='img-icon' />
                    <img src={PythonIMG} alt="Python Code" className='skillImg' />
                    <div>
                        <p>Basics Python integration with data analytics, modelling, and simulation.</p>
                    </div>
                </div>
            </div>

            <OtherSkills />
        </div>
    );
}

function OtherSkills(){
    return (
        <div className="otherSkills flex flex-col items-center w-full">
            <div className="horizontal-line bg-white"></div>
            <div className="theSkills">
                <div className="item">
                    <div className="round-shape bg-[#EA7600]"></div>
                    <h4 className="label">Blender</h4>
                    <div className="progress-bar"><div className="fill w-[60%] bg-[#EA7600]"></div></div>
                </div>

                <div className="item">
                    <div className="round-shape bg-[#4B2F9F]"></div>
                    <h4 className="label">AI Integration</h4>
                    <div className="progress-bar"><div className="fill w-[60%] bg-[#4B2F9F]"></div></div>
                </div>

                <div className="item">
                    <div className="round-shape bg-[#003B8D]"></div>
                    <h4 className="label">Data Analytics</h4>
                    <div className="progress-bar"><div className="fill w-[60%] bg-[#003B8D]"></div></div>
                </div>

                <div className="item">
                    <div className="round-shape bg-[#FF3939]"></div>
                    <h4 className="label">Figma Design</h4>
                    <div className="progress-bar"><div className="fill w-[60%] bg-[#FF3939]"></div></div>
                </div>
            </div>
            
        </div>
    );
}


export default Skills