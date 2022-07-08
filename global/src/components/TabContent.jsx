import React from "react";
import styled from "styled-components";
import tableData from "../data/tableContent.json";

const TabContent = ({ activeType }) => {
  return tableData.data.map(({ type, tableFix, tableScroll }, index) => {
    return (
      <StyledTabContent key={index} isActive={type === activeType}>
        <StyledTableFix>
          {tableFix.colGroup && (
            <colgroup>
              {Array.from({ length: tableFix.colGroup.colLength }, (_, i) => (
                <col key={i} style={{ width: tableFix.colGroup.colWidth }} />
              ))}
            </colgroup>
          )}
          <tbody>
            {tableFix.tbody.map(({ name, colSpan }, index) => (
              <tr key={index}>
                <th scope="row" colSpan={colSpan > 1 ? colSpan : null}>
                  {name}
                </th>
              </tr>
            ))}
          </tbody>
        </StyledTableFix>
        <StyledTableScrollWrap>
          <StyledTableScroll>
            <colgroup>
              {Array.from(
                { length: tableScroll.colGroup.colLength },
                (_, i) => (
                  <col
                    key={i}
                    style={{ width: tableScroll.colGroup.colWidth }}
                  />
                )
              )}
            </colgroup>
            <tbody>
              {tableScroll.tbody.map((item, index) => (
                <tr key={index}>
                  {item.map(({ name, colSpan }, index) => (
                    <td key={index} colSpan={colSpan > 1 ? colSpan : null}>
                      {name}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </StyledTableScroll>
        </StyledTableScrollWrap>
      </StyledTabContent>
    );
  });
};

export default TabContent;

const StyledTabContent = styled.div`
  display: ${({ isActive }) => (isActive ? "block" : "none")};
  position: relative;
  margin-top: 30px;
`;

const CommonTable = styled.table`
  th {
    height: 50px;
    padding-top: 1px;
    background: #f5f5f5;
    border: 1px solid #eee;
    box-sizing: border-box;
    vertical-align: middle;
    color: #000;
    font-weight: normal;
    font-size: 12px;
  }

  td {
    height: 50px;
    border: 1px solid #eee;
    box-sizing: border-box;
    vertical-align: middle;
    text-align: center;
    color: #777;
    font-size: 14px;
    line-height: 1.5;
  }
`;

const StyledTableFix = styled(CommonTable)`
  position: absolute;
  top: 0;
  left: 0;

  th {
    min-width: 70px;
    height: 50px;
    background: #f5f5f5;
    border: 1px solid #eee;
    font-size: 14px;
    line-height: 1.5;
  }
`;

const StyledTableScroll = styled(CommonTable)`
  width: 100%;
  min-width: 576px;
`;

const StyledTableScrollWrap = styled.div`
  overflow: hidden;
  overflow-x: auto;
  padding-right: 15px;
  margin-left: 70px;
  box-sizing: border-box;
`;
