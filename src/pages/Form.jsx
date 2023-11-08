import styled from "styled-components";
import filterimg from "../assets/images/filter-svg.png";
import searchimg from "../assets/images/search.png";
import data from "../assets/student.json";
import TableComponent from "../components/Table";
import Filter from "../components/Filters";
import { useState } from "react";

const jsonData = data;

const FormPage = () => {
  const [filter, setFilter] = useState(false);
  const [activ, setActive] = useState();
  const [inactive, setInactive] = useState();
  const [male, setMale] = useState();
  const [female, setFemale] = useState();

  const [filters, setFilters] = useState({
    status: ["ACTIVE", "INACTIVE"],
    sex: ["MALE", "FEMALE"],
  });

  return (
    <Main>
      <Box1>
        <FilterBtn
          onClick={() => {
            setFilter(!filter);
          }}
        >
          <FilterImg src={filterimg} alt="icon" />
          <div
            style={{
              width: "1px",
              height: "30px",
              backgroundColor: "#F2F2F2",
              marginLeft: "8px",
              marginRight: "27px",
            }}
          ></div>
          <SpanFilter>filter</SpanFilter>
        </FilterBtn>
        <Searchbox>
          <FilterImg src={searchimg} alt="icon" />
          <SearchInput />
        </Searchbox>
      </Box1>
      <StudentInfoBox>
        <div style={{ position: "relative" }}>
          <TableComponent
            data={jsonData}
            filters={filters}
            setfilters={setFilters}
          />
          {filter ? <Filter filters={filters} setFilters={setFilters} /> : null}
        </div>
        ;
      </StudentInfoBox>
    </Main>
  );
};

export default FormPage;

const Main = styled.main``;

const Box1 = styled.div`
  display: flex;
  justify-content: center;
  gap: 768px;
  margin: 25px 0;
`;

const FilterBtn = styled.button`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 6px 10px;
  border: none;
`;

const FilterImg = styled.img`
  //display: block;
`;
const SpanFilter = styled.span`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 132.99%;
  margin-right: 60px;
  font-family: Montserrat, sans-serif;
`;

const Searchbox = styled.div`
  display: flex;
  align-items: center;
  width: 263px;
  background-color: #fff;
  padding-left: 16px;
  border-radius: 8px;
`;

const SearchInput = styled.input`
  outline: none;
  border: none;
`;

//students info container

const StudentInfoBox = styled.div`
  display: flex;
  justify-content: center;
`;
