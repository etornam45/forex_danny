import './about-hero.scss'
import Image from 'next/image'
import GroupImage from "../../assets/group.jpeg"

const AboutHeroSection = () => (<>
    <div className='fluid-container'>
        <div className="about-hero" >
            <p>
              Welcome to UNI Trading, your trusted partner in the exciting world of forex trading. We are dedicated to empowering traders of all levels with the knowledge, tools, and support they need to succeed in the dynamic forex market.
            </p>

            <p>
              With a team of experienced traders, innovative strategies, and a commitment to excellence, we aim to provide you with the best possible trading experience. Whether you're a beginner or an experienced trader, our goal is to help you achieve your financial objectives.
            </p>

            <h2>Our Mission</h2>
            <p>
              Our mission is to demystify forex trading and provide accessible, high-quality resources to traders of all backgrounds. We believe that education and empowerment are key to achieving success in the forex market. Through our comprehensive training programs, investment opportunities, and account management services, we're here to guide you every step of the way.
            </p>

            <h2>Why Choose Us?</h2>
            <p>
              - Expertise: Our team consists of skilled traders with a wealth of experience in the forex industry, ready to share their insights and knowledge with you.
            </p>
            <p>
              - Comprehensive Services: From tutoring and mentorship to investment options and account management, we offer a complete suite of services tailored to your needs.
            </p>
            <p>
              - Proven Success: Our track record of successful trading and satisfied clients showcases our commitment to delivering real results.
            </p>
            <p>
              - Continuous Learning: We believe that the forex market is ever-evolving, and we're committed to staying at the forefront of industry trends and strategies.
            </p>

            <h2>Contact Us</h2>
            <p>
              Ready to embark on a rewarding forex trading journey? Have questions or need assistance? Don't hesitate to <a href="/contact">contact us</a> today. Our team is here to support you and help you achieve your financial goals.
            </p>
            <Image src={GroupImage} alt='Forex Group' />
        </div>
    </div>
</>)

export default AboutHeroSection