import styled from "styled-components";
import Field from "./Field";
import Input from "./Input";

const Container = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
`;
type Props = {
  label?: string;
  hint?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const TextInputField = ({ label, hint, error, required, ...rest }: Props) => {
  const hasError = !!error;

  return (
    <Field label={label} hint={hint} error={error} required={required}>
      <Container>
        <Input hasError={hasError} {...rest} />
      </Container>
    </Field>
  );
};

export default TextInputField;
