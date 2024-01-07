interface CorrectIconProps {
  width: number;
  height: number;
}

function CorrectIcon({ width, height }: CorrectIconProps) {
  return (
    <svg
      data-testid="correct-icon"
      style={{
        width,
        height,
        minWidth: width,
        minHeight: height,
      }}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M34.4 58.4L62.6 30.2L57 24.6L34.4 47.2L23 35.8L17.4 41.4L34.4 58.4ZM40 80C34.4667 80 29.2667 78.9493 24.4 76.848C19.5333 74.7467 15.3 71.8973 11.7 68.3C8.1 64.7 5.25067 60.4667 3.152 55.6C1.05333 50.7333 0.00266667 45.5333 0 40C0 34.4667 1.05067 29.2667 3.152 24.4C5.25333 19.5333 8.10267 15.3 11.7 11.7C15.3 8.1 19.5333 5.25067 24.4 3.152C29.2667 1.05333 34.4667 0.00266667 40 0C45.5333 0 50.7333 1.05067 55.6 3.152C60.4667 5.25333 64.7 8.10267 68.3 11.7C71.9 15.3 74.7507 19.5333 76.852 24.4C78.9533 29.2667 80.0027 34.4667 80 40C80 45.5333 78.9493 50.7333 76.848 55.6C74.7467 60.4667 71.8973 64.7 68.3 68.3C64.7 71.9 60.4667 74.7507 55.6 76.852C50.7333 78.9533 45.5333 80.0027 40 80Z"
        fill="#00AA6E"
      />
    </svg>
  );
}

export default CorrectIcon;
