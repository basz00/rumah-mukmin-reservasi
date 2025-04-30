import styled from "styled-components";
import Label from "./Label";

const LabelContainer = styled.div`
  width: auto;
  display: flex;
  padding: 0 0 8px;
  gap: 4px;
`;

const RedLabel = styled(Label)`
  color: #ff4d4f;
`;

type Props = {
  label: string;
};

const RequiredLabel = ({ label }: Props) => {
  return (
    <LabelContainer>
      <RedLabel>*</RedLabel>
      <Label>{label}</Label>
    </LabelContainer>
  );
};

export default RequiredLabel;
