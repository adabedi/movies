import React from 'react';
import styled from 'styled-components';

const ToolTipWrapper = styled.div`
  margin-left: -50px;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-style: normal;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.42857143;
  text-align: left;
  text-align: start;
  text-shadow: none;
  text-transform: none;
  white-space: normal;
  word-break: normal;
  word-spacing: normal;
  word-wrap: normal;
  font-size: 12px;
  display: inline-block;
`;

const ToolTipArrow = styled.div`
  top: 50%;
  left: 0;
  margin-top: -5px;
  border-width: 5px 5px 5px 0;
  border-right-color: #000;
`;

const ToolTipBody = styled.div`
max-width: 200px;
padding: 3px 8px;
color: #000;
text-align: center;
background-color: #fff;
border-radius: 4px;
border: 1px solid #c8ccd4;
`;

export default ({text}) => 
    <ToolTipWrapper>
        <ToolTipArrow />
        <ToolTipBody>{text}</ToolTipBody>
    </ToolTipWrapper>;
