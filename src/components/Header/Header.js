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

export const Header = ({ handleLogOut }) => {
  const [data, setData] = useState({
    avatar: "",
    fullName: "",
  });
  const { myAccount, loading, loggedIn } = useSession();

  useEffect(() => {
    if (!loading && loggedIn) {
      const { avatar, first_name, last_name } = myAccount;
      setData({
        avatar: avatar,
        fullName: `${first_name} ${last_name}`,
      });
    }
  }, [loading, myAccount, loggedIn]);

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
          <FontAwesomeIcon
            icon={faSignOutAlt}
            size="lg"
            onClick={handleLogOut}
          />
        </Account>
      </Wrapper>
    </Container>
  );
};
