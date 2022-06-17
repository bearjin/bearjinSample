import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../style/variables";
import { IcSearch, IcSearchClose } from "./common/icon";

const SearchBar = () => {
  const [typing, setTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <StyledWrap>
      <StyledSearch>
        <StyledSearchButton type="button">
          <IcSearch />
        </StyledSearchButton>
        <StyledInput
          type="text"
          placeholder={"검색어를 입력해 주세요."}
          onChange={(e) => {
            setInputValue(e.target.value);
            inputValue === "" ? setTyping(false) : setTyping(true);
          }}
          value={inputValue}
        />
        {typing && (
          <StyledDeleteButton
            type="button"
            onClick={() => {
              setInputValue("");
              inputValue === "" ? setTyping(false) : setTyping(true);
            }}
          >
            <IcSearchClose />
          </StyledDeleteButton>
        )}
      </StyledSearch>
    </StyledWrap>
  );
};

const StyledWrap = styled.section`
  padding: 30px 15px;
`;

const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  height: 38px;
  border-radius: 4px;
  background-color: ${colors.gray100};
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  height: 100%;
`;

const StyledSearchButton = styled(StyledButton)`
  padding: 0 5px;
`;

const StyledDeleteButton = styled(StyledButton)`
  padding: 0 10px;
`;

const StyledInput = styled.input`
  flex: 1;
  height: 100%;
  padding: 0 8px;
  border: 0;
  background-color: transparent;
`;

export default SearchBar;
