import { useEffect, useState, createContext } from "react";
import "./App.css";
import SearchBox from "./components/SearchBox";
import SearchResult from "./components/SearchResult";
import Error from "./components/Error";
import apiClient from "./services/axios";

export const AppContext = createContext({});

function App() {
  const [username, setUsername] = useState("");
  const [result, setResult] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setError("");
  }, [username]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      fetchData(event);
    }
  };

  const fetchData = (event) => {
    event.preventDefault();
    if (username.length === 0) {
      setError("Please provide a username");
    }
    setIsLoading(true);
    apiClient
      .get(`/${username}`)
      .then((response) => setResult(response.data))
      .catch((error) => {
        if (error.response.status === 404) {
          alert("No User found");
        } else {
          alert("Something went wrong, please try again later");
        }
      })
      .finally(() => {
        setUsername("");
        setIsLoading(false);
      });
  };

  const value = {
    username,
    setUsername,
    result,
    setResult,
    error,
    setError,
    isLoading,
    setIsLoading,
    handleKeyDown,
    fetchData
  }

  return (
    <div>
      <AppContext.Provider value={value}>
        <SearchBox/>
        <div>
          <Error error={error}/>
        </div>
        <div>
          <SearchResult result={result} />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
