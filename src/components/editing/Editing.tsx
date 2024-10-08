import { NavbarLink } from "../../ui/NavbarLink";
import { MainPage } from "../mainPage/MainPage";
import { StyledCardNav } from "../messages/Messages.styled";
import { Area } from "../../ui/Area";
import { Text } from "../../ui/Text";
import { Flex } from "../../ui/Flex";
import { Input } from "../../ui/Input";
import { Select } from "../../ui/Select";
import { Option } from "../../ui/Option";
import {
  StyledEditing,
  StyledHoverAvatar,
  StyledEditingСontainer,
  StyledInformation,
  StyledСhangeData,
  StyledHoverBackground,
  StyledHoverBackgroundWrapper,
  StyledChangedButton,
} from "./Editing.styled";
import { Img } from "../img/Img";
import { Textarea } from "../../ui/Textarea";
import { Button } from "../../ui/Button";
import axios from "../../utils/axios/axios";
import { useState, FormEvent, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../store/slices/AuthSlice";
import { RootState } from "../../store/store/Store";
import { TUser } from "../../types/user";
import defAvatar from "../../components/img/img/defAvatar.png";
import { AxiosError } from "axios";

export const Editing = () => {
  const userData = useSelector((state: RootState) => state.auth.user) as TUser;
  const filePickerAvatar = useRef<HTMLInputElement>(null);
  const filePickerBackground = useRef<HTMLInputElement>(null);
  const [fileAvatar, setFileAvatar] = useState<File | null>(null);
  const [fileBackground, setFileBackground] = useState<File | null>(null);
  const dispatch = useDispatch();
  const [user, setUser] = useState<TUser>(userData);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await axios.put("user", user);
      dispatch(updateUser(data.data));
    } catch (err: unknown) {
      const error = err as AxiosError;
      console.error(error.message);
    }
  };

  const onChange =
    (fieldName: string) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      setUser((prev) => {
        return { ...prev, [fieldName]: e.target.value };
      });
    };

  const handlePickAvatar = () => {
    if (filePickerAvatar.current) {
      filePickerAvatar.current.click();
    }
  };

  function handleChangeAvatar(event: React.ChangeEvent) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) {
      return;
    }
    const file = input.files[0];
    setFileAvatar(file);
  }

  const handleUpLoadAvatar = async (event: React.MouseEvent<HTMLElement>) => {
    if (fileAvatar) {
      event.preventDefault();
      const formData = new FormData();
      formData.append("avatar", fileAvatar);
      formData.append("avatar", fileAvatar.name);
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      const { data } = await axios.put("user", formData, config);
      dispatch(updateUser(data.data));
      setUser(data.data);
    }
  };

  const handlePickBackground = () => {
    if (filePickerBackground.current) {
      filePickerBackground.current.click();
    }
  };
  function handleChangeBackground(event: React.ChangeEvent) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) {
      return;
    }
    const file = input.files[0];
    setFileBackground(file);
  }

  const handleUpLoadBackground = async (
    event: React.MouseEvent<HTMLElement>
  ) => {
    if (fileBackground) {
      event.preventDefault();
      const formData = new FormData();
      formData.append("background", fileBackground);
      formData.append("background", fileBackground.name);
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      const { data } = await axios.put("user", formData, config);
      dispatch(updateUser(data.data));
      setUser(data.data);
    }
  };

  return (
    <MainPage>
      <Flex display="flex" gap="15px">
        <StyledEditing onSubmit={handleSubmit}>
          <StyledEditingСontainer>
            <Area mt="20px" ml="20px">
              <Text color="#dedede" fs="15px">
                Профиль
              </Text>
            </Area>
            <Area mt="20px" position="relative">
              <Img src={user.background} width="100%" height="150px"></Img>
            </Area>
            <StyledСhangeData>
              <Area position="absolute" top="-95px" right="5px">
                <StyledChangedButton
                  fs="15px"
                  br="8px"
                  color="#dedede"
                  bc="#3a3a3a"
                  width="170px"
                  height="32px"
                >
                  Изменить обложку
                </StyledChangedButton>
                <StyledHoverBackground>
                  <StyledHoverBackgroundWrapper>
                    <Button
                      onClick={handlePickBackground}
                      type="submit"
                      fs="15px"
                      br="8px"
                      color="#bcbcbc"
                      bc="#3a3a3a"
                      width="100%"
                      height="32px"
                    >
                      Выбрать файл
                    </Button>
                    <Button
                      onClick={handleUpLoadBackground}
                      type="submit"
                      fs="15px"
                      br="8px"
                      color="#bcbcbc"
                      bc="#3a3a3a"
                      width="100%"
                      height="32px"
                    >
                      Cохранить
                    </Button>
                    <Button
                      type="submit"
                      fs="15px"
                      br="8px"
                      color="#bcbcbc"
                      bc="#3a3a3a"
                      width="100%"
                      height="32px"
                    >
                      Удалить
                    </Button>
                    <Input
                      ref={filePickerBackground}
                      opacity="0"
                      onChange={handleChangeBackground}
                      type="file"
                    ></Input>
                  </StyledHoverBackgroundWrapper>
                </StyledHoverBackground>
              </Area>
              <Area mt="45px" ml="-18px">
                <Flex display="flex" flexdirection="column" alignitems="center">
                  <Img
                    cursor="pointer"
                    src={user.avatar ? user.avatar : defAvatar}
                    br="50%"
                    width="92px"
                    height="92px"
                    border="4px solid rgba(0,0,0,0.3)"
                  ></Img>
                  <StyledHoverAvatar>
                    <Button
                      onClick={handlePickAvatar}
                      type="submit"
                      fs="15px"
                      br="8px"
                      color="#bcbcbc"
                      bc="#3a3a3a"
                      width="120px"
                      height="32px"
                    >
                      Выбрать файл
                    </Button>
                    <Button
                      onClick={handleUpLoadAvatar}
                      type="submit"
                      fs="15px"
                      br="8px"
                      color="#bcbcbc"
                      bc="#3a3a3a"
                      width="120px"
                      height="32px"
                    >
                      Cохранить фото
                    </Button>
                    <Button
                      type="submit"
                      fs="15px"
                      br="8px"
                      color="#bcbcbc"
                      bc="#3a3a3a"
                      width="120px"
                      height="32px"
                    >
                      Удалить
                    </Button>
                    <Input
                      height="0px"
                      width="0px"
                      ref={filePickerAvatar}
                      opacity="0"
                      padding="0px"
                      margin="0px"
                      onChange={handleChangeAvatar}
                      type="file"
                      overflow="hidden"
                      lineheight="0"
                    ></Input>
                  </StyledHoverAvatar>
                </Flex>
              </Area>
              <Text color="#dedede" fs="17px">
                {user.firstName} {user.lastName}
              </Text>
              <NavbarLink to="/personalData">
                <Text color="#dedede" fs="13px">
                  Изменить данные
                </Text>
              </NavbarLink>
            </StyledСhangeData>
          </StyledEditingСontainer>
          <StyledInformation>
            <Flex display="flex">
              <Text color="#a0a0a0" width="150px">
                Краткая информация:
              </Text>
              <Textarea
                type="text"
                border="1px solid #545454"
                br="10px"
                padding="5px"
                width="300px"
                height="100px"
                value={user.status}
                bc="#222222"
                color="#e9e9e9"
                maxLength={100}
                onChange={onChange("status")}
              ></Textarea>
            </Flex>
            <Flex display="flex" alignitems="center">
              <Text color="#a0a0a0" width="150px">
                Семейное положение:
              </Text>
              <Select
                value={user.familyStatus}
                border="1px solid #545454"
                bc="#222222"
                color="#bcbcbc"
                width="300px"
                height="30px"
                br="5px"
                onChange={onChange("familyStatus")}
              >
                <Option value="notChosen">Не выбрано</Option>
                <Option value="single">Не замужем/Не женат</Option>
                <Option value="married">Замужем/Женат</Option>
                <Option value="inLove">Влюблена/Влюблен</Option>
                <Option value="activeSearch">В активном поиске</Option>
              </Select>
            </Flex>
            <Flex display="flex" alignitems="center">
              <Text color="#a0a0a0" width="150px">
                Родной город:
              </Text>
              <Input
                value={user.city}
                padding="5px"
                bc="#222222"
                color="#bcbcbc"
                width="300px"
                height="30px"
                br="5px"
                border="1px solid #545454"
                onChange={onChange("city")}
              ></Input>
            </Flex>
            <Area position="absolute" bottom="50px" left="40%">
              <Button
                bc="#a0a0a0"
                color="black"
                br="8px"
                width="104px"
                height="32px"
              >
                Сохранить
              </Button>
            </Area>
          </StyledInformation>
        </StyledEditing>
        <StyledCardNav>
          <NavbarLink
            display="flex"
            flexdirection="column"
            width="100%"
            height="40px"
            br="5px"
            padding="8px"
            hidebackground
            to="/personalData"
          >
            <Text color="#dedede" fs="14px">
              Личные данные
            </Text>
            <Text color="#a0a0a0" fs="11px">
              Имя, фамилия, дата рождения, пол
            </Text>
          </NavbarLink>
          <NavbarLink
            background=" #3a3a3a"
            display="flex"
            alignitems="center"
            width="100%"
            height="40px"
            br="5px"
            padding="8px"
            to="#"
          >
            <Text color="#dedede" fs="13px">
              Профиль
            </Text>
          </NavbarLink>
        </StyledCardNav>
      </Flex>
    </MainPage>
  );
};
