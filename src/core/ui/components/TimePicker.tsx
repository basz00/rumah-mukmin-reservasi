import { Input } from "..";

type Props = {
  hasError?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const TimePicker = ({ hasError, ...rest }: Props) => {
  return (
    <Input
      type="time"
      onFocus={(e) => e.target.showPicker && e.target.showPicker()}
      onClick={(e) => {
        if (e.target instanceof HTMLInputElement && e.target.showPicker) {
          try {
            e.target.showPicker();
          } catch (e) {
            console.log(e);
          }
        }
      }}
      {...rest}
      hasError={hasError}
    />
  );
};

export default TimePicker;
