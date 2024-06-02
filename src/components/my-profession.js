import resume from '../files/Resume.pdf'
function MyProfession() {
    return (
        <div className="card-container">
            <div className="card">
                <article>
                    <h1>My Proffesion</h1>
                    <section>
                        <h5>Starting In Tech</h5>
                        <p>I never imagined I would end up in the tech industry. Initially, my plan was to
                            serve 20 years in the military and then retire, but life had other plans. When
                            my wife became pregnant with our first child, the appeal of an active duty
                            lifestyle began to wane. In 2014, I decided to pursue a Bachelor’s degree at
                            Southern New Hampshire University, majoring in Information Technology with a
                            minor in Software Development.</p>
                        <p>Upon completing my degree, I secured my first position at Alion Science and Technology
                            in Norfolk, VA. Although my coding skills were limited to what I had learned in school,
                            I was fortunate to have a manager, Jonathan Bailey, who took a chance on me based not on
                            my knowledge, but on a hunch. I am forever grateful to him for that opportunity.
                            This marked the beginning of my career in software development.</p>
                    </section>
                </article>
            </div>
            <div className="card">
                <object className='resume' data={resume} type="application/pdf" alt='Resume'></object>
            </div>
            <div className="card">
                <article>
                    <h5>Growing Pains</h5>
                    <p>I was thrilled to secure my first career job. Although I had held various positions in the past,
                        this role was particularly significant because it represented the culmination of my efforts to
                        obtain a degree while working. Initially, I thought it would be smooth sailing from there, but
                        I soon realized I was mistaken. This job was far more challenging than I had anticipated.</p>
                    <p>Having always been computer-savvy, I learned that the company used Linux Red Hat as its operating
                        system. This was an additional skill I needed to acquire, alongside elements of system
                        engineering. The role required familiarity with IEEE modeling and simulation protocols, as well
                        as knowledge of networks and other less common technologies. I felt overwhelmed and often
                        questioned whether leaving active duty for this job had been the right decision.</p>
                </article>
            </div>
            <div className="card">
                <article>
                    <h5>Pay Off</h5>
                    <p>Determined to succeed, I committed myself to learning. I had 12 months to obtain Linux+ and Security+ 
                        certifications, which I achieved. I also began studying topics I didn't understand to improve my 
                        proficiency. After a year, I managed to make a positive impression on my boss, Jonathan Bailey, 
                        who appreciated my dedication to learning and improving.</p>
                    <p>Two years later, I was promoted to a mid-level engineer, a moment of great pride for me. I earned 
                        the respect of my fellow engineers, who were initially skeptical of my abilities. Currently, 
                        I work for QinetiQ US, leading a team of developers working on an application for the U.S. 
                        Army Corps of Engineers. Our tech stack primarily includes React.js for the front end and .NET EF, 
                        written in C#, for the backend. While I may not be the most brilliant engineer, I excel at 
                        getting things done.</p>
                </article>
            </div>
        </div>
    );
}

export default MyProfession;