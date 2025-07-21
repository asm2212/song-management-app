import React from 'react';
import { PaginationWrapper, PageButton } from './styles';

const Pagination = ({ currentPage, totalCount, pageSize, onPageChange }) => {
  const safeTotalCount = Number(totalCount) || 0;
  const safePageSize = Number(pageSize) || 1;

  const totalPages = Math.ceil(safeTotalCount / safePageSize);

  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <PaginationWrapper>
      {pages.map((page) => (
        <PageButton
          key={page}
          onClick={() => onPageChange(page)}
          active={currentPage === page}
        >
          {page}
        </PageButton>
      ))}
    </PaginationWrapper>
  );
};

export default Pagination;
