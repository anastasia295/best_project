import { Flex } from "../../ui/Flex";
import { Text } from "../../ui/Text";
import avatar from "../../components/img/img/avatar.jpg";
import { StyledCardWrapper } from "./Card.styled";
import { Img } from "../../components/img/Img";
import { TCardProps } from "./Card.types";

export function Card({ name, children }: TCardProps) {
  return (
    <StyledCardWrapper>
      <Flex display="flex" alignitems="center" gap="10px">
        <Img src={avatar} br="50%" width="80px" height="80px"></Img>
        <Flex display="flex" flexdirection="column">
          <Flex display="flex" flexdirection="column" gap="5px">
            <Text color="#dedede" fs="14px">
              {name}
            </Text>
            {children}
          </Flex>
        </Flex>
      </Flex>
    </StyledCardWrapper>
  );
}