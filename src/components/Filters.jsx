import styled from "styled-components";
import chevron from "../assets/images/chevron-right.png";

const Filter = ({ filters, setFilters }) => {
  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  function updateFilters(filters, value, event) {
    const { checked } = event.target;
    return checked
      ? [...filters, value]
      : filters.filter((filter) => filter !== value);
  }

  return (
    <>
      <FilterContainer>
        <ActivBox>
          <FilterName>
            <ChevronIcon src={chevron} alt="arrow" /> სტუდენტის სახელი
          </FilterName>
          <FilterBox>
            <FilterInput
              type="checkbox"
              id="active"
              name="active"
              value="ACTIVE"
              checked={filters.status.includes("ACTIVE")}
              onChange={(e) =>
                handleFilterChange(
                  "status",
                  updateFilters(filters.status, "ACTIVE", e)
                )
              }
            />
            <FilterLabel htmlFor="active">ACTIVE</FilterLabel>
          </FilterBox>

          <FilterBox>
            <FilterInput
              type="checkbox"
              id="inactive"
              name="inactive"
              value="INACTIVE"
              checked={filters.status.includes("INACTIVE")}
              onChange={(e) =>
                handleFilterChange(
                  "status",
                  updateFilters(filters.status, "INACTIVE", e)
                )
              }
            />
            <FilterLabel htmlFor="inactive">INACTIVE</FilterLabel>
          </FilterBox>

          <FilterName>
            <ChevronIcon src={chevron} alt="arrow" /> სქესი
          </FilterName>
        </ActivBox>

        <FilterBox>
          <FilterInput
            type="checkbox"
            id="male"
            name="male"
            value="MALE"
            checked={filters.sex.includes("MALE")}
            onChange={(e) =>
              handleFilterChange("sex", updateFilters(filters.sex, "MALE", e))
            }
          />
          <FilterLabel htmlFor="male">MALE</FilterLabel>
        </FilterBox>

        <FilterBox>
          <FilterInput
            type="checkbox"
            id="female"
            name="female"
            value="FEMALE"
            checked={filters.sex.includes("FEMALE")}
            onChange={(e) =>
              handleFilterChange("sex", updateFilters(filters.sex, "FEMALE", e))
            }
          />
          <FilterLabel htmlFor="female">FEMALE</FilterLabel>
        </FilterBox>
        <div
          style={{
            height: "1px",
            backgroundColor: "#F2F2F2",
            marginTop: "20px",
          }}
        ></div>
      </FilterContainer>
    </>
  );
};

export default Filter;

const FilterContainer = styled.div`
  background-color: #fff;
  position: absolute;
  left: -315px;
  top: 21px;
  width: 297px;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 43px;
  padding-bottom: 18px;
  border-radius: 10px;
`;
const ActivBox = styled.div``;

const FilterBox = styled.div`
  padding-left: 23px;
`;

const ChevronIcon = styled.img`
  margin-right: 5px;
`;

const FilterName = styled.h3`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const FilterLabel = styled.label``;

const FilterInput = styled.input`
  margin-right: 15px;
`;
