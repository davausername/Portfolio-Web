import '../css/Footer.css';
import EmailLogo from '../assets/icons/Mail.svg';
import LinkedInLogo from '../assets/icons/InBug-White.png';
import PhoneLogo from '../assets/icons/call.svg';


function Footer(){
    return (
        <>
            <div className="footer bg-[#EEEEEE]">
                <h3 className='sizing mb-2!'>Contact</h3>
                <div className="fContainer sizing">
                    <div>
                        <form action="" id='contact'>
                            <input type="text" name="" id="" placeholder="Full Name" />
                            <input type="email" name="" id="" placeholder="Your Email" />
                            <textarea name="" id="" placeholder="Your Message"></textarea>
                            <Submit />
                        </form>
                    </div>

                    <div>
                        <h3 className='p-0! mb-[18.75px]!'>Get to know more about me</h3>
                        <p className='mb-2!'>I focus on mastering modern web technologies to create intuitive user experiences.</p>
                        <p>I love exploring the latest frontend tools to create smooth user experiences.</p>
                    </div>

                    <div>
                        <ul>
                            <li><img src={EmailLogo} className='socialImg' alt="" /> dffa.w.m.dff@gmail.com</li>
                            <li><img src={LinkedInLogo} className='socialImg' alt="" /> linkedin.com/in/m-dava-von</li>
                            <li><img src={PhoneLogo} className='socialImg' alt="" /> +62 822 8970 5255</li>
                        </ul>
                        <p>This a brief information about my contact and linkedIn!</p>
                    </div>
                </div>
            </div>

            <div className="sizing bg-[#222222] h-[2.4rem] w-full text-[#EEE] flex justify-center items-center">
                <p>Copyright 2026 | All Right Reserved</p>
            </div>
        </>

    )
}

function Submit(){
    return (
        <button className="submit-btn">Submit</button>
    )
}

export default Footer