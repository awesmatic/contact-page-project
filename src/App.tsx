import { FC } from "react";
import Layout from "./components/Layout/index";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <div className="h-screen sm:mx-10 sm:px-10  mx-0 px-0 ">
      <QueryClientProvider client={queryClient}>
        <Layout />
      </QueryClientProvider>
    </div>
  );
};

export default App;
