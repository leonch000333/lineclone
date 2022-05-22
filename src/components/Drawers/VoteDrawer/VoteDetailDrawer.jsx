import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Button,
  Box,
  Text,
  Flex,
  Textarea,
  Input,
  Stack,
  Checkbox,
} from "@chakra-ui/react";
import { memo, useCallback, useContext, useState } from "react";

import { DrawerContext } from "../../../providers/DrawerProvider";
import { VoteContext } from "../../../providers/VoteProvider";
import { setDay, setMonth, setYear } from "../../atoms/CheckboxAtom";
import { DrawerHeaders } from "../../organisms/DrawerHeaders";

export const VoteDetailDrawer = memo((props) => {
  const { isOpenVoteDetailDrawer, onCloseVoteDetailDrawer, onCloseVoteDrawer } =
    props;

  const { question, setQuestion } = useContext(DrawerContext);
  const {
    selectorArray1,
    selectorArray2,
    selectorArray3,
    selectorArray4,
    setSelectorArray1,
    setSelectorArray2,
    setSelectorArray3,
    setSelectorArray4,
  } = useContext(VoteContext);

  //テキストと日付の選択を管理
  const [select, setSelect] = useState("text");

  //質問内容の管理
  const [content, setContent] = useState("");

  const onChangeTextarea = (e) => setContent(e.target.value);

  //選択肢を管理
  const [selector1, setSelector1] = useState("");
  const [selector2, setSelector2] = useState("");
  const [selector3, setSelector3] = useState("");
  const [selector4, setSelector4] = useState("");

  //Checkboxの状態管理
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);

  const onClickText = () => setSelect("text");
  const onClickDate = () => setSelect("date");

  const onChangeSelector1 = useCallback((e) => setSelector1(e.target.value));
  const onChangeSelector2 = useCallback((e) => setSelector2(e.target.value));
  const onChangeSelector3 = useCallback((e) => setSelector3(e.target.value));
  const onChangeSelector4 = useCallback((e) => setSelector4(e.target.value));

  const onChangeCheck1 = () => setCheck1(!check1);

  //選択肢を配列のglobal stateであるselectorArrayに格納し、一時的なstateであるselectorは空文字にする
  const selector1spred = () => {
    const arry1 = [...selectorArray1, selector1];
    setSelectorArray1(arry1);
    setSelector1("");
  };
  const selector2spred = () => {
    const arry2 = [...selectorArray2, selector2];
    setSelectorArray2(arry2);
    setSelector2("");
  };
  const selector3spred = () => {
    const arry3 = [...selectorArray3, selector3];
    setSelectorArray3(arry3);
    setSelector3("");
  };
  const selector4spred = () => {
    const arry4 = [...selectorArray4, selector4];
    setSelectorArray4(arry4);
    setSelector4("");
  };

  const onCloseAll = () => {
    //質問内容を配列のglobal stateであるquestionに格納し、一時的なstateであるcontentは空文字に設定
    const arry = [...question, content];
    setQuestion(arry);
    setContent("");

    selector1spred();
    selector2spred();
    selector3spred();
    selector4spred();

    onCloseVoteDetailDrawer();
    onCloseVoteDrawer();
  };

  return (
    <>
      <Drawer
        isOpen={isOpenVoteDetailDrawer}
        onClose={onCloseVoteDetailDrawer}
        placement="bottom"
        size="full"
        autoFocus={false}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeaders
            onClick={onCloseVoteDetailDrawer}
            children="投票を作成"
          />
          <DrawerBody fontSize={{base: "18px", md: "24px"}} px="10%" textAlign="center">
            <Flex mb={4}>
              <Text
                onClick={onClickText}
                w="50%"
                pb={2}
                borderBottom={select === "text" ? "black solid 2px" : "none"}
                _hover={{ cursor: "pointer" }}
              >
                テキスト
              </Text>
              <Text
                onClick={onClickDate}
                w="50%"
                pb={2}
                borderBottom={select === "date" ? "black solid 2px" : "none"}
                _hover={{ cursor: "pointer" }}
              >
                日付
              </Text>
            </Flex>
            <Textarea
              onChange={onChangeTextarea}
              type="text"
              value={content}
              placeholder="質問内容を入力してください"
              h="30%"
            />
            <Stack my={4} spacing={4}>
              <Input
                onChange={onChangeSelector1}
                placeholder={
                  select === "text" ? "1.選択肢を入力" : "1.日付を選択"
                }
                type="text"
                value={selector1}
              />
              <Input
                onChange={onChangeSelector2}
                placeholder={
                  select === "text" ? "2.選択肢を入力" : "2.日付を選択"
                }
                type="text"
                value={selector2}
              />
              <Input
                onChange={onChangeSelector3}
                placeholder={
                  select === "text" ? "3.選択肢を入力" : "3.日付を選択"
                }
                type="text"
                value={selector3}
              />
              <Input
                onChange={onChangeSelector4}
                placeholder={
                  select === "text" ? "4.選択肢を入力" : "4.日付を選択"
                }
                type="text"
                value={selector4}
              />
            </Stack>
            <Stack spacing={4}>
              <Checkbox value="1" isChecked={check1} onChange={onChangeCheck1}>
                終了日時を設定
              </Checkbox>
              {/* {check1 === true ? ( */}
                <Flex flexDirection="row">
                  <Box ref={useCallback((ref) => ref?.appendChild(setYear()), [])}></Box>
                  <Box ref={useCallback((ref) => ref?.appendChild(setMonth()),[])}></Box>
                  <Box ref={useCallback((ref) => ref?.appendChild(setDay()),[])}></Box>
                </Flex>
              {/* ) : null} */}
              <Checkbox value="2">複数選択可</Checkbox>
              <Checkbox value="3">匿名投票</Checkbox>
              <Checkbox value="4">選択肢の追加を許可</Checkbox>
            </Stack>
            <Flex my={4} flexDirection="row" justify="space-between">
              <Button onClick={onCloseVoteDetailDrawer} w="40%">
                キャンセル
              </Button>
              <Button onClick={onCloseAll} colorScheme="green" w="40%">
                完了
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
});
