import { createContext, useState } from "react";

export const DrawerContext = createContext({});

export const DrawerProvider = (props) => {
  const { children } = props;

  //通知のstate(初期値はtrueとし通知オンを意味する)
  const [lock, setLock] = useState(true);

  //jsonplaceholderで取得した情報
  const [users, setUsers] = useState([]);

  //背景画像のstate
  const [bgimg, setBgimg] = useState();

  //FiveDrawerのpageName
  const [pageName, setPageName] = useState("");

  //投票の質問内容管理
  const [question, setQuestion] = useState([]);

  return (
    <DrawerContext.Provider
      value={{
        lock,
        setLock,
        users,
        setUsers,
        bgimg,
        setBgimg,
        pageName,
        setPageName,
        question,
        setQuestion,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
