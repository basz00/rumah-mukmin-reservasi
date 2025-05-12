import { DateTime } from "luxon";
import Field from "./Field";
import Input from "./Input";

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
      <div className="flex flex-wrap gap-4">
        <Input
          type="datetime-local"
          onFocus={(e) => e.target.showPicker && e.target.showPicker()}
          onClick={(e) => {
            try {
              if (e.target instanceof HTMLInputElement && e.target.showPicker) {
                e.target.showPicker();
              }
            } catch (e) {
              console.error(e);
            }
          }}
          {...rest}
          min={todayDate}
          hasError={hasError}
        />
      </div>
    </Field>
  );
};

export default DateTimeField;
