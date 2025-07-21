import styled from '@emotion/styled';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => theme.spacing(2)};
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default Button;