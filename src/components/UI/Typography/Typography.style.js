import styled from "styled-components";
import { colors } from "../../../const/const";

export const H1 = styled.h1`
  font-size: 3.6rem;
  line-height: 1.2;
  font-weight: 600;
  margin-bottom: 6rem;
  color: ${colors.text.primary};
`;

export const H2 = styled.h2`
  font-size: 2.4rem;
  line-height: 1.2;
  font-weight: 600;
  margin-bottom: 4rem;
  color: ${colors.text.primary};
`;

export const P = styled.p`
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 400;
  margin-bottom: 2rem;
  color: ${colors.text.secondary};
`;

export const Typography = () => {
  return null;
};

Typography.H1 = H1;
Typography.H2 = H2;
Typography.P = P;
