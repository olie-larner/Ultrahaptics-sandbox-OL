import React from "react";
import ToutCopy from "./ToutCopy";
import ToutImage from "./ToutImage";

const ToutContent = props => (
  <div className={props.textDirection}>
    <ToutCopy />
    <ToutImage fullWidth={props.fullWidth} />
  </div>
);

export default ToutContent;
