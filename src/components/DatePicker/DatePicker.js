import { useEffect, useRef, useState } from "react";
import { BoldText } from "../../utils/styleUtils";

const DatePicker = () => {
  const startDateRef = useRef();
  const endDateRef = useRef();

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

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
  }, []);

  return (
    <div class="container  py-2">
      <div class="row justify-content-center">
        <div class="col-lg-3 col-sm-6">
          <BoldText>
            <label for="startDate">Start</label>
          </BoldText>
          <input
            id="startDate"
            class="form-control"
            type="date"
            ref={startDateRef}
          />
          <span id="startDateSelected"></span>
        </div>
        <div class="col-lg-3 col-sm-6">
          <BoldText>
            <label for="endDate">End</label>
          </BoldText>
          <input
            id="endDate"
            class="form-control"
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
