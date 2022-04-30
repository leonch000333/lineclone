import {
  AtSignIcon,
  CalendarIcon,
  CheckCircleIcon,
  CopyIcon,
  DragHandleIcon,
  EmailIcon,
  InfoOutlineIcon,
  PlusSquareIcon,
  StarIcon,
  SunIcon,
  TriangleDownIcon,
  ViewIcon,
} from "@chakra-ui/icons";


export const AddLists = [
  {
    children: "ファイル",
    icon: <CopyIcon />,
  },
  {
    children: "連絡先",
    icon: <DragHandleIcon />,
  },
  {
    children: "位置情報",
    icon: <AtSignIcon />,
    onClick: () => window.open("https://www.google.co.jp/maps", "_blank"),
  },
  {
    children: "Keep",
    icon: <StarIcon />,
  },
  {
    children: "送金・送付依頼",
    icon: <CheckCircleIcon />,
    onClick: () => window.open("https://pay.line.me/portal/jp/about/transfer", "_blank"),
  },
  {
    children: "LINEギフト",
    icon: <EmailIcon />,
    onClick: () => window.open("https://gift.line.me/about", "_blank"),
  },
  {
    children: "LINE MUSIC",
    icon: <SunIcon />,
    onClick: () => window.open("https://music.line.me/about/", "_blank"),
  },
  {
    children: "アバター",
    icon: <ViewIcon color="purple.500" />,
  },
  {
    children: "LINE PLACE",
    icon: <CheckCircleIcon color="green.500" />,
    onClick: () => window.open("https://place.line.me/", "_blank"),
  },
  {
    children: "投票",
    icon: <PlusSquareIcon color="green.500" />,
  },
  {
    children: "日程調整",
    icon: <CalendarIcon color="purple.500" />,
  },
  {
    children: "あみだくじ",
    icon: <TriangleDownIcon color="blue.500" />,
  },
  {
    children: "ジフマガ",
    icon: <InfoOutlineIcon color="pink.200" />,
    onClick: () => window.open("https://gifmagazine.net/", "_blank"),
  },
];
