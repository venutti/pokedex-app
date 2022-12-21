import React from "react";
import Pagination from "react-bootstrap/Pagination";

export default function PaginationContent() {
  return (
    <div className="paginationContent">
      <Pagination>
        <Pagination.Prev />
        <Pagination.Item disabled>1-10</Pagination.Item>
        <Pagination.Next />
      </Pagination>
    </div>
  );
}
