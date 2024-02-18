'use client';

import { FC } from 'react';
import classes from './Pagination.module.css';
import ResponsivePagination from 'react-responsive-pagination';

interface Props {
  length: number;
  page: number;
  setPage: (page: number) => void;
}

const Pagination: FC<Props> = ({ length, page, setPage }) => {
  function handlePageChange(page: number) {
    setPage(page);
  }
  return (
    <ResponsivePagination
      className={classes.pagination}
      pageItemClassName={classes.item}
      activeItemClassName={classes.active}
      disabledItemClassName={classes.disabled}
      total={length}
      current={page}
      onPageChange={handlePageChange}
    />
  );
};

export default Pagination;
