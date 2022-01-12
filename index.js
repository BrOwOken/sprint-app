var jira = require('jira.js');

const client = new jira.Version2Client({
    host: 'https://kybernaproject.atlassian.net',
    authentication: {
        basic: {
            email: 'maruscak.jan@ssakhk.cz',
            apiToken: 'Pd6NtSccW8e6v0510J5p39C8',
        },
    },
});

async function main() {
    const projects = await client.projects.getAllProjects();

    console.log(projects);
}

main();