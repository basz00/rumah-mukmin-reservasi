import React from "react";
import Field from "../Field";
import Radio from "./Radio";
import styled from "styled-components";

const RadioContainer = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: column;
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
      return <Radio id={formId} label={formLabel} {...rest} />;
    });
  };

  return (
    <Field label={label} hint={hint} error={error} required={required}>
      <RadioContainer>{renderRadios()}</RadioContainer>
    </Field>
  );
};

export default RadioGroup;
