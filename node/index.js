var jira = require('jira.js');
var express = require('express')

const client = new jira.Version2Client({
    host: 'https://kybernaproject.atlassian.net',
    authentication: {
        basic: {
            email: 'maruscak.jan@ssakhk.cz',
            apiToken: 'nAzuGGpTzn2gVhHHCq250D47',
        },
    },
});

async function getFirstProjectName() {
    const projects = await client.projects.getAllProjects();

    return projects[0].name
}

var app = express()
const port = 3000


// respond with "hello world" when a GET request is made to the homepage
app.get('/', async function (req, res) {
    var result = await getFirstProjectName()
  res.send(result)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })