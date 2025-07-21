import styled from '@emotion/styled';

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin: 2rem 0;
  flex-wrap: wrap;
`;

export const PageButton = styled.button`
  background: ${({ active, theme }) => (active ? theme?.colors?.primary || '#2563eb' : '#fff')};
  color: ${({ active }) => (active ? '#fff' : '#111827')};
  border: 1px solid #d1d5db;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ active }) => (active ? '#1d4ed8' : '#f3f4f6')};
  }

  &:focus {
    outline: 2px solid #60a5fa;
    outline-offset: 2px;
  }
`;
