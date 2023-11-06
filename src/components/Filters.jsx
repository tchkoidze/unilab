import styled from "styled-components";
import chevron from "../assets/images/chevron-right.png";

const Filter = () => {
  return (
    <>
      <FilterContainer>
        <ActivBox>
          <FilterName>
            <ChevronIcon src={chevron} /> სტუდენტის სახელი
          </FilterName>
          <FilterBox>
            <FilterInput type="checkbox" id="active" name="active" />
            <FilterLabel htmlFor="active">ACTIVE</FilterLabel>
          </FilterBox>

          <FilterBox>
            <FilterInput type="checkbox" id="inactive" name="inactive" />
            <FilterLabel htmlFor="inactive">INACTIVE</FilterLabel>
          </FilterBox>

          <FilterName>
            <ChevronIcon src={chevron} /> სქესი
          </FilterName>
        </ActivBox>

        <FilterBox>
          <FilterInput type="checkbox" id="active" name="active" />
          <FilterLabel htmlFor="active">MALE</FilterLabel>
        </FilterBox>

        <FilterBox>
          <FilterInput type="checkbox" id="inactive" name="inactive" />
          <FilterLabel htmlFor="inactive">FEMALE</FilterLabel>
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
  left: -188px;
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

const FilterName = styled.h3``;

const FilterLabel = styled.label``;

const FilterInput = styled.input`
  margin-right: 15px;
`;
