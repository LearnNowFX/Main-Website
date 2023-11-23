import React from "react";
import { useSearchParams } from "react-router-dom";

const searchProducts = (query: string, ) => {

const Search = () => {
  const [params, setParams] = useSearchParams();
  const { data: products } = useQuery("products", () => productService.getAll(), {
    refetchOnMount: false,
  });

  const { data: tutorials } = useQuery("tutorials", () => tutorialService.getAll(), {
    refetchOnMount: false,
  });

  const results = useMemo(() => {
    if (!products || !tutorials) {
      return null;
    }

    if (!params.q) {
      return {
        products,
        tutorials,
      };
    }

    return {
      products: products.slice(0, 6),
      tutorials: tutorials.slice(0, 6),
    };
  }, [products, tutorials, params]);

  const search = (query: string) => {
    setParams({ q: query });
  };

  const clearSearch = () => {
    setParams({});
  };

  return <div>Search</div>;
};

export default React.memo(Search);
