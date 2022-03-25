import { useEffect, useRef, useState } from "react";
import { useLocalStorage } from "react-use";
import { BoldText } from "../../utils/styleUtils";

const DatePicker = () => {
  const startDateRef = useRef();
  const endDateRef = useRef();

  const [startDate, setStartDate] = useLocalStorage("startDate", "");
  const [endDate, setEndDate] = useLocalStorage("endDate", "");

  useEffect(() => {
    const onStartDateChange = (e) => {
      setStartDate(e.target.value);
    };

    const onEndDateChange = (e) => {
      setEndDate(e.target.value);
    };
    startDateRef.current.addEventListener("change", onStartDateChange);
    endDateRef.current.addEventListener("change", onEndDateChange);

    return () => {
      startDateRef.current.removeEventListener("change", onStartDateChange);
      endDateRef.current.removeEventListener("change", onEndDateChange);
    };
  });

  return (
    <div className="container  py-2">
      <div className="row justify-content-center">
        <div className="col-lg-3 col-sm-6">
          <BoldText>
            <label htmlFor="startDate">Start</label>
          </BoldText>
          <input
            id="startDate"
            className="form-control"
            type="date"
            ref={startDateRef}
          />
          <span id="startDateSelected"></span>
        </div>
        <div className="col-lg-3 col-sm-6">
          <BoldText>
            <label htmlFor="endDate">End</label>
          </BoldText>
          <input
            id="endDate"
            className="form-control"
            type="date"
            ref={endDateRef}
          />
          <span id="endDateSelected"></span>
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
