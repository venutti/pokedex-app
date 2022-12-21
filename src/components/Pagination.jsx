import React from "react";
import Pagination from "react-bootstrap/Pagination";

export default function PaginationContent({ onPrev, onNext }) {
  return (
    <div className="paginationContent">
      <Pagination>
        <Pagination.Prev disabled={!onPrev} onClick={() => onPrev()} />
        <Pagination.Item disabled>1-10</Pagination.Item>
        <Pagination.Next disabled={!onNext} onClick={() => onNext()} />
      </Pagination>
    </div>
  );
}
