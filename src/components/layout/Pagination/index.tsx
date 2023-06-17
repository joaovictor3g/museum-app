import { useMemo, useState } from "react";
import { Arrows, PaginationContainer, PaginationNumbers } from "./styles";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  onChange(page: number): void;
  page: number;
  totalPages: number;
}

export function Pagination(props: PaginationProps) {
  const [pageNumber, setPageNumber] = useState({
    start: 0,
    end: 5,
  });

  const pages = useMemo(
    () => Array.from({ length: props.totalPages }).map((_, i) => i + 1),
    // .slice(pageNumber.start, pageNumber.end),
    [props.totalPages]
  );

  function handleNextPaginationNumbers() {
    props.onChange(props.page + 1);

    if (props.page === pageNumber.end) {
      setPageNumber(({ start, end }) => {
        return {
          start: start + 1,
          end: end + 1,
        };
      });
    }
  }

  function handlePrevPaginationNumbers() {
    props.onChange(props.page - 1);

    if (props.page === pageNumber.start + 1) {
      setPageNumber(({ start, end }) => {
        return {
          start: start - 1,
          end: end - 1,
        };
      });
    }
  }

  function handlePaginate(page: number) {
    props.onChange(page);
  }

  return (
    <PaginationContainer>
      {/* <PaginationNumbers>
        {pages.map((page) => (
          <button
            key={page}
            className="page-number"
            data-active={page === props.page}
            onClick={() => handlePaginate(page)}
            style={{
              transform:
                pageNumber.end === props.page && pageNumber.end >= page
                  ? "translateX(-34px)"
                  : "translateX(0)",
            }}
          >
            {page}
          </button>
        ))}
      </PaginationNumbers> */}
      <Arrows>
        <button
          className="prev"
          disabled={pageNumber.start === 0 && props.page === 1}
          onClick={handlePrevPaginationNumbers}
        >
          <ChevronLeft size={18} />
        </button>
        <button className="next" onClick={handleNextPaginationNumbers}>
          <ChevronRight size={18} />
        </button>
      </Arrows>
    </PaginationContainer>
  );
}
