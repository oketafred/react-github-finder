import React, { useContext } from 'react';
import { AppContext } from "../App";

function Error() {
  const { error } = useContext(AppContext);

  return (
    <div>
      {error.length > 0 && (
        <p>{error}</p>
      )}
    </div>
  );
}

export default Error;