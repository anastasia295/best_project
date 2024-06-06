import styled from "styled-components";

export const Input = styled.input<InputProps>`
  outline: none;
  border: 1px solid #2c2c2c;
  font-size: 14px;
  ${({ br }) => br && `border-radius: ${br}`};
  ${({ height }) => height && `height: ${height}`};
  ${({ color }) => color && `color: ${color}`};
  ${({ padding }) => padding && `padding: ${padding}`};
  ${({ bc }) => bc && `background-color: ${bc}`};
  ${({ border }) => border && `border: ${border}`};
  ${({ width }) => width && `width: ${width}`};
  ${({ withBorder }) =>
    withBorder &&
    `&:focus {
border: 1px solid #abcdef;
}
`}
`;

export interface InputProps {
  placeholder?: string;
  width?: string;
  height?: string;
  padding?: string;
  br?: string;
  bc?: string;
  border?: string;
  color?: string;
  defaultValue?: string;
  withBorder?: boolean;
}
