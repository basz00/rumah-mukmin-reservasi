import Field from "./Field";
import Input from "./Input";

type Props = {
  label?: string;
  hint?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const TextInputField = ({ label, hint, error, required, ...rest }: Props) => {
  const hasError = !!error;

  return (
    <Field label={label} hint={hint} error={error} required={required}>
      <div className="w-auto flex flex-col">
        <Input hasError={hasError} {...rest} />
      </div>
    </Field>
  );
};

export default TextInputField;
