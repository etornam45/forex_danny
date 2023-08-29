import styles from './footer.module.scss'
import "./footer.scss"

export default function Footer(){
    return (<>
        <footer>
            <div className="fluid-container" style={{marginTop: 100}}>
            <div className={styles["auto-container"]}>
                <div className={styles.row}>
                    <div className={styles["big-column"]}>    
                        <div className={styles.row}>
                            <div className="footer-column col-md-7 col-sm-6 col-xs-12">
                                <div className="footer-widget about-widget">
                                    <div className="widget-inner">
                                        
                                        <div className="text">We build 	strong investment portfolio through diversified asset management.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-column col-md-5 col-sm-6 col-xs-12" style={{minWidth: 150}}>
                                <div className="footer-widget links-widget">
                                    <div className="widget-inner">
                                        <h3>Short Link</h3>
                                        <div className="links">
                                            <ul>
                                                <li><a href="/?a=services">Services</a></li>
                                                <li><a href="/?a=signup">Register</a></li>
                                                <li><a href="/?a=login">Login</a></li>
                                                <li><a href="/?a=about">About us</a></li>
                                                <li><a href="/?a=faq">FAQ</a></li>
                                                <li><a href="/?a=support">Contact us</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className={styles["big-column"]}>    
                        <div className={styles.row}>
                            
                            <div className="footer-column col-md-6 col-sm-6 col-xs-12">
                                <div className="footer-widget info-widget">
                                    <div className="widget-inner">
                                        <h3>Contact Us</h3>
                                        <div className="info">
                                            <ul>
                                                <li className="clearfix"><strong>Address: </strong> <span className="txt">Bastion Tower, Leopold Quarter 5 Place du Champ de Mars, 1050 Brussels, Belgium</span></li>
                                                <li className="clearfix"><strong>Phone: </strong> <span className="txt">***</span></li>
                                                <li className="clearfix"><strong>Email: </strong> <span className="txt">admin@astutealliance.ltd</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-column col-md-6 col-sm-6 col-xs-12" style={{maxWidth: 350}}>
                                <div className="footer-widget gallery-widget">
                                    <div className="widget-inner">
                                        <h3>Our Porfolio Goal</h3>
                                        <div className=" clearfix">
                                            We understand all clients are different and will look to build a portfolio designed around your key objectives: growing wealth, preserving wealth, providing an income or looking to pass wealth on to future generations.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div className={styles['bottom']}>
                &copy; UNITrading
            </div>
        </footer>
    </>)
}