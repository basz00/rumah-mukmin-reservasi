import { DateTime } from "luxon";
import styled from "styled-components";
import Field from "./Field";
import Input from "./Input";

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
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const DateTimeField = ({ label, hint, required, error, ...rest }: Props) => {
  const hasError = !!error;
  const todayDate = DateTime.now().toUTC().toFormat("yyyy-MM-dd'T'HH:mm");
  return (
    <Field label={label} hint={hint} error={error} required={required}>
      <DateTimeContainer>
        <Input
          type="datetime-local"
          onFocus={(e) => e.target.showPicker && e.target.showPicker()}
          onClick={(e) => {
            if (e.target instanceof HTMLInputElement && e.target.showPicker) {
              e.target.showPicker();
            }
          }}
          {...rest}
          min={todayDate}
          hasError={hasError}
        />
      </DateTimeContainer>
    </Field>
  );
};

export default DateTimeField;
