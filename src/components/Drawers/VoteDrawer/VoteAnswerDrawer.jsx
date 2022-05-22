import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Button,
  Box,
  Text,
  Flex,
  List,
  ListItem,
  Checkbox,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import { memo, useContext, useState } from "react";

import { DrawerContext } from "../../../providers/DrawerProvider";
import { VoteContext } from "../../../providers/VoteProvider";
import { DrawerHeaders } from "../../organisms/DrawerHeaders";
import { VoteDetailDrawer } from "./VoteDetailDrawer";

export const VoteAnswerDrawer = memo((props) => {
  const { isOpenVoteAnswerDrawer, onCloseVoteAnswerDrawer } = props;

  const { question } = useContext(DrawerContext);
  const {
    selectorArray1,
    selectorArray2,
    selectorArray3,
    selectorArray4,
    voteIndex,
  } = useContext(VoteContext);

  const listNumber = [0, 1, 2, 3];

  //sliderの値
  const [sliValue, setSliValue] = useState([0, 0, 0, 0]);

  return (
    <>
      <Drawer
        isOpen={isOpenVoteAnswerDrawer}
        onClose={onCloseVoteAnswerDrawer}
        placement="bottom"
        size="full"
        autoFocus={false}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeaders
            onClick={onCloseVoteAnswerDrawer}
            children="投票する"
          />
          <DrawerBody fontSize={{base: "18px", md: "24px"}} px="10%" textAlign="center">
            <Text mb={8}>{question[`${voteIndex}`]}</Text>
            <Flex alignItems="center" justify="space-between">
              <Button>アナウンスに登録</Button>
              <Text>0人が参加中</Text>
            </Flex>
            <List spacing={4} mt={8}>
              {listNumber.map((num, index) => (
                <ListItem key={index.toString()}>
                  <Flex alignItems="center">
                    <Checkbox w="5%" />
                    <Box w="95%">
                      <Flex alignItems="center" justify="space-between">
                        <Text>
                          {index === 0
                            ? selectorArray1[voteIndex]
                            : index === 1
                            ? selectorArray2[voteIndex]
                            : index === 2
                            ? selectorArray3[voteIndex]
                            : selectorArray4[voteIndex]}
                        </Text>
                        <Text>{sliValue[index]}</Text>
                      </Flex>
                      <Slider
                        colorScheme="green"
                        defaultValue={0}
                        min={0}
                        max={10}
                        step={1}
                      >
                        <SliderTrack>
                          <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb />
                      </Slider>
                    </Box>
                  </Flex>
                </ListItem>
              ))}
            </List>
            <Flex alignItems="center" justify="space-between" mt={16}>
              <Button onClick={onCloseVoteAnswerDrawer} w="40%">
                投票を終了
              </Button>
              <Button
                onClick={onCloseVoteAnswerDrawer}
                w="40%"
                colorScheme="green"
              >
                投票
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
});
