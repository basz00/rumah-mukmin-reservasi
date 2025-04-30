import PhoneInput, { PhoneInputProps } from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Field from "./Field";

type Props = {
  label: string;
  hint: string;
  error?: string;
  required?: boolean;
} & PhoneInputProps;

const PhoneField = ({ label, hint, error, required, ...rest }: Props) => {
  return (
    <Field label={label} hint={hint} error={error} required={required}>
      <PhoneInput
        country={"id"}
        inputStyle={{
          color: "black",
        }}
        buttonStyle={{
          color: "black",
        }}
        {...rest}
      />
    </Field>
  );
};

export default PhoneField;
