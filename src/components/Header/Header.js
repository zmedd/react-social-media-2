import React, { useState, useEffect } from "react";
import {
  Container,
  A,
  Wrapper,
  Navigation,
  Account,
  ProfileImg,
  Name,
} from "./Header.style";
import { useSession } from "../../hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  const [data, setData] = useState({
    avatar: "",
    fullName: "",
  });
  const { myAccount, loading } = useSession();

  useEffect(() => {
    !loading &&
      setData({
        avatar: myAccount.avatar,
        fullName: `${myAccount.first_name} ${myAccount.last_name}`,
      });
  }, [loading]);

  return (
    <Container>
      <Wrapper>
        <Navigation>
          <A to="/">
            <FontAwesomeIcon icon={faCoffee} size="lg" />
          </A>
        </Navigation>
        <Account>
          <A to="/">
            <ProfileImg src={data.avatar} />
            <Name>{data.fullName}</Name>
          </A>
          <FontAwesomeIcon icon={faSignOutAlt} size="lg" />
        </Account>
      </Wrapper>
    </Container>
  );
};
