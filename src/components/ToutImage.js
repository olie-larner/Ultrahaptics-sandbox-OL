import React from "react";
import classnames from "classnames";

const ToutImage = props => (
  <div
    className={classnames(
      "toutImage bg-cover bg-center relative mx-auto sm:mx-0 my-4 sm:my-0 w-11/12 sm:w-1/2",
      {
        "w-full": props.fullWidth
      }
    )}
  />
);

export default ToutImage;
