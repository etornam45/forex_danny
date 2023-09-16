import services from "@/data/services/services";
import "./page.scss";
import TurtorialContent from "@/components/services/tutoring/content";

// import TutImage from "@/assets/Tutoring and Mentorship.jpg"
// import Image from 'next/image';

const Turtorial = () => {
  const data = services[0];

  return (
    <>
      <div className="back">
        <div className="big-tut-page">
          <div
            className="fluid-container"
            style={{
              flexDirection: "column",
              justifyContent: "center",
              gap: 10,
            }}
          >
            <h1> {data.name}</h1>
            {/* <Image src={TutImage} alt={data.name} /> */}
            <p>{data.descriptions}</p>
          </div>
        </div>
      </div>

           <div className="fluid-container">
              <TurtorialContent />
           </div>
      
    </>
  );
};

export default Turtorial;
