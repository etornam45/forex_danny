// "use client"
"use client"

import { Tilt } from 'react-tilt'
import Image from 'next/image';
import "./contact-cards.scss"

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            25,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          30000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

import ContsctData from "@/data/contact/contacts";

const ContactForm = () => {
  return(<div className="fluid-container conact-cards">
      {ContsctData.map((contact) => {
        return (
        <Tilt options={defaultOptions}>
          <div className='card'>
              <Image alt={`${contact.name}`} style={{width:'4.5rem', height:'4.5rem'}} src={`${contact.image}`} width={100} height={100} />
              <h2>{contact.name}</h2>
              <p>{contact.description}</p>
              <a href={contact.link}>{contact.action}</a>
          </div>
        </Tilt>);
      })}
  </div>)
};

export default ContactForm;