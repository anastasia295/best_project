import { Area } from "../../ui/Area";
import { Flex } from "../../ui/Flex";
import { Text } from "../../ui/Text";
import { Input } from "../../ui/Input";
import { Card } from "../../share/card/Card";
import fre from "../../components/img/img/fre.png";
import defAvatar from "../../components/img/img/defAvatar.png";
import { StyledCardСontainer, StyledCardNav } from "../friends/Friends.styled";
import { Img } from "../img/Img";
import { NavbarLink } from "../../ui/NavbarLink";
import { MainPage } from "../mainPage/MainPage";
import axios from "../../utils/axios/axios";
import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import { TUser } from "../../types/user";

export const Friends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    async function fethFriend() {
      try {
        const { data } = await axios.get("friend");
        setFriends(data.data);
      } catch (error) {
        throw new Error((error as AxiosError).message);
      }
    }
    fethFriend();
  }, []);

  const handleDelete = async (id: number) => {
    if (id) {
      try {
        await axios.delete(`friend/${id}`);
        const filterFriends = friends.filter((el: TUser) => el.id !== id);
        setFriends(filterFriends);
      } catch (error) {
        throw new Error((error as AxiosError).message);
      }
    }
  };

  return (
    <MainPage>
      <Flex display="flex" gap="15px">
        <StyledCardСontainer>
          <Flex display="flex" gap="15px">
            <Text color="#dedede" fs="15px">
              Все друзья
            </Text>
            <Text color="#dedede" fs="15px">
              Важные друзья
            </Text>
          </Flex>
          <Area mt="20px">
            <Flex display="flex">
              <Input
                bleft="1px solid #373737"
                bbottom="1px solid #373737"
                btop="1px solid #373737"
                br="10px 0 0 10px"
                padding="5px 55px 5px 10px"
                width="450px"
                height="34px"
                placeholder="Поиск друзей"
                bc="#222222"
                color="#e9e9e9"
              ></Input>
              <Area
                bc="#2c2c2c"
                width="60px"
                height="34px"
                br="0px 5px 5px 0px"
                border="1px solid #373737"
              >
                <Area position="absolute" mt="6px" ml="18px">
                  <Img src={fre} width="17px" height="17px"></Img>
                </Area>
              </Area>
            </Flex>
          </Area>
          {friends.map((el: TUser) => (
            <NavbarLink key={el.id} to={"/" + el.id}>
              <Area mt="15px">
                <Card
                  key={el.id}
                  hideBorder={false}
                  firstName={el.firstName}
                  lastName={el.lastName}
                  avatar={el.avatar ? el.avatar : defAvatar}
                >
                  <Flex display="flex" gap="20px">
                    <NavbarLink to="#" color="#64a1ff" fs="13px">
                      Написать сообщение
                    </NavbarLink>
                    <NavbarLink
                      onClick={() => handleDelete(el.id)}
                      to="#"
                      color="#64a1ff"
                      fs="13px"
                    >
                      Удалить из друзей
                    </NavbarLink>
                  </Flex>
                </Card>
              </Area>
            </NavbarLink>
          ))}
        </StyledCardСontainer>
        <StyledCardNav>
          <NavbarLink
            display="flex"
            width="100%"
            height="30px"
            br="5px"
            padding="8px"
            background="#3a3a3a"
            to="/friends"
          >
            <Text color="#dedede" fs="13px">
              Мои друзья
            </Text>
          </NavbarLink>
          <NavbarLink
            display="flex"
            width="100%"
            height="30px"
            br="5px"
            padding="8px"
            hidebackground={true}
            to="/friendRequests"
          >
            <Text color="#dedede" fs="13px">
              Заявки в друзья
            </Text>
          </NavbarLink>
        </StyledCardNav>
      </Flex>
    </MainPage>
  );
};
