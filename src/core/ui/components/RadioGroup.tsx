import React from "react";
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

const RadioGroup = ({
  formProps,
  label,
  hint,
  error,
  required,
  ...rest
}: Props) => {
  const renderRadios = () => {
    return formProps.map((props) => {
      const { formId, formLabel } = props;

      return (
        <label
          key={formId}
          className="text-[14px] text-gray-700 flex items-center"
        >
          <input type="radio" value={formId} className="mr-2" {...rest} />
          {formLabel}
        </label>
      );
    });
  };

  return (
    <Field label={label} hint={hint} error={error} required={required}>
      <div className="flex flex-col gap-1">{renderRadios()}</div>
    </Field>
  );
};

export default RadioGroup;
