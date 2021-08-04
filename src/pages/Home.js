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
  currency
  phone
}
}
`;


function Home() {

const { data, loading, error } = useQuery(query);

  return (
    <div className="Home">
         <h1>Countries</h1>
         <p class="text-info">This site allows users to query a specific country for more information in addition to viewing mass information all at once.</p>
         <br/>
         <br/>
         <Link to="/query"><button class="btn btn-primary">Query A Country</button></Link>
         <br/>
         <br/>

        <div className="countries">
          {loading && <h3 class="text-warning">Loading...</h3>}
          {error && <h3 class="text-danger">Error: {error.message} </h3>}
          {data && data.countries.map((each_country, key) => {
              return (
              <div key={key}> 
              <Card variant="outlined">
              <CardContent>

              <h2 class="text-danger">{each_country.name} {each_country.emoji}</h2>
              
               <h6>Capital: {each_country.capital}</h6>

               <h6>Phone Extension: {each_country.phone} </h6>
               
               <h6>Country Code: {each_country.code}</h6>

                <h6>Currency: {each_country.currency}</h6>

               </CardContent>
                </Card>
                <br/>
                <br/>
              </div>)
          })}
        </div>

    </div>
  );
}

export default Home;
