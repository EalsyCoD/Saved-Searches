import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: -25px 658px;
  @media (max-width: 1024px) {
    width: 7em;
  }
  @media (max-width: 768px) {
    width: 5em;
  }
`;

export const TextLabel = styled.p`
  font-weight: 600;
  padding-right: 9px;
  font-size: 16px;
  letter-spacing: 0.6px;
  text-align: right;
  color: #999999;
`;

export const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 26px;
`;

export const Span = styled.span`
  & {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0px;
    right: -50px;
    bottom: 0;
    border-radius: 20px;
    background: #c5c5c5;
    transition: 1s;
  }
  &:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 3px;
    bottom: 3px;
    border-radius: 50%;
    background: white;
    transition: 0.4s;
  }
`;

export const Input = styled.input`
 & {
        opacity: 0;
        width: 0;
        height: 0;
 &:checked{
      &:checked + ${Span}:before{
        transform: translateX(22px);
      }
      &:checked + ${Span} {
        background-color: #89CFF0;
      } 
`;
