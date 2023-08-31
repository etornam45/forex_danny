import './about-hero.scss'
import Image from 'next/image'
import GroupImage from "../../assets/group.jpeg"

const AboutHeroSection = () => (<>
    <div className='fluid-container'>
        <div className="about-hero" >
            <p>
                Forex trading is the next generation in creating jobs and eradicating poverty 
                in West Africa, especially in Ghana because you can use it as your own personal
                work. Also. our academy and firm aims to train the youth and students to be 
                in financial freedom throught forex trading and also provide investment plans for 
                people that cannot still trade or afford to risk their income in the forex market after
                completing lessons in forex.
            </p>
            <Image src={GroupImage} alt='Forex Group' />
        </div>
    </div>
</>)

export default AboutHeroSection