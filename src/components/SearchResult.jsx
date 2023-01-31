import { useContext } from "react";
import { AppContext } from "../App";

const SearchResult = () => {
  const { result } = useContext(AppContext);

  return (
    <div>
      { Object.keys(result).length > 0 && (
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-12 mx-auto">
            <div className="lg:w-3/5 bg-gray-100 p-8 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                width={180}
                height={180}
                className="w-1/2 object-center rounded"
                src={result.avatar_url}
              />
              <div className="lg:w-1/2 w-full lg:pl-10">
                <h1 className="text-gray-900 object-contain text-3xl title-font font-medium mb-1 pb-2">
                  <span>{ result.name }</span>
                </h1>
                <hr/>
                <p className="leading-relaxed pt-2">
                  <span className="font-bold">Bio: </span>
                  <span>{ result.bio }</span>
                </p>
                <p className="leading-relaxed pt-2">
                  <span className="font-bold">Location: </span>
                  <span>{ result.location }</span>
                </p>
                <p className="leading-relaxed pt-2">
                  <span className="font-bold">Company: </span>
                  <span>{ result.company }</span>
                </p>
                <p className="leading-relaxed pt-2">
                  <span className="font-bold">Followers: </span>
                  <span>{ result.followers }</span>
                </p>
                <p className="leading-relaxed pt-2">
                  <span className="font-bold">Followings: </span>
                  <span>{ result.following }</span>
                </p>
                <p className="leading-relaxed pt-2">
                  <span className="font-bold">Public Repos:</span>
                  <span>{ result.public_repos }</span>
                </p>
                <p className="leading-relaxed pt-2">
                  <span className="font-bold">Website: </span>
                  <a href={ result.blog }>{ result.blog }</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default SearchResult;
