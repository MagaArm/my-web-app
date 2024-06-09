import { useEffect } from "react";
import { useState } from "react";
import dressWhitesImage from '../images/Unit_Pic.jpg';
import cpoMessImage from '../images/MSRON_8_cpos.jpg';
import rooseveltImage from '../images/TR_Pic.png';
import '../css/images.css';
import '../css/flexContainer.css';


function MyNavyCareer() {

    // dont know if ill need this
    const [imageData, setImageData] = useState({});

    useEffect(() => {
        // const imageUrl = 
        // console.log(element);
        // console.log(element.id);
    }, []);

    return (
        <div className="card-container">
            <div className="flex-card-container">
                <div className="side-card-left-wide">
                    <article>
                        <h3>The First Tour</h3>
                        <p>When I joined the Navy, my goal, like many others, was to enter Navy Special Operations.
                            I trained rigorously, running mile after mile daily and hitting the weight room in the evenings.
                            I knew there would be an opportunity to try out when I got to boot camp. Once there,
                            an opportunity did arise, but I choked. All special warfare jobs require significant
                            comfort and experience in the water. Growing up in the inner city, I was neither a swimmer
                            nor comfortable in the water. I barely passed the initial swim test in boot camp.</p>
                        <p>Aside from the swimming, boot camp was not particularly difficult for me. I saw grown men break,
                            which I found somewhat comical. After graduating, I was assigned to the
                            USS Theodore Roosevelt (CVN-71), a massive aircraft carrier. There,
                            I successfully completed my first tour, advancing from E-1 to E-5 in pay grade
                            within four years.</p>
                    </article>
                </div>
                <div className="side-card-right-narrow">
                    <h3>First Command</h3>
                    <img className="image-preview" src={rooseveltImage}></img>
                </div>
            </div>
            <div className="flex-card-container">
                <div className="side-card-left-narrow">
                    <article>
                        <h3>Shore Duty</h3>
                        <p style={{ fontSize: '16px' }}>My second tour was shore duty as a Navy recruiter. Being naturally introverted,
                            the people-oriented aspect of the job was challenging for me. Nevertheless, bound by a contract,
                            I had no choice but to make the best of it and succeed. At the time, I was working on my undergraduate
                            degree, having a Plan B in place since Special Warfare did not work out, and I already had two
                            children.</p>
                        <p style={{ fontSize: '16px' }}>I ended up running the recruiting station as the Recruiter in Charge (RINC). The functions of the
                            job were not difficult; we had a manual that covered every use case. We earned various awards and
                            received significant recognition, which included a promotion to E-6 due to outperforming the other
                            stations in the area. Despite our success, I was completely burned out. I no longer wanted to
                            continue in this role or in the Navy.</p>
                        <p style={{ fontSize: '16px' }}>However, I did not want to leave the Navy entirely. Once I finished school, I decided to leave
                            active duty. I started applying for jobs and interviewing, and fortunately, I was hired. I then
                            transitioned to the Navy Reserve.</p>
                    </article>
                </div>
                <div className="side-card-right-wide">
                    <h3>CPO Club</h3>
                    <img className="image-preview" src={cpoMessImage}></img>
                    <i>These are some salty motherfuckers</i>
                </div>
            </div>
            <div className="flex-card-container">
                <div className="side-card-left-wide">
                        <h3>MSRON-8</h3>
                        <img className="image-preview" src={dressWhitesImage}></img>
                </div>
                <div className="side-card-right-narrow">
                    <h3>The Goat Locker</h3>
                    <p style={{ fontSize: '16px' }}>After joining the Reserve, I had to adapt to a different lifestyle. At this point, you have a regular job while also needing
                        to remain deployable as a reservist. My first reserve tour was with U.S. Fleet Forces. It was different
                        from what I was used to, but I adapted. During this time, I was selected for Chief Petty Officer (E-7),
                        which is a significant achievement for enlisted personnel in the Navy. I was not expecting it, but
                        I had to go through an indoctrination phase that was somewhat like joining a fraternity.</p>
                    <p style={{ fontSize: '16px' }}>Since then, I typically hold some sort of leadership role within a unit. As a Chief, you are expected to take charge and lead
                        individuals, so I strive to meet these expectations and not disappoint. According to Wikipedia, “In Navy jargon, the goat
                        locker is a lounge, sleeping area, and galley on board a naval vessel which is reserved for the
                        exclusive use of chief petty officers. By tradition, all other personnel, including officers and even the commanding officer,
                        must request permission to enter the goat locker.”</p>
                </div>
            </div>
        </div>
    );
}

export default MyNavyCareer;