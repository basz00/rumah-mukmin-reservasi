import { ReactNode } from "react";
import styled from "styled-components";
import RequiredLabel from "./RequiredLabel";
import Label from "./Label";
import Hint from "./Hint";
import Error from "./Error";

const Container = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
`;

const LabelContainer = styled.div`
  width: auto;
  display: flex;
  gap: 4px;
`;

type Props = {
  label?: string;
  hint?: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
};

const Field = ({ label, hint, required, error, children }: Props) => {
  const renderLabel = () => {
    if (label) {
      if (required) {
        return <RequiredLabel label={label} />;
      }
      return <Label>{label}</Label>;
    }
    return null;
  };

  const renderHint = () => {
    if (hint) {
      return <Hint>{hint}</Hint>;
    }
    return null;
  };

  const renderError = () => {
    if (error) {
      return <Error>{error}</Error>;
    }
    return null;
  };

  return (
    <Container>
      <LabelContainer>{renderLabel()}</LabelContainer>
      {children}
      {renderError()}
      {renderHint()}
    </Container>
  );
};

export default Field;
