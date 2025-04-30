import styled from "styled-components";
import Checkbox from "./Checkbox";
import Field from "../Field";

const RadioContainer = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

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
      <Checkbox id={formId} label={formLabel} {...rest} />
    ));
  };

  return (
    <Field label={label} hint={hint} error={error} required={required}>
      <RadioContainer>{renderRadios()}</RadioContainer>
    </Field>
  );
};

export default CheckboxGroup;
