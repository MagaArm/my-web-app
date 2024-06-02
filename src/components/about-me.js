import losAngImg from '../images/Los_Angeles.jpg';
function AboutMe() {
    return (
        <div className="card-container">
            <div className="card">
                <article>
                    <h1>Biography</h1>
                    <section>
                        <h5>Who Am I?</h5>
                        <p>My name is Armando, and I'm thrilled to share my journey with you.</p>
                        <p>Dive into my world, where you'll discover stories about me and my family's rich heritage.
                            I grew up in the vibrant city of Los Angeles, California, after my parents courageously
                            migrated from Mexico to pursue a better life. As the eldest son among four sisters and two
                            brothers, I’ve always cherished our close-knit family bonds.
                        </p>
                        <p>Now, at 33, I am happily married and blessed with three incredible daughters.
                            My love story began in the U.S. Navy, where I met my wonderful wife when I was just 22.
                        </p>
                        <p>
                            Throughout my life, I’ve embarked on various adventures that might seem ordinary to some but
                            are deeply meaningful to me. On this site, you’ll get a glimpse into these experiences and understand
                            the unique journey that has shaped who I am today.
                        </p>
                    </section>
                </article>
            </div>
            <div className="card">
                <img src={losAngImg} alt='Los Angeles'></img>
            </div>
            <div className="card">
                <article>
                    <section>
                        <h5>Early Days</h5>
                        <p>I grew up in South Los Angeles, the second eldest of six siblings, with two younger brothers and four older sisters.
                            Our family lived in a modest home, and we had limited resources growing up.
                            My father was the sole breadwinner, while my mother stayed home to care for us.</p>

                        <p>I attended West Athens Elementary School and later Henry Clay Middle School. Recognizing the challenges posed by
                            the local schools, I decided to attend Bell Senior High School in Bell, CA, for my high school education.
                            The schools in Bell were significantly better than those in my neighborhood, providing me with a more conducive
                            environment for academic success, which enabled me to graduate from high school.</p>

                        <p>After high school, I enrolled in a local community college and began working at a GameStop.
                            Near my workplace, there was a Military Career Center located in a nearby shopping plaza.
                            Although I had always been intrigued by the military,
                            I had never seriously considered it as a career option until then.</p>
                    </section>
                </article>
            </div>
            <div className="card">
                <article>
                    <section>
                        <h5>In The Navy</h5>
                        <p>After realizing that I was not fully committed to my college education and recognizing the limited prospects
                            of a minimum-wage job, I decided to join the military. My attempts to join the Air Force and Marine Corps were
                            unsuccessful due to my tattoos, which were disqualifying at the time. However, when I visited the Navy recruitment
                            office, I was warmly welcomed by the recruiters, who treated me like family. Their honesty and straightforwardness
                            reassured me, and I made a fully informed decision to enlist.</p>

                        <p>I signed a contract with the hope of eventually joining Navy Special Warfare. My first assignment was on an aircraft
                            carrier, where I served for four years. Following this tour, I spent 3 ½ years on recruiting duty. During this time,
                            I matured and completed my undergraduate degree. Eventually, I transitioned to the Navy Reserve and pursued a
                            civilian career.</p>
                    </section>
                </article>
            </div>
            <div className="card">
                <article>
                    <section>
                        <h5>The Present</h5>
                        <p>By this time, I was married with three children. During my recruiting duty, the long hours became challenging, and I realized that returning 
                            to the fleet would mean extended periods away from my family. Consequently, I decided it was time to transition out of active duty.</p>

                        <p>Given that my undergraduate studies focused on software, I began applying for software engineering positions. 
                            I received my first job offer from Alion Science and Technology, where I entered the field of advanced modeling 
                            and simulation. The learning curve was steep, as the role encompassed both system engineering and software engineering, 
                            but I found the work highly rewarding.</p>

                        <p>After a fulfilling tenure at Alion (now part of HII), I transitioned to QinetiQ US, where I am currently involved in 
                            developing applications for the Army.</p>

                    </section>
                </article>
            </div>
        </div >
    );
}

export default AboutMe;