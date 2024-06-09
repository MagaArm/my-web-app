
import kitchenBefore from '../images/kitchenBefore.jpg'
import kitchenAfter from '../images/kitchenAfter.jpg'
import fpBefore from '../images/livRoomBefore.jpg'
import fpAfter from '../images/livRoomAfter.jpg'
import hobbyData from '../data/hobbies.json'
import { useEffect, useRef } from 'react'

function MyHobbies() {
    const elmRef = useRef();

    const generateHobbies = () => {
        const list = elmRef.current;
        hobbyData?.forEach(cat =>
            list.innerHTML += `<li draggable='true' id='${cat.Id}'>${cat.Name}</li>`
        );
    }

    useEffect(() => {
        //generateHobbies();
        const generateHobbies = () => {
            console.log("executing")
            const list = elmRef.current;
            hobbyData?.forEach(cat =>
                list.innerHTML += `<li draggable='true' id='${cat.Id}'>${cat.Name}</li>`
            );
        }
        generateHobbies();
    },

        []);

    return (
        <div class="card-container">
            <div class="card">
                <article>
                    <h1>My Hobbies</h1>
                    <section>
                        <h5>Favorite Hobby</h5>
                        <p>Having a full-time job, three kids, and being a Navy Reservist leaves me very little time for hobbies. In a perfect
                            world, I would have time for enjoyable activities, but that is currently very limited. There are many
                            things I would like to start doing once I have more time on my hands. For now, I focus on activities
                            that have tangible benefits.</p>
                        <p>One such activity is home improvement. I bought a home from the 1700s in Plymouth, MA. Although sturdy, the place needs
                            what seems like an infinite amount of work. I have already made a few improvements, aiming to save as
                            much money as possible by doing things myself. Of course, this includes tasks that do not require
                            extensive technical expertise. Having worked construction jobs in the past, I have some knowledge
                            of home improvements. Below are some pictures as examples of my work.</p>
                    </section>
                </article>
            </div>
            <div className="flex-card-container">
                <div className="side-card-left-narrow">
                    <h3>Kitchen Before</h3>
                    <img className="image-preview" src={kitchenBefore}></img>
                </div>
                <div className="side-card-right-wide">
                    <h3>Kitchen After</h3>
                    <img className="image-preview" src={kitchenAfter}></img>
                </div>
            </div>
            <div className="flex-card-container">
                <div className="side-card-left-narrow">
                    <h3>Fire Place Before</h3>
                    <img className="image-preview" src={fpBefore}></img>
                </div>
                <div className="side-card-right-wide">
                    <h3>Fire Place after</h3>
                    <img className="image-preview" src={fpAfter}></img>
                </div>
            </div>
            <h2 style={{ color: 'white' }}>What hobbies do you recommend?</h2>
            <div className="flex-card-container">
                <div className="side-card-left-narrow">
                    <h3>Hobbies</h3>
                    <ul className="hobbies" ref={elmRef}>
                    </ul>
                </div>
                <div className="side-card-right-wide">
                    <h3>Recommended Hobbies</h3>
                </div>
            </div>
        </div>
    );
}

export default MyHobbies;