import { RouterProvider } from "react-router-dom";
import Layout from "./Layout.tsx";

import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";
import router from "./router.tsx";

const App = () => {
  return (
    <ThemeProvider attribute="class">
      <Theme
        accentColor="indigo"
        grayColor="gray"
        panelBackground="solid"
        scaling="100%"
      >
        <Layout>
          <RouterProvider router={router} />
        </Layout>
      </Theme>
    </ThemeProvider>
  );
};

export default App;
