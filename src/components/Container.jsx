import React from "react";

const Container = (props) => {
  return (
    <div className="absolute top-12 bottom-12 left-0 right-0 overflow-y-scroll p-4">
      {props.children}
    </div>
  );
};

export default Container;
