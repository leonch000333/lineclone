import { ChevronLeftIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Button,
  Input,
} from "@chakra-ui/react";
import { memo, useContext } from "react";

import { GroupNameContext } from "../../../providers/GroupNameProvider";
import { DrawerHeaders } from "../../organisms/DrawerHeaders";

export const GroupDrawer = memo((props) => {
  const { isOpenGroupDrawer, onCloseGroupDrawer } = props;

	const {name, setName} = useContext(GroupNameContext)

	const onChangeGroupName = (e) => setName(e.target.value)

  return (
    <Drawer
      isOpen={isOpenGroupDrawer}
      onClose={onCloseGroupDrawer}
      placement="right"
      size="full"
      autoFocus={false}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeaders onClick={onCloseGroupDrawer} children="グループ名" />
        <DrawerBody px="10%" >
          <Input
            type="text"
						value={name}
            placeholder="グループ名"
            backgroundColor="gray.100"
						onChange={onChangeGroupName}
						variant="flushed"
          />
					{name === "" && (
						<p style={{color: "crimson", fontSize: "14px", marginTop: "12px"}}>名前は1文字から入力可能です。</p>
					)}
					<Button w="100%" textAlign="center" mt="36%" colorScheme="green" onClick={onCloseGroupDrawer}>保存</Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
});
