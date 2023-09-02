"use client"

import './content.scss';
import Image from 'next/image';

// Images
import TutoringImg from '../../assets/Tutoring and Mentorship.jpg'
import InvestmentImg from '../../assets/Forex-Trading-1424x802.jpeg'
import Account from '../../assets/account management.jpg'

import accordionData from '../../data/services/accordion';
import AccordionItem from './accordion';
import WideButton from './wide-button';


export default function ServicesContent () {
    return (<>
        <div className="services-page fluid-container">
            <h1>Our Services</h1>
            <p style={{padding: "1rem 0 3rem"}}>
                At <b>UNITrading</b>, we are dedicated to empowering traders of all skill levels to succeed in the dynamic world of forex trading. Our comprehensive range of services is designed to cater to your unique trading goals, whether you're a novice looking to learn the ropes or an experienced trader seeking advanced investment opportunities. With a team of skilled professionals and a proven track record, we are your trusted partner on your forex trading journey.
            </p>
            <div className="service">
                <div className="img">
                    <Image src={TutoringImg} alt="Forex Trading" />
                </div>
                <div className="left">
                    <h2>Tutoring and Mentorship</h2>
                    <p>
                    Are you new to forex trading or looking to enhance your trading skills? Our expert traders provide personalized tutoring and mentorship programs tailored to your level of expertise. Whether you're a beginner aiming to understand the basics or an intermediate trader seeking advanced strategies, our seasoned mentors will guide you through the intricacies of the forex market. Our tutoring and mentorship services include:
                    </p>
                    <ul>
                        <li><b>Personalized Training</b>: One-on-one sessions with our experienced traders who will walk you through trading concepts, technical analysis, risk management, and more.</li>
                        <li><b>Comprehensive Educational Resources</b>: Access to a library of educational materials, video tutorials, and articles that cover a wide range of trading topics.</li>
                        {/* <li><b>Live Webinars and Seminars</b>: Engage in interactive online sessions where you can learn from experts, ask questions, and gain insights into real-time market trends.</li> */}
                    </ul>
                </div>
            </div>
            <WideButton text='Start A Live Session on Zoom' url='/services/tutorial' />

            <div className="service" style={{direction: "rtl"}}>
                <div className="img">
                    <Image src={InvestmentImg} alt="Forex Investment" />
                </div>
                <div className="left">
                    <h2>Investment for Trading</h2>
                    <p>
                    Unlock your potential for higher returns by taking advantage of our investment opportunities designed for traders who want to capitalize on the forex market. Our investment services offer:
                    </p>
                    <ul>
                        <li><b>Managed Investment Portfolios</b>: Invest in a diversified portfolio managed by our team of seasoned traders, who strategically allocate funds to maximize potential returns while managing risk.</li>
                        <li><b>Algorithmic Trading</b>: Access automated trading strategies powered by advanced algorithms that execute trades based on predefined criteria, enhancing the efficiency and accuracy of your trades.</li>
                    </ul>
                </div>
            </div>
            <WideButton text="Can't risk? Start investing today " url='/services/tutorial' />

            <div className="service">
                <div className="img">
                    <Image src={Account} alt="Account Management"/>
                </div>
                <div className="left">
                    <h2>Account Management</h2>
                    <p>
                    For traders seeking a hands-off approach, our account management service provides professional expertise to manage your trading account efficiently:
                    </p>
                    <ul>
                        <li><b>Experienced Account Managers</b>: Our experienced account managers take care of your trades, leveraging their expertise to make informed decisions and optimize your trading results.</li>
                        <li><b>Tailored Strategies</b>: Each account management approach is customized to your risk tolerance, financial goals, and preferred trading style.</li>
                        <li><b>Transparency and Reporting</b>: Stay updated on your account's performance with regular reports, ensuring full transparency and accountability.</li>
                    </ul>
                </div>
            </div>
            <WideButton text='Trust us with your account, gain more profit' url='/services/tutorial' />

            <div className="why-choose-us">
                <h2 style={{textAlign: "center"}}>Why Choose Us?</h2>
                
                <div className="accordion">
                    {accordionData.map((item, index) => (
                        <AccordionItem key={index} index={index} title={item.title} content={item.content} />
                    ))}
                </div>
            </div>

            <div className="contact-button">
                <button>Contact Us</button>
            </div>
        </div>
    </>)
}