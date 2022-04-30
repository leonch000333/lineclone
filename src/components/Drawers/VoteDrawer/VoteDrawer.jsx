import { AddIcon, ChevronLeftIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Button,
  Box,
  DrawerCloseButton,
  Text,
  Image,
  useDisclosure,
  Flex,
  List,
  ListItem,
  Divider,
} from "@chakra-ui/react";
import { memo, useContext } from "react";
import { DrawerContext } from "../../../providers/DrawerProvider";
import { VoteContext } from "../../../providers/VoteProvider";
import { DrawerHeaders } from "../../organisms/DrawerHeaders";
import { AddDrawer } from "../AddDrawer";
import { VoteAnswerDrawer } from "./VoteAnswerDrawer";
import { VoteDetailDrawer } from "./VoteDetailDrawer";

export const VoteDrawer = memo((props) => {
  const { isOpenVoteDrawer, onCloseVoteDrawer } = props;

  const { question } = useContext(DrawerContext);
  const { setVoteIndex } = useContext(VoteContext);

  //VoteDetailDrawer発火
  const {
    onOpen: onOpenVoteDetailDrawer,
    isOpen: isOpenVoteDetailDrawer,
    onClose: onCloseVoteDetailDrawer,
  } = useDisclosure();

  //VoteAnswerDrawer発火
  const {
    onOpen: onOpenVoteAnswerDrawer,
    isOpen: isOpenVoteAnswerDrawer,
    onClose: onCloseVoteAnswerDrawer,
  } = useDisclosure();

  //VoteAnswerDrawer発火
  const onOpenAnswer = (index) => {
    setVoteIndex(index);
    onOpenVoteAnswerDrawer();
  };

  return (
    <>
      <Drawer
        isOpen={isOpenVoteDrawer}
        onClose={onCloseVoteDrawer}
        placement="bottom"
        size="full"
        autoFocus={false}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeaders onClick={onCloseVoteDrawer} children="投票" />
          <DrawerBody px="10%" textAlign="center">
            {question.length < 1 ? (
              <>
                <Box textAlign="center" mt="10%" mb={4}>
                  <Image
                    src="https://cdn.pixabay.com/photo/2020/01/24/12/56/funny-4790202_1280.jpg"
                    boxSize="150px"
                    objectFit="cover"
                    margin="0 auto"
                  />
                  <Text fontSize="xl" mt={4}>
                    投票を作成しましょう!
                  </Text>
                </Box>
                <Button
                  onClick={onOpenVoteDetailDrawer}
                  colorScheme="green"
                  color="white"
                >
                  投票を作成
                </Button>
              </>
            ) : (
              <>
                <Text backgroundColor="gray.100" py={2} fontSize="md">
                  進行中
                </Text>
                <List>
                  {question.map((q, index) => (
                    <>
                      <ListItem py={4} key={index.toString()}>
                        <Flex justify="space-between" alignItems="center">
                          <Box>
                            <Text>{q}</Text>
                            <Text align="left" fontSize="md" color="gray">
                              0人が参加中
                            </Text>
                          </Box>
                          <Button
                            onClick={() => onOpenAnswer(index)}
                            variant="outline"
                          >
                            投票する
                          </Button>
                        </Flex>
                      </ListItem>
                      <Divider />
                    </>
                  ))}
                </List>
                <Button
                  onClick={onOpenVoteDetailDrawer}
                  w={8}
                  h={10}
                  mt={4}
                  colorScheme="green"
                  borderRadius="50%"
                >
                  <AddIcon />
                </Button>
              </>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <VoteDetailDrawer
        isOpenVoteDetailDrawer={isOpenVoteDetailDrawer}
        onCloseVoteDetailDrawer={onCloseVoteDetailDrawer}
        onCloseVoteDrawer={onCloseVoteDrawer}
      />
      <VoteAnswerDrawer
        isOpenVoteAnswerDrawer={isOpenVoteAnswerDrawer}
        onCloseVoteAnswerDrawer={onCloseVoteAnswerDrawer}
      />
    </>
  );
});
