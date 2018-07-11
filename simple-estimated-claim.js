// This is a simple claim for an estimated grant of a single project

const request = require('superagent');

// Fill in these variables with the details provided to you by the SolarCoin Foundation (SCF).
// Forgot the URL? Lost your token? Ask in #affiliate-private on Slack or email affiliates@solarcoin.org

// Docs are always at https://solarcoin.github.io/claiming-api-docs

const API_USERNAME= "";
const API_TOKEN = "";
const API_BASE_URL= "";

// For single estimated claims, you'll want the /claim endpoint.
const API_ENDPOINT = "/claim"

const SAMPLE_PROJECT = {

    "firstName": "Test",
    "lastName": "Claimant",
    "email": "testclaimant@testclaimant.com",
    "projects": [
        {
            "address": "123 Test Rd",
            "city": "Anytown",
            "state": "MT",
            "zipCode": "12345",
            "country": "US",
            "nameplate": "1.2345",
            "installDate": "2015-01-01",

            // This should be the Claimant's wallet address
            "walletAddress": "8dKB4huWep18H3QBgtD8heJy57eeqQWXFA",

            // This should be an accessible link to a file or monitoring platform demonstrating
            // the energy produced by the solar facility
            "documentation": "http://solar.monitoring.platform.com/my-site-documentation.pdf",

            // The name of the legal owner of the facility
            "legalOwner": "Test Claimant",

            // One of: "owner", "residential_resident", "manager, or "custodian"
            "claimantRelationship": "owner",
            "ofacCompliant": "true"
        }
    ],

    // This is the recipient's information for the bounty - as an Affiliate, likely your information.
    // Your wallet address is already with the SCF and is tied to your API token.
    "bounty": {
        "name": "Test Affiliate",
        "email": "testaffiliate@testaffiliate.com",
        "address": "456 Test Av",
        "city": "Othertown",
        "state": "FL",
        "country": "US",
        "zipCode": "67890",
        "codename": "testaffiliate",
    }
};

// Submit the claim to the API, output errors or responses to the console
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
