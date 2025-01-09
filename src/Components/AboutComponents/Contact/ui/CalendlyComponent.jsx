import React from "react";
import { InlineWidget } from "react-calendly";

const CalendlyComponent = () => {
  return (
    <div className="w-[100%]">
      <InlineWidget url="https://calendly.com/wakil-isnad" />
    </div>
  );
};

export default CalendlyComponent;
