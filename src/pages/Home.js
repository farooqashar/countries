import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const query = gql`
{
countries {
  name
  capital
  emoji
  code
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
              <Card variant="outlined">
              <CardContent>

              <h2>{each_country.name} {each_country.emoji}</h2>
              
               <h4>{each_country.capital} | {each_country.code}</h4>

               </CardContent>
                </Card>
              </div>)
          })}
        </div>

    </div>
  );
}

export default Home;
