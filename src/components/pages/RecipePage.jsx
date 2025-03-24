import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchRecipe from "../../hooks/useFetchRecipe";
import Loading from "../Loading";
import RecipeHeader from "../RecipeHeader";
import RecipeInfo from "../RecipeInfo";
import Error from "../Error";

const RecipePage = () => {
  const { id } = useParams();
  const [fetchRecipe, { data, loading, error }] = useFetchRecipe();

  useEffect(() => {
    fetchRecipe(id);
  }, []);
  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;
  if (data?.errors) return <Error explanition="Recipe not found" />;
  return (
    <div>
      {data && (
        <>
          <RecipeHeader name={data.name} nutritions={data.nutrition} />
          <RecipeInfo
            instructions={data?.instructions || []}
            ingredients={data?.sections[0].components || []}
            image={data.thumbnail_url}
          />
        </>
      )}
    </div>
  );
};

export default RecipePage;
