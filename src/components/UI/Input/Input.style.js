import styled from "styled-components";
import { colors } from "../../../const/const";

export const Container = styled.div`
  margin-bottom: 2rem;
`;

export const Label = styled.label`
  font-size: 1.6rem;
  line-height: 2.4rem;
  display: block;
  margin-bottom: 5px;
  color: ${colors.text.primary};
  font-weight: 400;
  padding-left: 2.4rem;
`;

export const InputElement = styled.input`
  display: block;
  width: 100%;
  border: 1px solid ${colors.text.secondary};
  background-color: ${colors.white};
  font-size: 1.6rem;
  line-height: 2.4rem;
  padding: 7px 2.4rem;
  border-radius: 2rem;
  color: ${colors.text.primary};
  font-weight: 400;
  margin-bottom: 5px;
`;

export const Error = styled.span`
  display: block;
  width: 100%;
  color: ${colors.red.primary};
  font-size: 1.4rem;
  line-height: 2.2rem;
  padding-left: 2.4rem;
`;
