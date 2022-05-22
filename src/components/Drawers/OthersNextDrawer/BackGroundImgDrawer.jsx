import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Image,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { memo, useContext } from "react";

import bgimg0 from "../../../images/Images0.jpg";
import bgimg1 from "../../../images/Images1.jpg";
import bgimg2 from "../../../images/Images2.jpg";
import bgimg3 from "../../../images/Images3.jpg";
import { DrawerContext } from "../../../providers/DrawerProvider";
import { BgimgSettingModal } from "../../modals/BgimgSettingModal";
import { DrawerHeaders } from "../../organisms/DrawerHeaders";

export const BackGroundImgDrawer = memo((props) => {
  const { isOpenBackGroundImgDrawer, onCloseBackGroundImgDrawer } = props;
  const { bgimg, setBgimg } = useContext(DrawerContext);

  const { onOpen, isOpen, onClose } = useDisclosure();

  const arry = [bgimg0, bgimg1, bgimg2, bgimg3];

  const checkBgimg = (index) => {
    setBgimg(arry[index]);
    onOpen();
  };

  return (
    <>
      <Drawer
        isOpen={isOpenBackGroundImgDrawer}
        onClose={onCloseBackGroundImgDrawer}
        placement="right"
        size="full"
        autoFocus={false}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeaders
            onClick={onCloseBackGroundImgDrawer}
            children="背景デザイン"
          />
          <DrawerBody px="10%">
            <Flex wrap="wrap" flexDirection="row">
              {arry.map((item, index) => (
                <Box
                  key={index.toString()}
                  onClick={() => checkBgimg(index)}
                  width={{base: "50%", md: "33%"}}
                  border="white solid 1px"
                  _hover={{ cursor: "pointer" }}
                >
                  <Image src={`${item}`} />
                </Box>
              ))}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <BgimgSettingModal isOpen={isOpen} onClose={onClose} />
    </>
  );
});
