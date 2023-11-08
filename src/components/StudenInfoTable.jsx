import React, { useState } from "react";
import styled from "styled-components";

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  margin-top: 30px;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableRow = styled.tr``;
const TableHeader = styled.th``;
const TableCell = styled.td``;

const Pagination = styled.div`
  display: flex;
  margin: 20px 0;
`;

const PageLink = styled.a`
  cursor: pointer;
  margin-right: 10px;
`;

function StudentTable({ data, filters, setFilters }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(7);

  const filteredData = data.filter((student) => {
    return (
      filters.status.includes(student.status) &&
      filters.sex.includes(student.sex)
    );
  });

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  const handleFilterChange = (filterType, filterValue) => {
    setFilters({
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
    <TableContainer>
      <h1>Student Data</h1>

      <Table>
        <thead>
          <TableRow>
            <TableHeader>Full Name</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Sex</TableHeader>
            <TableHeader>Grades</TableHeader>
            <TableHeader>ID</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Phone Number</TableHeader>
            <TableHeader>Address</TableHeader>
            <TableHeader>Birth Date</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {paginatedData.map((student, index) => (
            <TableRow key={index}>
              <TableCell>{student["full-name"]}</TableCell>
              <TableCell>{student.status}</TableCell>
              <TableCell>{student.sex}</TableCell>
              <TableCell>{student.grades}</TableCell>
              <TableCell>{student.id}</TableCell>
              <TableCell>{student.email}</TableCell>
              <TableCell>{student["phone-number"]}</TableCell>
              <TableCell>{student.address}</TableCell>
              <TableCell>{student["birth-date"]}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
      <Pagination>
        {[...Array(totalPages).keys()].map((page) => (
          <PageLink key={page} onClick={() => handlePageChange(page + 1)}>
            {page + 1}
          </PageLink>
        ))}
      </Pagination>
    </TableContainer>
  );
}

export default StudentTable;
