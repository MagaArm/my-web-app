import { useState } from "react";


function Summary() {
    const [data, setData] = useState(localStorage.getItem('form-data'))

    console.log("data: ", data);

    return (
        <div className="card-container">
            <div className="card">
                <article>
                    <section>
                        <h5>Summary {data.name}</h5>
                        <p>Summary</p>
                    </section>
                </article>
            </div>
        </div >
    );
}

export default Summary;