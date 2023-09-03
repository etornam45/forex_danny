import ContactForm from "@/components/contact/contact-cards"

const Contact = () => {
    return(<>
            <div className="fluid-container" style={{textAlign: "center", flexDirection: "column", margin: "50px auto"}}>
                <h2 style={{marginBottom: "1.6rem"}}>Contact UNI Trading - Forex Trader</h2>
                <p>
                    Thank you for your interest in reaching out to UNI Trading, a professional Forex trader. We are dedicated to providing you with exceptional Forex trading services and support. Please use the following contact information to get in touch with us:
                </p>
            </div>

            <ContactForm />    
    </>)
}

export default Contact