import {
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Box,
  List,
  ListItem,
  Image,
  Checkbox,
} from "@chakra-ui/react";
import axios from "axios";
import { memo, useContext, useEffect, useState } from "react";

import { DrawerContext } from "../../providers/DrawerProvider";
import { DrawerHeaders } from "../organisms/DrawerHeaders";

export const InvitationDrawer = memo((props) => {
  const { isOpenInvitationDrawer, onCloseInvitationDrawer } = props;

  const { users, setUsers } = useContext(DrawerContext);

  //checkboxの状態管理
  const [check, setCheck] = useState([]);

  //招待checkboxに選ばれたliを管理
  const [inviList, setInviList] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((error) => alert("上手く取得できませんでした。"));
  }, []);

  const arry = [1, 2];

  const invitationCheck = (e) => {
    const newList = [...inviList, e.target];
    setInviList(newList);
    setCheck(!check);
  };

  const removeCheck = () => {
    const removeList = [...inviList];
    setInviList(removeList);
    setCheck(!check);
  };

  return (
    <Drawer
      isOpen={isOpenInvitationDrawer}
      onClose={onCloseInvitationDrawer}
      placement="bottom"
      size="full"
      autoFocus={false}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeaders
          onClick={onCloseInvitationDrawer}
          children={
            inviList.length >= 1 ? `選択中${inviList.length}` : "友だちを選択"
          }
        />
        <DrawerBody px="10%">
          <Box py={4}>
            {inviList &&
              inviList.map((item, index) => (
                <Box
                  ref={(ref) => ref?.appendChild(item)}
                  key={index.toString()}
                  style={{ margin: "16px 0px" }}
                ></Box>
              ))}
          </Box>
          <Divider mb={2} />
          <List spacing={4}>
            {users.map((user, index) => (
              <ListItem
                key={index.toString()}
                onClick={invitationCheck}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                _hover={{ cursor: "pointer" }}
              >
                <Flex pointerEvents="none" alignItems="center">
                  <Image
                    src="https://source.unsplash.com/random"
                    boxSize={8}
                    mr={4}
                    borderRadius="50%"
                  />
                  {user.name}
                </Flex>
                <Checkbox />
              </ListItem>
            ))}
          </List>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
});
