const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema')
const app = express();
const axios = require('axios')
const {
    createApolloFetch
} = require('apollo-fetch');

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));
const fetch = createApolloFetch({
    uri: 'http://localhost:5000/graphql',
});


(() => {


    fetch({
        query: `query PostsForAuthor($flight_number: Int!) {
            launch(flight_number: $flight_number){
                mission_name,
                launch_year,
                launch_success,
                
              }
          }`,
        variables: {
            flight_number: 10
        }
    }).then(res => {
        console.log(res.data.launch.mission_name);
    });




})()

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log('Server started')
});