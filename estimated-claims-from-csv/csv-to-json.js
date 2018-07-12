// Use the synchronous version of the CSV parser for ease of use
const parse = require('csv-parse/lib/sync');
const fs = require('fs');

const parseCsvProjects = (csvFilename) => {
    // Read and parse the CSV file
    const csvData = fs.readFileSync(csvFilename, {encoding: 'utf8'});
    const rawJsonData = parse(csvData, {columns: true});

    // Transform the data from the flat structure into what the API expects
    const projectsData = rawJsonData.map((flatProject) => {
        return {
            firstName: flatProject.firstName,
            lastName: flatProject.lastName,
            email: flatProject.claimantEmail,
            projects: [
                {
                    address: flatProject.address,
                    city: flatProject.city,
                    state: flatProject.state,
                    zipCode: flatProject.zipCode,
                    country: flatProject.country,
                    nameplate: flatProject.nameplate,
                    installDate: flatProject.installDate,
                    walletAddress: flatProject.walletAddress,
                    documentation: flatProject.documentation,
                    legalOwner: flatProject.legalOwner,
                    claimantRelationship: flatProject.claimantRelationship,
                    ofacCompliant: flatProject.ofacCompliant
                }
            ],
            bounty: {
                email: flatProject.bountyEmail
            }
        }
    });

    return projectsData;
}

exports.parseCsvProjects = parseCsvProjects;