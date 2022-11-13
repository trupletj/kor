import React from "react";

const Container = (props) => {
  return (
    <div className="absolute top-[50px] bottom-0 left-0 right-0 overflow-y-scroll px-[18px]">
      {props.children}
    </div>
  );
};

export default Container;
