import React from "react";
import { InlineWidget } from "react-calendly";

const CalendlyComponent = () => {
  return (
    <div className="w-[100%]">
      <InlineWidget url="https://calendly.com/your_scheduling_page" />
    </div>
  );
};

export default CalendlyComponent;
