import { useContext } from "react";
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
                            <p>Thank you {`${context?.contextFormData?.name} ${context?.contextFormData?.lname}`}, for subscibing to Armando's App!</p>
                            <p>You have registered using the {context?.contextFormData?.email} address. Any
                                electronic correspondance will be sent here.</p>
                            <p>you will recieve any physical correspondance to {context?.contextFormData?.address}</p>
                            {context?.recomendedHobbyData.length > 0 &&
                                <>
                                    <h5>You will hear about your recommended hobbies:</h5>
                                    <ul>
                                        {context?.recomendedHobbyData?.map((recItems, index) =>
                                            <li key={index}> {recItems.Name}</li>
                                        )}
                                    </ul>
                                </>
                            }
                        </article>
                    </section>
                </article>
            </div>
        </div >
    );
}

export default Summary;