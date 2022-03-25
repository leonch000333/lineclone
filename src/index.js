import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";

import "./App.css";
import { DrawerProvider } from "./providers/DrawerProvider";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <DrawerProvider>
        <App />
      </DrawerProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
