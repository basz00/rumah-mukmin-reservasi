import styled from "styled-components";

const CheckboxLabel = styled.label`
  font-size: 14px;
  color: #333;
  display: flex;
  align-items: center;
`;

const CheckboxInput = styled.input`
  margin-right: 8px;
`;

type Props = {
  id: string;
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Radio = ({ id, label, ...rest }: Props) => {
  return (
    <CheckboxLabel key={id}>
      <CheckboxInput type="checkbox" value={id} {...rest} />
      {label}
    </CheckboxLabel>
  );
};

export default Radio;
