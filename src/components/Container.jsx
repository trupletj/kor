import React from "react";

const Container = (props) => {
  return (
    <div className="absolute top-12 bottom-0 left-0 right-0 overflow-y-scroll px-4">
      {props.children}
    </div>
  );
};

export default Container;
