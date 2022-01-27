import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 10;
  height: 50px;
  padding: 10px;
  box-sizing: border-box;
  background-color: #fff;
`;

const StyledLogoA = styled.a``;

const StyldHeaderBox = styled.div``;

const StyledHeaderLinkA = styled.a`
  display: inline-flex;

  & + & {
    margin-left: 5px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyldHeaderBox>
        <StyledHeaderLinkA href="#">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" role="img"><path d="M17 6V6.30798C19.8915 7.22232 22 10.0683 22 13.4375V19.2812L24 23L20 23M13 6V6.30798C10.2345 7.18246 8.18531 9.82384 8.01191 13V13.5M8 15V19.2812L6 23L18.0039 23C18.0039 24.6569 16.6607 26 15.0039 26C13.347 26 12.0039 24.6569 12.0039 23M13 6C13 4.89543 13.8954 4 15 4C16.1046 4 17 4.89543 17 6" stroke="black"></path></svg>
        </StyledHeaderLinkA>
      </StyldHeaderBox>
      <StyledLogoA href="#">로고</StyledLogoA>
      <StyldHeaderBox>
        <StyledHeaderLinkA href="#">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" role="img"><path d="M19.7959 19.7959L25 25M20.3061 12.6531C20.3061 16.8797 16.8797 20.3061 12.6531 20.3061C8.42639 20.3061 5 16.8797 5 12.6531C5 8.42639 8.42639 5 12.6531 5C16.8797 5 20.3061 8.42639 20.3061 12.6531Z" stroke="black"></path></svg>
        </StyledHeaderLinkA>
        <StyledHeaderLinkA href="#">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" role="img"><path d="M6.5 20.5V7.5H23.5V26H11.5M6.5 22V26H10M10.5 10V8.43881C10.5 5.71118 12.5147 3.5 15 3.5C17.4853 3.5 19.5 5.71118 19.5 8.43881V10" stroke="black"></path></svg>
        </StyledHeaderLinkA>
      </StyldHeaderBox>
    </StyledHeader>
  );
};

export default Header;