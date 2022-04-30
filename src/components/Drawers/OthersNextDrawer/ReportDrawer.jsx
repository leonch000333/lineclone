import { ChevronLeftIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Link,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { memo } from "react";

export const ReportDrawer = memo((props) => {
  const { isOpenReportDrawer, onCloseReportDrawer } = props;
  return (
    <Drawer
      isOpen={isOpenReportDrawer}
      onClose={onCloseReportDrawer}
      placement="bottom"
      size="full"
      autoFocus={false}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader px="10%">
          <Flex justify="space-between" alignItems="center" mb={4}>
            <ChevronLeftIcon
              w={10}
              h={10}
              onClick={onCloseReportDrawer}
              _hover={{ cursor: "pointer" }}
            />
            <p>通報</p>
            <CloseIcon
              onClick={onCloseReportDrawer}
              _hover={{ cursor: "pointer" }}
            />
          </Flex>
        </DrawerHeader>
        <DrawerBody px="10%">
          <Text>
            通報する理由を以下から
            <br />
            選んでください。
          </Text>
          <RadioGroup defaultValue="1">
            <Stack spacing={6} my={6}>
              <Radio value="1">スパム/宣伝目的</Radio>
              <Radio value="2">性的いやがらせ/出会い目的</Radio>
              <Radio value="3">迷惑行為</Radio>
              <Radio value="4">その他</Radio>
            </Stack>
          </RadioGroup>
          <Box color="#718096">
            通報するとLINEに以下の情報が送信され、通報内容の確認・対応や不正利用防止ツールの開発を含む不正利用防止のために
            利用されます。また、上記目的の達成に必要な範囲で以下の情報を業務委託先に共有することがあります。
          </Box>
          <Box color="#718096" mt={6}>
            ■送信される情報
            <br />
            最近送受信した10件のトークメッセージ、グループの情報(表示名/グループの画像/あなたのグループに招待したユーザーの情報等)
            、通報者の情報(表示名/プロフィール画像等)
          </Box>
          <Button
            onClick={onCloseReportDrawer}
            w="100%"
            mt={6}
            colorScheme="green"
          >
            同意して送信
          </Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
});
