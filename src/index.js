import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";

import "./App.css";
import { DrawerProvider } from "./providers/DrawerProvider";
import { GroupNameProvider } from "./providers/GroupNameProvider";
import { VoteProvider } from "./providers/VoteProvider";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <DrawerProvider>
        <GroupNameProvider>
          <VoteProvider>
            <App />
          </VoteProvider>
        </GroupNameProvider>
      </DrawerProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
