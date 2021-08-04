import React, { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";

const query = gql`
query Country($code: ID!) {
    country(code: $code) {
        name
        capital
        emoji
        code
        currency
    }
}
`;

function Query() {

const [countryCode, setCountryCode] = useState("");
const [handleSubmit, { data, loading, error} ] = useLazyQuery(query, {variables: {code: countryCode.toUpperCase()}});


  return (
    <div className="query">
        <div className="userinput">

            <input onChange={(event) => setCountryCode(event.target.value)} type="text" placeholder="Enter A Country Code Here"></input>
            <button onClick={handleSubmit}>Query Country</button>
        </div>

        <div className="results">
            {data && <h1>{data.country.name}</h1>}
        </div>
    </div>
  );
}

export default Query;
