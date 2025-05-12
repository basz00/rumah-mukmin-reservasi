import Field from "./Field";

type FormProps = {
  formId: string;
  formLabel: string;
};

type Props = {
  formProps: FormProps[];
  label?: string;
  hint?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const CheckboxGroup = ({
  formProps,
  label,
  hint,
  error,
  required,
  ...rest
}: Props) => {
  const renderRadios = () => {
    return formProps.map(({ formId, formLabel }) => (
      <label
        key={formId}
        className="text-[14px] text-gray-700 flex items-center"
      >
        <input value={formId} type="checkbox" className="mr-2" {...rest} />
        {formLabel}
      </label>
    ));
  };

  return (
    <Field label={label} hint={hint} error={error} required={required}>
      <div className="flex flex-wrap gap-2">{renderRadios()}</div>
    </Field>
  );
};

export default CheckboxGroup;
