import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { DarkModeProvider } from "./context/DarkModeContext";
import {BookmarkProvider} from "./context/BookmarkContext";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Area from "./pages/Area";
import ErrorPage from "./pages/ErrorPage";
import Spinner from "./ui/Spinner";
import CategoriesList from "./features/categories/CategoriesList";
import CatergoryMealsList from "./features/meals/CatergoryMealsList";
import Bookmark from "./pages/Bookmark";
import { SearchMealContextProvider } from "./context/SearchMealContext";
import AreasList from "./features/areas/AreasList";
import AreaMealList from "./features/meals/AreaMealList";

const queryClient = new QueryClient();

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stopLoading = () => {
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
    }
    window.addEventListener("load", stopLoading);

    return () => window.removeEventListener("load", stopLoading);
  },
  [])

  return (
    <QueryClientProvider client={queryClient}>
      <DarkModeProvider>
        <BookmarkProvider>
          {isLoading && <Spinner />}
          <GlobalStyles />
          <Router>
            <SearchMealContextProvider>
              <AppLayout>
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="category" element={<Category />}>
                  <Route index element={<CategoriesList />} />
                  <Route path=":category" element={<CatergoryMealsList />} />
                </Route>
                <Route path="area" element={<Area />}>
                  <Route index element={<AreasList />} />
                  <Route path=":area" element={<AreaMealList />}/>
                </Route>
                <Route path="bookmark" element={<Bookmark />}/>
                <Route path="*" element={<ErrorPage />} />
              </Routes>
              </AppLayout>
            </SearchMealContextProvider>
          </Router>
        </BookmarkProvider>
      </DarkModeProvider>
    </QueryClientProvider>
  )
}

export default App