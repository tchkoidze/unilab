import React, { useState, useEffect } from "react";
import styled from "styled-components";
import leftArrows from "../assets/images/chevrons-left.png";
import rightArrows from "../assets/images/chevrons-right.png";
import leftArrow from "../assets/images/chevron-left.png";
import rightArrow from "../assets/images/chevronright.png";

const TableWrapper = styled.div`
  font-family: Arial, sans-serif;
  font-family: Montserrat, sans-serif;
`;

const TableContainer = styled.div`
  width: 1200px;
  overflow-x: scroll;
  background-color: #fff;
  border-radius: 8px;
  &::-webkit-slider-thumb {
    background: red;
    border-radius: 10px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  tbody tr:nth-child(odd) {
    background-color: #f2f2f2;
  }
`;

const Th = styled.th`
  min-width: 250px;
  height: 75px;
  border-bottom: 1px solid #315c8e;
  padding: 0 35px;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 132.99%;
  text-transform: uppercase;
`;

const Td = styled.td`
  padding: 8px;
  text-align: center;
  min-width: 180px;
`;

const Pagination = styled.div`
  text-align: center;
  margin-top: 69px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PaginationButton = styled.span`
  margin: 0 5px;
  cursor: pointer;
`;

const PaginationArrowBtns = styled.div``;

const PaginationArrow = styled.img``;

function TableComponent({ data, filters, setfilters }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(7);

  const filteredData = data.filter((item) => {
    const { status, sex } = item;
    return filters.status.includes(status) && filters.sex.includes(sex);
  });

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  const handleFilterChange = (filterType, filterValue) => {
    setfilters({
      ...filters,
      [filterType]: filters[filterType].includes(filterValue)
        ? filters[filterType].filter((value) => value !== filterValue)
        : [...filters[filterType], filterValue],
    });
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <TableWrapper>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <Th>სტუდენტის სახელი და გვარი</Th>
              <Th>სტატუსი</Th>
              <Th>სქესი</Th>
              <Th>ქულები</Th>
              <Th>პირადი ნომერი</Th>
              <Th>ელფოსტა</Th>
              <Th>ტელეფონი</Th>
              <Th>მისამართი</Th>
              <Th>დაბადების თარიღი</Th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, index) => (
              <tr key={index} style={{ height: "75px" }}>
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
      </TableContainer>

      <Pagination>
        <PaginationArrowBtns
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <PaginationArrow src={leftArrows} alt="arrow" />
          <PaginationArrow src={leftArrow} alt="arrow" />
        </PaginationArrowBtns>

        {[...Array(totalPages).keys()].map((page) => (
          <PaginationButton
            key={page}
            onClick={() => handlePageChange(page + 1)}
            style={{
              fontWeight: currentPage === page + 1 ? "bold" : "normal",
              textDecoration: currentPage === page + 1 ? "underline" : "none",
            }}
          >
            {page + 1}
          </PaginationButton>
        ))}
        <PaginationArrowBtns
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <PaginationArrow src={rightArrow} alt="arrow" />
          <PaginationArrow src={rightArrows} alt="arrow" />
        </PaginationArrowBtns>
      </Pagination>
    </TableWrapper>
  );
}

export default TableComponent;
