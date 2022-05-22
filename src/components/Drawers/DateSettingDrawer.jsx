import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Button,
  Box,
  Stack,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { memo, useState } from "react";
import { Calendar } from "react-calendar";

import { DrawerHeaders } from "../organisms/DrawerHeaders";

export const DateSettingDrawer = memo((props) => {
  const { isOpenDateSettingDrawer, onCloseDateSettingDrawer } = props;

	//日程決定の選択ボタンの判定
	const [flag, setFlag] = useState(true);

	const toggleBtn = () => setFlag(false)

  //日程調整ボタンを選択したかどうかのstate
  const [btn, setBtn] = useState(false);

  const onClickBtn = () => setBtn(!btn);

  return (
    <>
      <Drawer
        isOpen={isOpenDateSettingDrawer}
        onClose={onCloseDateSettingDrawer}
        placement="bottom"
        size="full"
        autoFocus={false}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeaders
            onClick={onCloseDateSettingDrawer}
            children="新規イベント"
          />
          <DrawerBody px="10%" textAlign="center">
            <Stack>
              <Box>
                <Input placeholder="イベント名" />
              </Box>
              <Box>
                <Textarea placeholder="イベント内容(200文字以内)" />
              </Box>
              <Box>
                {btn ? (
                  <>
                    <Calendar
                      locale="ja-JP"
                      value={new Date()}
                      calendarType={"US"}
                      prev2Label={null}
                      next2Label={null}
                      onClickDay={toggleBtn}
                    />
										<Button w="100%" mt={4} color="#f56565" isDisabled={flag}>選択</Button>
                  </>
                ) : (
                  <Button onClick={onClickBtn} w="100%" textAlign="left">
                    日程選択
                  </Button>
                )}
              </Box>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
});
