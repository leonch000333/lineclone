import {
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Button,
  Box,
  Image,
  Checkbox,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { db } from "../../firebase";

export const AddPhotoToLineDrawer = (props) => {
  const { isOpenPhotoDrawer, onClosePhotoDrawer } = props;

  const [check, setCheck] = useState(false);
  const [imgUrls, setImgUrl] = useState([]);

  //stateのimgUrlsにdbのコレクション名'images'のフィールドを追加。下でimgUrlをmapでループすることで写真を表示。
  useEffect(() => {
    //このimagesはfirebaseのdatabaseのコレクション名
    db.collection("images")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setImgUrl(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  const onClickCheck = () => setCheck(!check);

  return (
    <Drawer
      isOpen={isOpenPhotoDrawer}
      onClose={onClosePhotoDrawer}
      placement="left"
      size="sm"
      autoFocus={false}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>
          <Flex wrap="wrap">
            {imgUrls.map(({ imageURL }, index) => (
              <Box
                key={index.toString()}
                onClick={onClickCheck}
                w="33%"
                h="120"
                border="solid black 1px"
                position="relative"
                _hover={{ cursor: "pointer", opacity: "0.8" }}
              >
                <Box
                  className={`${check && "check-on"}${index}`}
                  w="18px"
                  h="20px"
                  backgroundColor="gray.100"
                  border="white 1px solid"
                  borderRadius="50%"
                  position="absolute"
                  right="10px"
                  top="8px"
                ></Box>
                <Image src={imageURL} borderRadius="0px" objectFit="cover" />
              </Box>
            ))}
          </Flex>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};
