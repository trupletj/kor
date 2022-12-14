import React from "react";

const SettingsButton = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={40}
      height={35}
      viewBox="0 0 40 35"
    >
      <defs>
        <pattern
          id="pattern"
          preserveAspectRatio="none"
          width="100%"
          height="100%"
          viewBox="0 0 58 51"
        >
          <image
            width={58}
            height={51}
            xlinkHref="data:image/png;base64,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"
          />
        </pattern>
      </defs>
      <rect
        id="Layer_2"
        data-name="Layer 2"
        width={40}
        height={35}
        fill="url(#pattern)"
      />
    </svg>
  );
};

export default SettingsButton;
