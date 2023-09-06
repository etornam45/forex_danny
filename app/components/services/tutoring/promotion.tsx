import "./promotion.scss"


interface Props {
  companyName: string;
}

const TradingPromotion: React.FC<Props> = ({ companyName }) => {
  return (
    <div className="trading-promotion">
      <h2>📣 Exciting News for Traders! 📣</h2>
      <p>
        Are you looking to elevate your trading skills and maximize your profits?
        Look no further! At <b>{companyName}</b>, we're dedicated to helping traders like you succeed in the dynamic world of financial markets.
      </p>

      <h3>🆓 Free Daily Signals & Weekly Overview! 🆓</h3>
      <p>
        We believe in empowering our clients with the tools they need to make informed decisions.
        That's why we provide FREE daily signals accompanied by in-depth analysis, along with a weekly overview.
        Don't miss out on this valuable resource to enhance your trading strategies!
      </p>

      <h3>📈 Tutoring Services - From Basics to Advanced! 📈</h3>
      <p>
        For those of you who are eager to take your trading journey to the next level,
        we offer comprehensive tutoring services. Whether you prefer face-to-face sessions or the convenience of Zoom,
        our expert traders are here to guide you every step of the way.
      </p>

      <ul>
        <li><b>Personalized Learning</b>: Tailored lessons to meet your unique needs and goals.</li>
        <li><b>Comprehensive Curriculum</b>: Covering everything from trading fundamentals to advanced strategies.</li>
        <li><b>Hands-on Experience</b>: Practice real-time trading with the guidance of our mentors.</li>
        <li><b>Risk Management</b>: Learn to protect your investments and minimize losses.</li>
        <li><b>Continuous Support</b>: Access to our mentorship network for ongoing guidance.</li>
      </ul>

      <h3>💲 Tutoring Fee: $100</h3>
      <p>
        Invest in your future as a successful trader with our tutoring program.
        This fee includes access to a wealth of knowledge and expertise that will undoubtedly pay off in your trading career.
      </p>

      <p>
        Don't miss out on this incredible opportunity to enhance your trading skills and achieve your financial goals!
        Contact us today to get started on your journey to trading success.
      </p>
    </div>
  );
};

export default TradingPromotion;
