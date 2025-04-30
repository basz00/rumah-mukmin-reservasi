import styled from "styled-components";

const RadioLabel = styled.label`
  font-size: 14px;
  color: #333;
  display: flex;
  align-items: center;
`;

const RadioInput = styled.input`
  margin-right: 8px;
`;

type Props = {
  id: string;
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Radio = ({ id, label, ...rest }: Props) => {
  return (
    <RadioLabel>
      <RadioInput type="radio" value={id} {...rest} />
      {label}
    </RadioLabel>
  );
};

export default Radio;
