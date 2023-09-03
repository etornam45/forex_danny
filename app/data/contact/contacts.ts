interface ContactProps { 
    name: String;
    description: String;
    link: string;
    image: String;
    action: String;

}


const ContsctData: ContactProps[] = [
    {
        name: "Telegram",
        description: "Get in touch with us on telegram for more information",
        image: "https://img.icons8.com/color/144/telegram-app--v1.png",
        link: "/telegram",
        action: "Chat with us"
    },
    {
        name: "Email",
        description: "Get in touch with us on email for more information",
        image: "https://img.icons8.com/fluency/96/new-post.png",
        link: "/email",
        action: "Send us a mail"
    },
    {
        name: "Phone",
        description: "Get in touch with us on phone for more information",
        image: "https://img.icons8.com/ios/100/phone--v1.png",
        link: "/phone",
        action: "Call us"
    },
    {
        name: "Whatsapp",
        description: "Get in touch with us on whatsapp for more information",
        image: "https://img.icons8.com/color/144/whatsapp--v1.png",
        link: "/whatsapp",
        action: "Chat with us"
    }
]

export default ContsctData