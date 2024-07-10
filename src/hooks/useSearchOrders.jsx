import { useState, useCallback } from "react";
import axios from "axios";
import debounce from "lodash/debounce";

const useSearchOrders = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearch = useCallback(
    debounce(async (e) => {
      const searchKey = e.target.value;
      setSearchKey(searchKey);
      if (searchKey) {
        try {
          const response = await axios.get(
            "https://poppys-premium-backend.vercel.app/search/orders",
            {
              params: { searchKey: searchKey },
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          setSearchResults(response.data);
        } catch (error) {
          console.error("Error searching orders:", error);
        }
      } else {
        setSearchResults([]);
      }
    }, 1000),
    [] // dependencies array is empty to ensure the debounce function is not recreated on each render
  );

  const handleResultClick = () => {
    setSearchResults([]);
    setSearchKey("");
  };

  return {
    searchKey,
    searchResults,
    handleSearch,
    handleResultClick,
  };
};

export default useSearchOrders;
