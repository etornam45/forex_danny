import React from "react";
// import './investmentPlans.scss'
import "./investmentPlan.scss";
import { InvestmentData } from "../../data/home/investmentPlan";
import PlanCard from "../PlanCard";

const InvestmentPlans = () => {
  return (
    <div className="investment">
      <div className="investment_container">
        <div className="investment_header">
          <h2
            className="wine_color"
            style={{ fontSize: "3rem", fontWeight: "bold" }}
          >
            Our Investment Plans
          </h2>
          <p
            className="grey_color"
            style={{ fontSize: "1.1rem", marginTop: "1rem" }}
          >
            We utilize multi-asset management to make unified profit for our
            investors
          </p>
        </div>

        <div className="investmentPlans fluid-container">
          {/* <div> */}
          {InvestmentData.map((investment) => {
            return (
              <PlanCard
                title={investment.title}
                minimum={investment.minimum}
                maximum={investment.maximum}
                shared={investment.shared}
                returns={investment.returns}
                withdrawal={investment.withdrawal}
                duration={investment.duration}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InvestmentPlans;

// <div className="plans">
// <div>
//     {plansData.map((plan, index)=> {
//         return (
//             <div className="plan" key={index}>
//                 {plan.icon}
//                 <span>{plan.name}</span>
//                 <span> ${plan.price}</span>

//                 <div className="features">
//                     {plan.features.map((feature, index)=> {
//                         return(
//                             <div className="feature">
//                                 <img src={whiteTick} alt="" />
//                                 <span key={index}>{feature}</span>
//                             </div>
//                         )
//                     }
//                     )}

//                 </div>

//                 <div className="benefits">
//                     <span>See more benefits</span>
//                     <img src={RightArrow} alt="" onClick={onClick}/>
//                 </div>

//                 <button onClick={onClick} className="btn">Join Now</button>
//             </div>
//         )
//     }
//     )}
// </div>

// </div>
