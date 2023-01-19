import img1 from "../images/about_icon.png";

const Achievements = () => {
    return ( 
        <div className="events_overall">
            <div>
        <div className="pasteventsContainer2">
                    <div className="lg:flex lg:flex-row-reverse flex justify-center">
                        <img src={img1} className="gridimg" alt="" />
                    </div>
                    <div className="flex flex-col max-pd ">
                    <div className="head_about text-6xl max-sm:text-3xl" style={{lineHeight:'123%'}}>Acheivements.</div>
                        <p className="para_about sm:text-2xl pt-5" style={{lineHeight:'160%'}}>
                            <ul className="para_about" style={{listStyle: "inside"}}>
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
 
export default Achievements;