import { useMemo, useState } from "react";
import { Arrows, PaginationContainer, PaginationNumbers } from "./styles";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  onChange(page: number): void;
  page: number;
  totalPages: number;
}

export function Pagination(props: PaginationProps) {
  if (props.totalPages === 1) return null;

  function handleNextPaginationNumbers() {
    props.onChange(props.page + 1);
  }

  function handlePrevPaginationNumbers() {
    props.onChange(props.page - 1);
  }

  return (
    <PaginationContainer>
      <Arrows>
        <button
          className="prev"
          disabled={props.page === 1}
          onClick={handlePrevPaginationNumbers}
        >
          <ChevronLeft size={18} />
        </button>
        <button
          className="next"
          disabled={props.page === props.totalPages}
          onClick={handleNextPaginationNumbers}
        >
          <ChevronRight size={18} />
        </button>
      </Arrows>
    </PaginationContainer>
  );
}
