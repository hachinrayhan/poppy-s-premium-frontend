import { useState, useCallback, useEffect } from "react";
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
    []
  );

  const clearSearchResults = () => {
    setSearchResults([]);
    setSearchKey("");
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        clearSearchResults();
      }
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest(".search-results-container")) {
        clearSearchResults();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return {
    searchKey,
    searchResults,
    handleSearch,
    clearSearchResults,
  };
};

export default useSearchOrders;
