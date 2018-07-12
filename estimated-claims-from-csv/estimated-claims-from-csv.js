// This is a claim for multiple projects from a CSV file

const request = require('superagent');
const csvparser = require('./csv-to-json.js');

// Fill in these variables with the details provided to you by the SolarCoin Foundation (SCF).
// Forgot the URL? Lost your token? Ask in #affiliate-private on Slack or email affiliates@solarcoin.org

// Docs are always at https://solarcoin.github.io/claiming-api-docs

const API_USERNAME= "";
const API_TOKEN = "";
const API_BASE_URL= "";

// For single estimated claims, you'll want the /claim endpoint.
const API_ENDPOINT = "/claim"

//console.log(csvparser.parseCsvProjects);
const SAMPLE_PROJECTS_ARRAY = csvparser.parseCsvProjects('./example_csv.csv');

// Submit the claim to the API, output errors or responses to the console
// Claims must be submitted one at a time (i.e. not the entire array of projects at once)
SAMPLE_PROJECTS_ARRAY.forEach((SAMPLE_PROJECT) => {

    request
        .post(API_BASE_URL + API_ENDPOINT)
        .auth(API_USERNAME, API_TOKEN)
        .send(SAMPLE_PROJECT)
        .then((response) => {
            console.log(response.body);
        })
        .catch((err) => {
            console.log(err);
        });
})
