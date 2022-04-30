import { ChevronLeftIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { memo } from "react";

import { DrawerHeaders } from "../../organisms/DrawerHeaders";

export const AddEventDrawer = memo((props) => {
  const { isOpenEventDrawer, onCloseEventDrawer } = props;

  return (
    <>
      <Drawer
        isOpen={isOpenEventDrawer}
        onClose={onCloseEventDrawer}
        placement="bottom"
        size="full"
        autoFocus={false}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeaders
            onClick={onCloseEventDrawer}
            children="イベント"
            bgColor="#f56565"
          />
          <DrawerBody px="10%"></DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
});
