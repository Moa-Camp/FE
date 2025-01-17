"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Aos() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return null;
}

export default Aos;
