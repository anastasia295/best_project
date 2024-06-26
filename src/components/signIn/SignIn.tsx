import { Text } from "../../ui/Text";

import { Input } from "../../ui/Input";
import { Button } from "../../ui/Button";
import { Flex } from "../../ui/Flex";
import { NavbarLink } from "../../ui/NavbarLink";

import { Img } from "../img/Img";
import iconvk from "../img/img/iconvk.png";
import {
  StyledAppWrapper,
  StyledContainer,
  StyledPageblockVK,
} from "./SIgnIn.styled";
import { Area } from "../../ui/Area";

export function SignIn() {
  return (
    <StyledAppWrapper>
      <StyledContainer>
        <StyledPageblockVK>
          <Flex
            flexdirection="column"
            justifycontent="center"
            alignitems="center"
            gap="20px"
          >
            <Area mt="20px">
              <Img width="60px" height="60px" src={iconvk}></Img>{" "}
            </Area>
            <Area mt="-20px">
              <Text color="#d3d3d3" fs="30px">
                Вход Вконтакте
              </Text>
            </Area>

            <Input
              border="1px solid #545454"
              br="8px"
              padding="15px"
              width="304px"
              height="36px"
              bc="#3f3f3f"
              color="#e9e9e9"
              placeholder="Введите логин"
            ></Input>
            <Input
              border="1px solid #545454"
              br="8px"
              padding="15px"
              width="304px"
              height="36px"
              placeholder="Введите пароль"
              bc="#3f3f3f"
              color="#e9e9e9"
            ></Input>

            <Button fs="14px" br="8px" width="304px" height="36px" lh="24px">
              Войти
            </Button>

            <Area mt="110px">
              <Button
                fs="14px"
                bc="#ffe4e1"
                br="8px"
                width="304px"
                height="36px"
                lh="24px"
                color="black"
              >
                <NavbarLink fs="14px" color="black" to="gregistration">
                  Регистрация
                </NavbarLink>
              </Button>
            </Area>
          </Flex>
        </StyledPageblockVK>
      </StyledContainer>
    </StyledAppWrapper>
  );
}
