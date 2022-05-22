import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import { memo } from "react";
import { Calendar } from "react-calendar";

import { DrawerHeaders } from "../../organisms/DrawerHeaders";
import { AddEventDrawer } from "./AddEventDrawer";

export const CalendarDrawer = memo((props) => {
  const { isOpenCalendarDrawer, onCloseCalendarDrawer } = props;

  //AddEventDrawer発火
  const {
    isOpen: isOpenEventDrawer,
    onOpen: onOpenEventDrawer,
    onClose: onCloseEventDrawer,
  } = useDisclosure();

  const getTileContent = (props) => {
    if (props.view !== "month") {
      return null;
    }

    return (
      <p>
        <br />
        XXX予約数: AAA
        <br />
        YYY予約数: BBB
      </p>
    );
  };

  return (
    <>
      <Drawer
        isOpen={isOpenCalendarDrawer}
        onClose={onCloseCalendarDrawer}
        placement="bottom"
        size="full"
        autoFocus={false}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor="red.400">
          <DrawerHeaders
            onClick={onCloseCalendarDrawer}
            children="イベント"
            fontColor="white"
          />
          <DrawerBody>
            <Flex flexDirection="column" px="10%">
              <Flex justify="center">
                <Calendar
                  locale="ja-JP"
                  value={new Date()}
                  // tileContent={getTileContent}
                  calendarType={"US"}
                  prev2Label={null}
                  next2Label={null}
                  onClickDay={onOpenEventDrawer}
                />
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <AddEventDrawer
        isOpenEventDrawer={isOpenEventDrawer}
        onCloseEventDrawer={onCloseEventDrawer}
      />
    </>
  );
});
