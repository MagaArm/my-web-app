
import '../css/grid-container.css';
import family from '../images/Family.jpg';
import abu from '../images/abu.jpg'
import familyAll from '../images/Family-All.jpg'
import extended from '../images/extended.jpg'

function MyFamily() {
    return (
        <div className="main-grid-container">
            <div className="large-card-one">
                <img alt="family" src={family}></img>
            </div>
            <div className="large-card-two">
                <article>
                    <h3>Our Dog</h3>
                    <section>
                        <p>This is Abu. Despite his youthful appearance, he is quite an old dog, having been
                            with us for about eight years. I adopted him from a co-worker during my active
                            duty service. Prior to Abu, we made several attempts at dog ownership, but none
                            were successful until we found him. While he is not without his flaws—he tends to
                            be wary of people and other dogs and can be quite vocal and anxious—he is, without
                            a doubt, the best dog we have had. Abu is intelligent and loves every member of our
                            family, truly becoming one of us.</p>
                    </section>
                </article>
            </div>
            <div className="large-card-three">
                <img alt="extended-family" src={extended}></img>
            </div>
            <div className="large-card-four">
                <article className="desc">
                    <h3>The Crew</h3>
                    <section>
                        <p>Our family has faced its share of challenges, but everything I do is for their well-being.
                            I have made numerous sacrifices and will continue to do so to ensure that they have a good life.
                            There are moments when I reflect on my journey and realize how fortunate I am to be surrounded
                            by such an extraordinary group of people. I never imagined that I would be blessed with such a
                            wonderful family.</p>
                        <p>Looking ahead, my greatest hope is that we continue to maintain strong, healthy relationships
                            and remain close to one another, regardless of the obstacles that may come our way.
                            I believe that the bond we share is unparalleled and that our mutual support will carry us through
                            any difficulties. Family is the most important thing in life, and I am committed to nurturing and
                            preserving these precious connections. I am deeply grateful for each member of my family and the
                            love we share, and I look forward to many more years of happiness together.</p>
                    </section>
                </article>
            </div>
            <div className="aside-container">
                <section className="aside-item">
                    <article>
                        <h3>My Family</h3>
                        <section>
                            <p>My family consists of five members and a dog: my wife Jill, our eldest daughter Aiyla,
                                our middle child Briella, and our youngest, Audrey. We currently reside in Plymouth,
                                Massachusetts, although we have lived in various parts of the country. We enjoy taking
                                walks on a nearby trail that leads to the beach and downtown Plymouth, a location
                                historically known for being the landing site of the pilgrims. Here, we are waiting
                                to have dinner at a local restaurant in celebration of Mother’s Day.</p>
                        </section>
                    </article>
                </section>
                <section className="aside-item">
                    <img alt="family" src={abu}></img>
                </section>
                <section className="aside-item">
                    <article>
                        <h3>Extended Family</h3>
                        <section>
                            <p>The primary reason for our move to Massachusetts was to be closer to our extended family.
                                In our previous state, our children had no relatives of the same age, so we decided to make
                                a change to ensure they could grow up surrounded by family. Here in Massachusetts, our
                                children have several cousins with whom they regularly spend holidays and special occasions.
                                We also enjoy spontaneous gatherings to catch up and share good times together.</p>
                        </section>
                    </article>
                </section>
                <section className="aside-item">
                    <img alt="family" src={familyAll}></img>
                </section>
            </div>
        </div>
    );
}

export default MyFamily;