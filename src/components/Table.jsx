import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TableWrapper = styled.div`
  //margin: 20px;
  font-family: Arial, sans-serif;
  //width: 1200px;
  width: 100%;
  overflow-x: auto;
  background-color: #fff;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  tbody tr:nth-child(odd) {
    background-color: #f2f2f2;
  }
`;

const Th = styled.th`
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
  min-width: 150px;
`;

const Td = styled.td`
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
  min-width: 150px;
`;

const Pagination = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const PaginationButton = styled.span`
  margin: 0 5px;
  cursor: pointer;
`;

const itemsPerPage = 7;

function TableComponent({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [displayData, setDisplayData] = useState([]);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToDisplay = data.slice(startIndex, endIndex);
    setDisplayData(itemsToDisplay);
  }, [data, currentPage]);

  const renderTable = () => (
    <Table>
      <thead>
        <tr>
          <Th>Full Name</Th>
          <Th>Status</Th>
          <Th>Sex</Th>
          <Th>Grades</Th>
          <Th>ID</Th>
          <Th>Email</Th>
          <Th>Phone Number</Th>
          <Th>Address</Th>
          <Th>Birth Date</Th>
        </tr>
      </thead>
      <tbody>
        {displayData.map((item, index) => (
          <tr key={index}>
            <Td>{item["full-name"]}</Td>
            <Td>{item["status"]}</Td>
            <Td>{item["sex"]}</Td>
            <Td>{item["grades"]}</Td>
            <Td>{item["id"]}</Td>
            <Td>{item["email"]}</Td>
            <Td>{item["phone-number"]}</Td>
            <Td>{item["address"]}</Td>
            <Td>{item["birth-date"]}</Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );

  const renderPagination = () => (
    <Pagination>
      {Array.from({ length: totalPages }, (_, i) => (
        <PaginationButton
          key={i}
          onClick={() => setCurrentPage(i + 1)}
          style={{ fontWeight: currentPage === i + 1 ? "bold" : "normal" }}
        >
          {i + 1}
        </PaginationButton>
      ))}
    </Pagination>
  );

  return (
    <TableWrapper>
      {renderTable()}
      {renderPagination()}
    </TableWrapper>
  );
}

export default TableComponent;
