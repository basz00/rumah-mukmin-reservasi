import styled from "styled-components";

const Input = styled.input<{ hasError?: boolean }>`
  background-color: white;
  border: 1px solid ${({ hasError }) => (hasError ? "#ff4d4f" : "#d9d9d9")};
  border-radius: 5px;
  line-height: 1.5715;
  padding: 6.5px 11px;

  &:hover,
  &:focus {
    border-color: ${({ hasError }) => (hasError ? "#ff4d4f" : "#49bf1f")};
    outline: none;
  }
`;

export default Input;
