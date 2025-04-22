import img1 from '../assets/redux-of-the-inifite.jpg'
import img2 from '../assets/river-spirit.jpg'
import img3 from '../assets/right-between-the-eyes.jpg'
import { useState } from 'react'

function AboutApplicant() {
    const imgArray = [img1, img2, img3];
    const [imgID, setImgID] = useState(0);
    let img = imgArray[imgID];

    const handleImgUp = () => {
        setImgID(imgID + 1)
/*         console.log(img);
        console.log(imgID);
 */    }
    const handleImgDown = () => {
        setImgID(imgID - 1)
/*         console.log(img);
        console.log(imgID); */
    }

    return (
        <div className="about-applicant">
            <div className="banner">
                <h1>Meet Sanna-Maya</h1>
            </div>
            <div className="about-applicant__presentation">
                <div>
                    <h2>Hi!</h2>
                    <p>My name is Sanna-Maya Blomdahl, a 34 year old currently residing in Gothenburg, where I live with my roommate and an abundance of plants. Previously I have studied pharmacy and also worked in the social care sector, but have come to the conclusion that, meanwhile being a social person, I’m not extroverted enough to thrive in a highly socially stimulating setting.</p>
                    <p>In my free time I enjoy playing video games, tabletop RPGS and making cosplays. I love creating things, so be it building a minecraft house, optimising my gameplay or figuring out how to bring an animated character into the real world, I’m there for it. I’m also the person who brings snacks to a tabletop session and when I don’t know what people like I bring one of everything.</p>
                    <p>As a person I’m caring and compassionate, striving to create harmony in a group. I’m very bubbly when I’m in a good mood, but am also not afraid to be there for the big problems. Basically I’m the moral support of a group, along with the visionary that draws up ideas and structures of things.            </p>
                </div>
                <img src="" alt="" />
            </div>
            <div className="about-applicant__creator">
                <div>
                    <i className="fa-solid fa-angle-left" onClick={handleImgDown}></i>
                    <img src={img} alt="Cosplay" />
                    <i className="fa-solid fa-angle-right" onClick={handleImgUp}></i>
                </div>
                <div>
                    <h2></h2>
                    <p></p>
                </div>
            </div>
        </div>
    );
};

export default AboutApplicant
