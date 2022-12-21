import React from "react";
import Pagination from "react-bootstrap/Pagination";
import getInitAndEnd from "../utils/getInitAndEnd";

export default function PaginationContent({ onPrev, onNext, currentPage }) {
  const [init, end] = getInitAndEnd(currentPage);

  return (
    <div className="paginationContent">
      <Pagination>
        <Pagination.Prev disabled={!onPrev} onClick={() => onPrev()} />
        <Pagination.Item disabled>{`${init}-${end}`}</Pagination.Item>
        <Pagination.Next disabled={!onNext} onClick={() => onNext()} />
      </Pagination>
    </div>
  );
}
