import React from "react";

const Wrapper = (props) => {
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 mb-auto max-w-[420px] mx-auto font-nanum ">
      {props.children}
    </div>
  );
};

export default Wrapper;
