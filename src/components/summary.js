import { useContext, useState } from "react";
import { AppContext } from "../App";
function Summary() {
    const context = useContext(AppContext);

    return (
        <div className="card-container">
            <div className="card">
                <article>
                    <section>
                        <h5>Summary</h5>
                        <article>
                            <p>Thank you {context?.contextFormData?.name}, for subscibing to Armando's App!</p>
                            <p>You have registered using the {context?.contextFormData?.email} address. Any 
                            electronic correspondance will be sent here.</p>
                            <p>you will recieve any physical correspondance to {context?.contextFormData?.address}</p>
                            <></>
                        </article>
                    </section>
                </article>
            </div>
        </div >
    );
}

export default Summary;