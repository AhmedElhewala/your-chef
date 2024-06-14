import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { DarkModeProvider } from "./context/DarkModeContext";
import { BookmarkProvider } from "./context/BookmarkContext";
import { SearchMealContextProvider } from "./context/SearchMealContext";
import GlobalStyles from "./styles/GlobalStyles";

const AppLayout = lazy(() => import("./ui/AppLayout"));
const Home = lazy(() => import("./pages/Home"));
const Category = lazy(() => import("./pages/Category"));
const Area = lazy(() => import("./pages/Area"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const Bookmark = lazy(() => import("./pages/Bookmark"));
const Spinner = lazy(() => import("./ui/Spinner"));
const CategoriesList = lazy(() =>
  import("./features/categories/CategoriesList")
);
const CatergoryMealsList = lazy(() =>
  import("./features/meals/CatergoryMealsList")
);
const AreaMealList = lazy(() => import("./features/meals/AreaMealList"));
const AreasList = lazy(() => import("./features/areas/AreasList"));

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DarkModeProvider>
        <BookmarkProvider>
          <GlobalStyles />
          <Router>
            <Suspense fallback={<Spinner />}>
              <SearchMealContextProvider>
                <AppLayout>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="category" element={<Category />}>
                      <Route index element={<CategoriesList />} />
                      <Route
                        path=":category"
                        element={<CatergoryMealsList />}
                      />
                    </Route>
                    <Route path="area" element={<Area />}>
                      <Route index element={<AreasList />} />
                      <Route path=":area" element={<AreaMealList />} />
                    </Route>
                    <Route path="bookmark" element={<Bookmark />} />
                    <Route path="*" element={<ErrorPage />} />
                  </Routes>
                </AppLayout>
              </SearchMealContextProvider>
            </Suspense>
          </Router>
        </BookmarkProvider>
      </DarkModeProvider>
    </QueryClientProvider>
  );
}

export default App;
