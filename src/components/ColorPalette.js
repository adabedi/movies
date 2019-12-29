import React, { useState } from 'react';
import styled from 'styled-components';
import { uid } from 'react-uid';
import ToolTip from './ToolTip';

const Dot = styled.div`
  height: 90px;
  width: 90px;
  border-radius: 50%;
  display: inline-block;
  margin: 10px;
  border: 1px solid #c8ccd4;
`;

const InnerText = styled.div`
  display: table-cell;
  padding: 1em;
  vertical-align: middle;
  color: ${props => props.color}
`;

const InnerTextWrapper = styled.div`
  display: table;
  width: 100%;
  height: 100%;
`;

const Palette = styled.div`
  margin: 0 auto;
`;

const hexToRGB = hex => {
  const is3digits = hex.length === 4;
  const r = is3digits ? `0x${hex[1]}${hex[1]}` : `0x${hex[1]}${hex[2]}`;
  const g = is3digits ? `0x${hex[2]}${hex[3]}` : `0x${hex[3]}${hex[4]}`;
  const b = is3digits ? `0x${hex[1]}${hex[1]}` : `0x${hex[1]}${hex[1]}`;

  return `rgb(${+r},${+g},${+b})`;
}

const detectColorBrightnes = color => {
  color = hexToRGB(color)
  const rgb = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);

  const { pow } = Math;
  const r = pow(rgb[1], 2);
  const g = pow(rgb[2], 2);
  const b = pow(rgb[3], 2);

  // Highly Sensitive Poo
  const hsp = Math.sqrt(
    0.299 * r + 0.587 * g + 0.114 * b
  );

  // Using the HSP value, determine whether the color is light or dark
  return hsp > 127.5 ? '#282c34' : '#fff';
}

export default ({ colors }) => {
  const [currentColor, setCurrentColor] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);

  const tooltipHandler = (color) => {
    setCurrentColor(color)
    setShowTooltip(true);
    const timer = setTimeout(() => {
      setShowTooltip(false)
    }, 600);
    return () => clearTimeout(timer);
  }

  const copyToClipboard = (e, color) => {
    tooltipHandler(color)
    const textField = document.createElement('textarea');
    textField.innerText = color;
    const parentElement = document.getElementById('parent');
    parentElement.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    parentElement.removeChild(textField);
  };

  return (
    <Palette>
      {colors.data && Object.values(colors.data).map(color =>
        <Dot key={uid(color)} backgroundColor={color} style={{ backgroundColor: `${color}` }} onClick={e => copyToClipboard(e, color)}>
          <InnerTextWrapper id='parent'>
            <InnerText color={detectColorBrightnes(color)}>{color}</InnerText>
            {currentColor === color && showTooltip && <ToolTip text='Copied' />}
          </InnerTextWrapper>
        </Dot>
      )}
    </Palette>
  );
}
