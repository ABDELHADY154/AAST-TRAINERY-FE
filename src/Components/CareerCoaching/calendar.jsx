import { DateTimePicker } from "react-datetime-picker";
import React from "react";

let { DateTimePicker } = ReactWidgets;

let widget = (
  <DateTimePicker dropUp data={["orange", "red", "blue", "purple"]} />
);

render(widget);
