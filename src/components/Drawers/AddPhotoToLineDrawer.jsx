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
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { db } from "../../firebase";

export const AddPhotoToLineDrawer = (props) => {
  const { isOpenPhotoDrawer, onClosePhotoDrawer } = props;

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
            {imgUrls.map(({imageURL}) => (
              <Box w="33%" h="120" border="solid black 1px" _hover={{cursor: "pointer", opacity: "0.8"}}>
                <Image src={imageURL} borderRadius="0px" objectFit="cover" />
              </Box>
            ))}
          </Flex>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};
