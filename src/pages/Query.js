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
        phone
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
            <button type="submit" class="btn btn-danger" onClick={() => {handleSubmit({variables: {code: countryCode.toUpperCase()}})}}>Query Country</button>
            </div>
        </div>

        <div>
            {data && 
            (
            <>
            <h2 class="eachl">{data.country.name} {data.country.emoji}</h2>
             <h4 class="ssm">Capital: {data.country.capital}</h4>
             <h4 class="ssm">Currency: {data.country.currency}</h4>
             <h4 class="ssm">Country Code: {data.country.code}</h4>
             <h4 class="ssm">Phone Extension: {data.country.phone}</h4>

            </>
            )}
        </div>
    </div>
  );
}

export default Query;
