import React from "react";

const Container = (props) => {
  return (
    <div className="absolute top-[72px] bottom-0 left-0 right-0 overflow-y-scroll px-[30px]">
      {props.children}
    </div>
  );
};

export default Container;
