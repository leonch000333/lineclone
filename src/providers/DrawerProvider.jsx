import { createContext, useState } from "react";

export const DrawerContext = createContext({});

export const DrawerProvider = (props) =>{
    const {children} = props;

    const [notification, setNotification] = useState(true)
    const onClickLock = () => setNotification(!notification);

    return(
        <DrawerContext.Provider value={{onClickLock, notification}}>
            {children}
        </DrawerContext.Provider>
    )
}