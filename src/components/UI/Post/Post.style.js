import styled from "styled-components";
import { colors } from "../../../const/const";

export const Container = styled.div`
  background-color: #fafafa;
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const Header = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid #eaeaea;
  margin-bottom: 10px;
`;

export const Author = styled.p`
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 600;
  color: #2b2922;
`;

export const Content = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid #eaeaea;
  margin-bottom: 10px;
  & > * {
    margin-bottom: 1rem;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  border-radius: 5px;
`;

export const Footer = styled.div``;

export const Actions = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.div`
  flex: 1;
  text-align: center;
  padding: 7px 0;
  background-color: ${({ liked }) => (liked ? colors.red.primary : "#fafafa")};
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #f3f3f3;
  }
`;

export const Comments = styled.div`
  max-height: ${({ open }) => (open ? "2000px" : 0)};
  overflow: hidden;
  transition: max-height 0.6s;
`;

export const Comment = styled.div``;
