import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import ProductDetails from "./routes/ProductDetails";
import SearchPage from "./routes/SearchPage";
import "bootstrap/dist/css/bootstrap.min.css";
// import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/product-details/:productId"
          element={<ProductDetails />}
        />
        <Route path="/search-results" element={<SearchPage />} />
      </Routes>
      {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
    </QueryClientProvider>
  );
};

export default App;
