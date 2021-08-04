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

         <h1>Query A Country</h1>
         <p class="text-info">Query A Country By Entering A Relevant Country Code Below!</p>

         <div>
         <Link to="/"><button class="btn btn-primary">Go Back</button></Link>
         </div>
            <br />

            <div class="form-group">
            <label className="form-label" htmlFor="code">
            Country Code:
                </label>        

            <input 
            id="code"
            rows="1"
              cols="47"
              required
              class="form-control" 
              onChange={(event) => setCountryCode(event.target.value)} type="text" placeholder="Enter A Country Code Here"></input>
            </div>

            <div class="form-group">
            <button class="btn btn-danger" onClick={() => {handleSubmit({variables: {code: countryCode.toUpperCase()}})}}>Query Country</button>
            </div>
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
