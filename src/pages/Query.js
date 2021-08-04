import React, { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

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
const [handleSubmit, { data, loading, error} ] = useLazyQuery(query);


  return (
    <div>
        
        {error && <h3 class="text-danger">Error: {error.message} </h3>}

        <div>
         <Link to="/">Go Back</Link>

            <input onChange={(event) => setCountryCode(event.target.value)} type="text" placeholder="Enter A Country Code Here"></input>
            <button onClick={() => {handleSubmit({variables: {code: countryCode.toUpperCase()}})}}>Query Country</button>
        </div>

        <div className="results">
            {data && 
            (
            <>
            <div><h1>{data.country.name} {data.country.emoji}</h1></div>
            <div>Capital: <h1>{data.country.capital}</h1></div>
            <div>Currency: <h1>{data.country.currency}</h1></div>
            <div>Country Code: <h1>{data.country.code}</h1></div>
            </>
            )}
        </div>
    </div>
  );
}

export default Query;
