import "./page.scss"
import { InvestmentData } from "@/data/home/investmentPlan";

const Investment = () => {

    function toSentenceCase(str: string){
        return str.toLowerCase().charAt(0).toUpperCase() + str.slice(1);
    }

  return (
    <>
      <header className="invest">
        <h1>Explore Our Investment Packages</h1>
        <p>Your Path to Financial Growth</p>
      </header>
      <article className="fluid-container art">
        {InvestmentData.map(({maximum, minimum, duration, returns, withdrawal, shared}) => {
            return(
                <section className="package">
                    <h2>Builder Package</h2>
                    <ul>
                        <li> {toSentenceCase(minimum)}</li>
                        <li> {toSentenceCase(maximum)}</li>
                        <li>{toSentenceCase(returns)}</li>
                        <li>{toSentenceCase(shared)}</li>
                        <li>Withdrawal Charges: No charges</li>
                        <li>{toSentenceCase(duration)}</li>
                    </ul>
                    <button>Invest Now</button>
                </section>
            )
        })}
      </article>
    </>
  );
};

export default Investment;
