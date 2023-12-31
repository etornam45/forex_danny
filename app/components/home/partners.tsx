import "./partners.scss";
import partners3 from "@/assets/parter4.jpg";
import partners2 from "@/assets/partner2.jpeg";
import partners1 from "@/assets/partner1.jpeg";
import { TelegramIcon } from "../icons/telegram";
import {partners} from "@/data/home/partners"

import Image from "next/image";

const Partners = () => {
  const images = [partners3, partners2, partners1];

  return (
    <div className="partners">
        <h3 className="wine_color" style={{ fontSize: "3rem", fontWeight: "bold" }}>
          Our Partners
        </h3><hr />
      <div className="partners_container fluid-container">
        
        
        <div className="partner_img">
          {partners.map(partner => (<>
              <div className="partner_img_names">
                <a href="/telegram">
                  <Image src={images[partner.image - 1]} alt={partner.name} />
                </a>
                <div className="partner_names">
                  <span className="wine_color">{partner.name}</span>
                  <div className="tel">
                    <a className="telegram grey_color" href="/telegram">
                      <TelegramIcon />
                      <span className="grey_color">{partner.role}</span>
                    </a>
                  </div>
                </div>
              </div>
          </>))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
