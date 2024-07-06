import React from "react";

function Circle({ classes, rellax }: { classes: string; rellax?: string }) {
  return (
    <span className={classes} data-rellax-speed={rellax}>
      {" "}
    </span>
  );
}

export default Circle;
