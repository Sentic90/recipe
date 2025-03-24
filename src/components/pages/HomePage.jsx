import { useEffect } from "react";
import CardList from "../CardList";
import Header from "../Header";
import Loading from "../Loading";
import useFetchRecipes from "../../hooks/useFetchRecipes";
import { useSearchParams } from "react-router-dom";

const HomePage = () => {
  const [fetchRecipes, { data, loading, error }] = useFetchRecipes();
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleSearch = (searchQuery) => {
    if (searchQuery) {
      fetchRecipes(searchQuery);
      setSearchParams({ q: searchQuery });
    }
  };

  return (
    <>
      <Header onSearchQuery={handleSearch} />
      {loading && <Loading />}
      {data && <CardList items={data} />}
      {error && <p>{error}</p>}
    </>
  );
};

export default HomePage;
