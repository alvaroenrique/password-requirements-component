interface IncorrectIconProps {
  width: number;
  height: number;
}

function IncorrectIcon({ width, height }: IncorrectIconProps) {
  return (
    <svg
      data-testid="incorrect-icon"
      style={{
        width,
        height,
        minWidth: width,
        minHeight: height,
      }}
      viewBox="0 0 80 80"
      fill="none"
    >
      <g clipPath="url(#clip0_976_3)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 40C0 29.3913 4.21427 19.2172 11.7157 11.7157C19.2172 4.21427 29.3913 0 40 0C50.6087 0 60.7828 4.21427 68.2843 11.7157C75.7857 19.2172 80 29.3913 80 40C80 50.6087 75.7857 60.7828 68.2843 68.2843C60.7828 75.7857 50.6087 80 40 80C29.3913 80 19.2172 75.7857 11.7157 68.2843C4.21427 60.7828 0 50.6087 0 40ZM54.1173 57.888L40 43.7707L25.888 57.888L22.112 54.1173L36.2293 40L22.112 25.888L25.888 22.112L40 36.2293L54.112 22.112L57.888 25.888L43.7707 40L57.888 54.112L54.1173 57.888Z"
          fill="#FF5761"
        />
      </g>
      <defs>
        <clipPath id="clip0_976_3">
          <rect width="80" height="80" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default IncorrectIcon;
