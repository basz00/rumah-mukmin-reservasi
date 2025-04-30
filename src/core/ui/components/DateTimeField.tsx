import styled from "styled-components";
import Field from "./Field";
import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";
import { DateTime } from "luxon";

const DateTimeContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
`;

type Props = {
  label?: string;
  hint?: string;
  required?: boolean;
  datePickerProps?: React.InputHTMLAttributes<HTMLInputElement> & {
    error?: string;
  };
  timePickerProps?: React.InputHTMLAttributes<HTMLInputElement> & {
    error?: string;
  };
};

const DateTimeField = ({
  label,
  hint,
  required,
  datePickerProps,
  timePickerProps,
}: Props) => {
  const error = datePickerProps?.error || timePickerProps?.error;
  const isDateError = datePickerProps?.error !== undefined;
  const isTimeError = timePickerProps?.error !== undefined;
  const todayDate = DateTime.now().toFormat("yyyy-MM-dd");

  return (
    <Field label={label} hint={hint} error={error} required={required}>
      <DateTimeContainer>
        <DatePicker
          hasError={isDateError}
          {...datePickerProps}
          min={todayDate}
        />
        <TimePicker hasError={isTimeError} {...timePickerProps} />
      </DateTimeContainer>
    </Field>
  );
};

export default DateTimeField;
