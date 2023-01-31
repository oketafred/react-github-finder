import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Spinner from "./Spinner";
import { useContext } from "react";
import { AppContext } from '../App';

const SearchBox = () => {
  const {
    username,
    setUsername,
    handleKeyDown,
    isLoading,
    fetchData
  } = useContext(AppContext);

  return (
    <div className="flex flex-col justify-center items-center jus bg-amber-700 w-full h-56">
      <h1 className="text-4xl font-bold text-white">GitHub Finder</h1>
      <div className="mt-6 w-72">
        <form onSubmit={fetchData}>
          <div className="relative w-full">
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              onKeyDown={handleKeyDown}
              autoFocus={true}
              type="search"
              className="block p-3 w-full z-20 text-sm text-gray-900 bg-gray-50 focus:outline-none rounded-lg border-l-gray-100 border-l-2 border border-gray-300"
              placeholder="Search by username"
              required
            />

            <button
              type="submit"
              className="absolute top-0 right-0 py-3.5 px-3 bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:outline-none"
              style={{ cursor: "pointer" }}
              disabled={isLoading}
            >
              {isLoading ? (
                <Spinner />
              ) : (
                <MagnifyingGlassIcon className="h-4 w-4 text-gray-100" />
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBox;
