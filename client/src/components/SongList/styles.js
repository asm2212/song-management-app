import styled from '@emotion/styled';

export const ListContainer = styled.div`
  margin: 2rem auto;
  max-width: 900px;
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1.5rem;
`;

export const Th = styled.th`
  text-align: left;
  padding: 0.75rem;
  background-color: #f3f4f6;
  font-weight: 600;
  font-size: 0.95rem;
  border-bottom: 2px solid #e2e8f0;
`;

export const Td = styled.td`
  padding: 0.75rem;
  font-size: 0.9rem;
  border-bottom: 1px solid #f1f5f9;
`;

export const EditButton = styled.button`
  padding: 0.4rem 0.8rem;
  font-size: 0.85rem;
  background-color: #3b82f6; /* Blue */
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: background 0.2s ease;

  &:hover {
    background-color: #2563eb;
  }
`;

export const DeleteButton = styled.button`
  padding: 0.4rem 0.8rem;
  font-size: 0.85rem;
  background-color: #ef4444; /* Red */
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background-color: #dc2626;
  }
`;

export const SaveButton = styled.button`
  padding: 0.4rem 0.8rem;
  font-size: 0.85rem;
  background-color: #22c55e; /* Green */
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: background 0.2s ease;

  &:hover {
    background-color: #16a34a;
  }
`;

export const CancelButton = styled.button`
  padding: 0.4rem 0.8rem;
  font-size: 0.85rem;
  background-color: #9ca3af; /* Gray */
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background-color: #6b7280;
  }
`;

export const EmptyMessage = styled.div`
  text-align: center;
  color: #64748b;
  padding: 1rem 0;
  font-style: italic;
`;

export const Input = styled.input`
  padding: 0.5rem 0.75rem;
  font-size: 0.9rem;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  }
`;
