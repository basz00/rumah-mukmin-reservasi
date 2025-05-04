import Input from "./Input";

type Props = {
  hasError?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const DatePicker = ({ hasError, ...rest }: Props) => {
  return (
    <Input
      type="date"
      onFocus={(e) => e.target.showPicker && e.target.showPicker()}
      onClick={(e) => {
        if (e.target instanceof HTMLInputElement && e.target.showPicker) {
          e.target.showPicker();
        }
      }}
      {...rest}
      hasError={hasError}
    />
  );
};

export default DatePicker;
