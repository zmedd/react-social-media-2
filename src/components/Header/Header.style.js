import styled from "styled-components";
import { colors } from "../../const/const";
import { Link } from "react-router-dom";

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 5px 0;
  background-color: ${colors.black};
  color: ${colors.white};
`;

export const A = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 15px;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`;

export const Navigation = styled.div`
  display: flex;
`;

export const Account = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: block;
  margin-right: 10px;
`;

export const Name = styled.span`
  color: inherit;
  font-size: 14px;
  line-height: 22px;
  font-weight: 600;
`;
