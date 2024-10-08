import { Area } from "../../ui/Area";
import { Flex } from "../../ui/Flex";
import { Text } from "../../ui/Text";
import { Input } from "../../ui/Input";
import { Card } from "../../share/card/Card";
import fre from "../../components/img/img/fre.png";
import {
  StyledCardСontainer,
  StyledCardNav,
} from "../communities/Communities.styled";
import { Img } from "../img/Img";
import { MainPage } from "../mainPage/MainPage";
import { NavbarLink } from "../../ui/NavbarLink";

const data = [
  { name: "Название сообщества", category: "Животные" },
  { name: "Название сообщества", category: "Наука и животные" },
  { name: "Название сообщества", category: "Домашние и дикие животные" },
  { name: "Название сообщества", category: "Животные" },
];

export const Communities = () => {
  return (
    <MainPage>
      <Flex display="flex" gap="15px">
        <StyledCardСontainer>
          <Flex display="flex" gap="15px">
            <Text color="#dedede" fs="15px">
              Все сообщества
            </Text>
            <Text color="#dedede" fs="15px">
              Важные сообщества
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
                width="468px"
                height="34px"
                placeholder="Поиск сообществ"
                bc="#222222"
                color="#6600ff"
              ></Input>
              <Area
                bc="#2c2c2c"
                width="48px"
                height="34px"
                br="0px 5px 5px 0px"
                border="1px solid #373737"
              >
                <Area position="absolute" mt="6px" ml="14px">
                  <Img src={fre} width="17px" height="17px"></Img>
                </Area>
              </Area>
            </Flex>
          </Area>
          {data.map(({ name, category }, index) => (
            <Area key={index} mt="15px">
              <Card name={name}>
                <Text color="#a0a0a0" fs="12px">
                  {category}
                </Text>
                <Text color="#a0a0a0" fs="12px">
                  Количество подписчиков
                </Text>
              </Card>
            </Area>
          ))}
        </StyledCardСontainer>
        <StyledCardNav>
          <NavbarLink
            display="flex"
            width="100%"
            height="30px"
            br="5px"
            padding="8px"
            background=" #3a3a3a"
            to={"#"}
          >
            <Text fs="13px">Мои сообщества</Text>
          </NavbarLink>
          <NavbarLink
            display="flex"
            width="100%"
            height="30px"
            br="5px"
            padding="8px"
            hidebackground
            to={"#"}
          >
            <Text fs="13px">Избранные сообщества</Text>
          </NavbarLink>
        </StyledCardNav>
      </Flex>
    </MainPage>
  );
};
