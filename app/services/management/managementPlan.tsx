import Image from "next/image";
import "./managementPlan.scss";
import Process from "@/assets/0_p78nBozBT7S7ar-P.jpg"

interface InvestmentOption {
  deposit: number;
  dailyProfit: number;
  profitSharing: string;
  accountType: string;
}

const investmentOptions: InvestmentOption[] = [
  {
    deposit: 500,
    dailyProfit: 200,
    profitSharing: '50% client / 50% company',
    accountType: 'MT5 or MT4',
  },
  {
    deposit: 1000,
    dailyProfit: 500,
    profitSharing: '50% client / 50% company',
    accountType: 'MT5 or MT4',
  },
  {
    deposit: 5000,
    dailyProfit: 1500,
    profitSharing: '50% client / 50% company',
    accountType: 'MT5 or MT4',
  },
  {
    deposit: 10000,
    dailyProfit: 4000,
    profitSharing: '50% client / 50% company',
    accountType: 'MT5 or MT4',
  },
];

const InvestmentPlan: React.FC = () => {
  return (
    <div className='fluid-container managementPlan' style={{flexDirection: 'column', gap: 10}}>
      <h1>Account Management</h1>
      <p>
      We offer four different investment options with varying deposit amounts and daily profit rates. Clients can choose the option that best suits their investment goals.
      </p>
      <h2>Investment Options:</h2>
      <ul>
        {investmentOptions.map((option, index) => (
          <li key={index}>
            <h3>Option {index + 1}:</h3>
            <p>Deposit: ${option.deposit}</p>
            <p>Daily Profit: ${option.dailyProfit}</p>
            <p>Profit Sharing: {option.profitSharing}</p>
            <p>Account Type: {option.accountType}</p>
            <p>Client ID Number and Investor Password required.</p>
          </li>
        ))}
      </ul>
      
     
          <div className="blob">
            <div className="flush">

              <Image src={Process} alt={""}/>

              <div>
              <h2>Investment Process:</h2>
              <p>
                Clients need to choose an investment option and deposit the specified amount to their account with our company
                Daily profits will be automatically credited to the client's account
                Profit sharing will follow a 50% client / 50% company split.
              </p>
              </div>
              </div>
              <div className="flush">
              <Image src={Process} alt={""}/>

              <div>
                <h2>Account Access:</h2>

                <p>
                  Clients will be provided with a Client ID Number and Investor Password for their MT5 or MT4 account.
                  Clients can access their accounts to monitor their investments and profits.
                </p>
              </div>
              </div>
          </div>

    </div>
  );
};

export default InvestmentPlan;




