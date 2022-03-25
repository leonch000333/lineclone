import { CalendarIcon, ChatIcon, CopyIcon, LinkIcon, SettingsIcon } from "@chakra-ui/icons";

export const DrawerListItems  = [
    {
        children: 'ノート',
        icon: <ChatIcon mr={4}/>
    },
    {
        children: 'イベント',
        icon: <CalendarIcon mr={4}/>
    },
    {
        children: 'リンク',
        icon: <LinkIcon mr={4}/>
    },
    {
        children: 'ファイル',
        icon: <CopyIcon mr={4}/>
    },
    {
        children: 'その他',
        icon: <SettingsIcon mr={4}/>
    },
]