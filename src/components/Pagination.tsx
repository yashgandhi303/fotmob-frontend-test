import React from 'react';
import { PaginationContainer } from './styles/Pagination.styles';
import { Button } from './Button';

interface PaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <PaginationContainer>
      <Button variant="secondary" onClick={handlePrevious} disabled={currentPage === 1}>
        Previous
      </Button>
      <span>Page {currentPage}</span>
      <Button variant="secondary" onClick={handleNext} disabled={false}>
        Next
      </Button>
    </PaginationContainer>
  );
};
