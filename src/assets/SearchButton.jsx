import React from "react";

const SearchButton = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={34}
      height={34}
      viewBox="0 0 34 34"
    >
      <defs>
        <pattern
          id="pattern"
          preserveAspectRatio="none"
          width="100%"
          height="100%"
          viewBox="0 0 51 50"
        >
          <image
            width={51}
            height={50}
            xlinkHref="data:image/png;base64,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"
          />
        </pattern>
      </defs>
      <rect
        id="Layer_3"
        data-name="Layer 3"
        width={34}
        height={34}
        fill="url(#pattern)"
      />
    </svg>
  );
};

export default SearchButton;
