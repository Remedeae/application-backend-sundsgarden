import img1 from '../assets/zed.jpg'
import img2 from '../assets/hanzo.jpg'
import img3 from '../assets/seras.jpg'
import img4 from '../assets/jaina.jpg'
import img5 from '../assets/graveguard.jpg'
import img6 from '../assets/millicent.jpg'
import img7 from '../assets/demon-hunter.jpg'
import profile from '../assets/profile.jpg'
import { useState } from 'react'

function AboutApplicant() {
    const photoInfo = {
        img: [img1, img2, img3, img4, img5, img6, img7],
        char: ['Zed', 'Hanzo', 'Seras Victoria', 'Jaina Proudmore', 'Graveguard set', 'Millicent', 'Demon Hunter'],
        sorce: ['League of Legends', 'Overwatch', 'Hellsing Ultimate', 'Heroes of the Storm / Warcraft', 'Bloodborne', 'Elden Ring', 'Diablo III'],
        photographer: ['Mikael Hakali', 'Kim Ventura', 'Jellycide', 'Ole Sollie', 'Ole Sollie', 'Robert Johannesson', 'Unknown']
    };

    const [imgID, setImgID] = useState(0);
    let imgDisplay = photoInfo.img[imgID];
    let charDisplay = photoInfo.char[imgID];
    let sorceDisplay = photoInfo.sorce[imgID];
    let photographerDisplay = photoInfo.photographer[imgID];
    let arrowLeft = "";
    let arrowRight = "";

    function disable() {
        if (imgID === 0) {
            arrowLeft = "disable";
        };
        if (imgID === photoInfo.img.length - 1) {
            arrowRight = "disable";
        };
        return;
    };
    disable();
    const handleImgUp = () => {
        if (imgID < photoInfo.img.length - 1) {
            setImgID(imgID + 1)
        };
    }
    const handleImgDown = () => {
        if (imgID > 0) {
            setImgID(imgID - 1)
        };
    }

    return (
        <div className="about-applicant">
            <div className="banner">
                <h1>Meet Sanna-Maya</h1>
            </div>
            <div className="about-applicant__presentation">
                <div>
                    <h2>The Jack of All Trades</h2>
                    <p>My name is Sanna-Maya Blomdahl, a 34 year old currently residing in Gothenburg, where I live with my roommate and an abundance of plants. Previously I have studied pharmacy and also worked in the social care sector, but have come to the conclusion that, meanwhile being a social person, I’m not extroverted enough to thrive in a highly socially stimulating setting.</p>
                    <p>In my free time I enjoy playing video games, tabletop RPGS and making cosplays. I love creating things, so be it building a minecraft house, optimising my gameplay or figuring out how to bring an animated character into the real world, I’m there for it. I’m also the person who brings snacks to a tabletop session and when I don’t know what people like I bring one of everything.</p>
                    <p>As a person I’m caring and compassionate, striving to create harmony in a group. I’m very bubbly when I’m in a good mood, but am also not afraid to be there for the big problems. Basically I’m the moral support of a group, along with the visionary that draws up ideas and structures of things.            </p>
                </div>
                <div className='profile-container'>
                    <img src={profile} alt="Portray" />
                </div>
            </div>
            <div className="about-applicant__creator">
                <div className='cosplay-container'>
                    <div className='cosplay-img'>
                        <i className={arrowLeft + " fa-solid fa-angle-left"} onClick={handleImgDown}></i>
                        <img src={imgDisplay} alt="Cosplay" />
                        <i className={arrowRight + " fa-solid fa-angle-right"} onClick={handleImgUp}></i>
                    </div>
                    <div className='cosplay-info'>
                        <p>{charDisplay} from {sorceDisplay}</p>
                        <p>Photography by {photographerDisplay}</p>
                    </div>
                </div>
                <div>
                    <h2>The Creator</h2>
                    <p>Throughout my life there is something that has followed me along and that is the fact that I'm a very creative person and love working on projects and learning new things. There has been dancing, motocross, gaming, music, lots of drawing and painting as well as cooking and baking. All of this finally culminated in a hobby called cosplay, where you create costumes based on games, comics and shows and reenact those characters in front of an audience. Here I found the opportunity to work with multiple mediums, learn a wide variety of techniques and mediums. It's sewing, creating props and armor, electronics and 3D modeling as well as the theatrical aspect of it.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutApplicant
