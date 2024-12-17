import "./style.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <svg
        className="loader"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(96, 12, 174)" stopOpacity="1" />
            <stop offset="100%" stopColor="rgb(53, 118, 198)" stopOpacity="1" />
          </linearGradient>
        </defs>
        <circle
          cx="12"
          cy="12"
          r="10"
          fill="none"
          stroke="url(#grad1)"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export { Loader };
