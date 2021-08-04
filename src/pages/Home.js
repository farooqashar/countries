import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

const query = gql`
{
    countries {
  name
  capital
  emoji
}
}
`;


function Home() {

const { data, loading, error } = useQuery(query);

  return (
    <div className="Home">
         <h1>Countries</h1>
         <Link to="/query">Query A Country</Link>

        <div className="countries">
          {loading && <h3>Loading...</h3>}
          {error && <h3>Error: {error.message} </h3>}
          {data && data.countries.map((each_country, key) => {
              return (
              <div key={key}> 
              <h2>{each_country.name} {each_country.emoji}</h2>
               <h4>{each_country.capital}  </h4>

              </div>)
          })}
        </div>

    </div>
  );
}

export default Home;
