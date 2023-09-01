interface WideButtonContent {
  url: string;
  text: string;
}

const WideButton: React.FC<WideButtonContent> = ({ text, url }) => {
  return (
    <div className="wide-btn">
      <a href={url}>{text}</a>
    </div>
  );
};

export default WideButton;
