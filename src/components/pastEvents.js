import img1 from "../images/about_icon.png";
const PastEvents = () => {
    return ( 
        <div className="events_overall">
            <div className="grid grid-rows-2 gap-y-32">
                <div className="pasteventsContainer1">
                <div className="flex flex-col">
                    <div className="head_about max-sm:text-3xl ">Past Events</div>
                        <p className="para_about">
                        <ul className="para_about">
                        <li>Inter IIT: The primary goal of every sports club of the IIT (annual event).</li>
                        <li>Basketball Spardha: Inter hostel competition (annual event)</li>
                        <li>Basketball Spirit: Inter college competition (annual event)</li>
                        <li>Friendly Matches : Held at regular intervals against the local clubs.</li>
                        </ul> 
                        </p>
                    </div>
                    <div>
                        <img src={img1} className="img1" alt="" />
                    </div>
                </div>
                <div className="pasteventsContainer2">
                    <div className="flex flex-row-reverse">
                        <img src={img1} className="img1" alt="" />
                    </div>
                    <div className="flex flex-col max-pd ">
                    <div className="head_about max-sm:text-3xl ">Acheivements.</div>
                        <p className="para_about">
                            <ul className="para_about">
                            <li>Inter IIT: The primary goal of every sports club of the IIT (annual event).</li>
                            <li>Basketball Spardha: Inter hostel competition (annual event)</li>
                            <li>Basketball Spirit: Inter college competition (annual event)</li>
                            <li>Friendly Matches : Held at regular intervals against the local clubs.</li>
                            </ul> 
                        </p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default PastEvents;