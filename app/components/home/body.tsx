import React from 'react'
import Image from 'next/image';
import trade from '../../assets/trade.jpeg'
// import { BodyData } from '../Data/Body'
import {ArrowRightAltIcon} from '../icons/arrowright'
// import { Link } from 'react-router-dom'
import "./body.scss"

const Body = () => {
    return (
        <div className='body '>
            <div className='body_container fluid-container'>
                <Image src={trade} alt='Trade image'/>
                <div className='body_info'>
                    <div className='body_header'>
                        <div className='wine_color' style={{ fontSize: '2.5rem', fontWeight: 'bold', paddingBottom: 10 }}>Why Choose Us As Your Market Expects.</div>
                        <p className='grey_color'>
                            "Experience matters: Our team brings
                            years of industry experience and a proven track record of
                            delivering consistent results in the market.With deep market
                            insights and  our in-depth understanding of market dynamics
                            and trends, we provide valuable insights that help you make
                            informed decisions."
                        </p>
                    </div>
                    <div className="body_text wine_color">
                        <div className='body_text_left'>
                            <div>
                                <ArrowRightAltIcon fill='#296cff' /><span>Diversified Portfolio Management</span>
                            </div>
                            <div>
                                <ArrowRightAltIcon fill='#296cff' /><span>Sector-Specific Opportunities</span>
                            </div>
                            <div>
                                <ArrowRightAltIcon fill='#296cff' /><span>Emerging Markets Exploration</span>
                            </div>
                        </div>
                        <div className='body_text_right'>
                            <div>
                                <ArrowRightAltIcon fill='#296cff' /><span>Stock Investments</span>
                            </div>
                            <div>
                                <ArrowRightAltIcon fill='#296cff' /><span>Global Market Exposure</span>
                            </div>
                            <div>
                                <ArrowRightAltIcon fill='#296cff' /><span>Real Estate Investment</span>
                            </div>
                        </div>


                    </div>
                    <div className="btn" style={{ marginTop: '0' }}>
                        <a href='/'><button style={{ fontSize: '1rem' }}>Learn More</button></a>
                    </div>

                </div>


            </div>

        </div>
    );
}

export default Body