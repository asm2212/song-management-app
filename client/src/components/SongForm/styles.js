import styled from '@emotion/styled';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background: #f9f9f9;
  border-radius: 12px;
  max-width: 400px;
  margin: 2rem auto;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-weight: 500;
  margin-bottom: 0.25rem;
`;

export const Input = styled.input`
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: border 0.2s;

  &:focus {
    border-color: #0077ff;
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 0.75rem 1rem;
  font-size: 1rem;
  background-color: #0077ff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #005fd1;
  }
`;
