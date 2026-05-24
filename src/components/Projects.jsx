import { useState, useEffect } from 'react';
import chatroomIMG from '../assets/img/chatroom-app.jpg';
import portfolioIMG from '../assets/img/portfolio.jpg';


function Projects(){
    return (
      <div className="sizing projectBox" id='works'>
          <div className="w-full flex justify-center items-center my-7.25!">
              <div className="bg-[#1CDB2F] w-[18.586rem] h-[3.151rem] rounded-[0.808rem] flex items-center justify-center">
                  <h2>Hands-on Projects</h2>
              </div>
          </div>

          <div>
              <div className="bg-[#6D6D6D] w-[10.303rem] h-[2.586rem] rounded-[0.404rem] flex items-center justify-center p-0 mb-[25.21px]!">
                  <h3 className="text-[1.535rem] p-0! text-white">Overview</h3>
              </div>
              <div className="projects">
                  <div>
                      <p className="text-justify mb-[1.7rem]!">My portfolio showcases diverse hands-on projects ever since I began, where I have taken complex logic and refined it into sleek, high-performance interfaces. My work has survived not only rigorous testing, but also the shift toward mobile-first design, remaining essentially user-focused. Each build reflects a deep mastery of responsive layout, state management, and the ability to bridge the gap between creative design and scalable code while ensuring total cross-browser stability.</p>
                  </div>
                  <ProjectCards />
              </div>
          </div>
      </div>
    )
}

function GitHubButton(){
    return (
        <div className="bg-[#1CDB2F] w-[119.6px] h-[31.03px] rounded-[3.23px] flex justify-center items-center">
            <h4 className="text-[12.93px]">View on GitHub</h4>
        </div>
    )
}

const projects = [
  {
    id: 1,
    title: "Chatroom App",
    desc: "Simple chatroom app where users can interact with each other by chatting.",
    img: chatroomIMG
  },
  {
    id: 2,
    title: "Portfolio",
    desc: "My web portfolio that shows my skills, capability, and projects or works.",
    img: portfolioIMG
  },
  {
    id: 3,
    title: "Movie App Searcher",
    desc: "Simple movie app searcher project from an api where users can search for movies.",
    img: "/img2.jpg"
  }
];

function ProjectCards(){
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Swipe logic
  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    const distance = touchStart - e.changedTouches[0].clientX;
    if (distance > 50) setIndex((prev) => (prev + 1) % projects.length); // Swipe left
    if (distance < -50) setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1)); // Swipe right
  };

  return (
    /* 1. OUTER ANCHOR: Locks down the exact dimensions of your card so your UI never shifts */
    <div className="relative w-full max-w-[34.707rem] mx-auto" style={{ height: "14.25rem" }}>
        
      <div 
        className="absolute overflow-hidden"
        style={{ 
          top: "-40px", bottom: "-40px", left: "-40px", right: "-40px",
          pointerEvents: "none",
          display: "flex", alignItems: "center"
        }}
      >
        
        {/* 3. SLIDING TRACK */}
        <div 
          className="flex w-full transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateX(-${index * 100}%)`, 
            pointerEvents: "auto"
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {projects.map((proj, i) => (
            <div key={proj.id} className="w-full shrink-0 flex justify-center">

              {/*CARD CODE */}
              <div className="project-cards transition-all duration-300">
                
                <div className="w-[15.9525rem]! h-[10.51rem]! relative">
                  <img src={proj.img} alt="" className="w-full h-full object-cover rounded-md" />
                  
                  <div className="small-circle">
                    <div style={{ background: index === 0 ? "#000" : "#5A5A5A", transition: "0.3s" }}></div>
                    <div style={{ background: index === 1 ? "#000" : "#5A5A5A", transition: "0.3s" }}></div>
                    <div style={{ background: index === 2 ? "#000" : "#5A5A5A", transition: "0.3s" }}></div>
                  </div>
                </div>
                
                <div>
                  <h3 className="pb-5!">{proj.title}</h3>
                  <p className="text-[12.93px] mb-5!">{proj.desc}</p>
                  <GitHubButton />
                </div>
                
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects