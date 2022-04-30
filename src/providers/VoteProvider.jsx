import { createContext, useState } from "react";

export const VoteContext = createContext({});

export const VoteProvider = (props) => {
  const { children } = props;

  //選択肢の管理,投票がいくつかできた場合selectorで複数の選択肢を保持しないといけないので配列にする
  const [selectorArray1, setSelectorArray1] = useState([]);
  const [selectorArray2, setSelectorArray2] = useState([]);
  const [selectorArray3, setSelectorArray3] = useState([]);
  const [selectorArray4, setSelectorArray4] = useState([]);

  //作成した投票のindexを管理。
  const [voteIndex, setVoteIndex] = useState(0);

  return (
    <VoteContext.Provider
      value={{
        selectorArray1,
        selectorArray2,
        selectorArray3,
        selectorArray4,
        setSelectorArray1,
        setSelectorArray2,
        setSelectorArray3,
        setSelectorArray4,
        voteIndex,
        setVoteIndex,
      }}
    >
      {children}
    </VoteContext.Provider>
  );
};
