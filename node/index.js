var jira = require('jira.js');
var express = require('express')
var cors = require('cors')
var credentials = require('./credentials')

const client = new jira.Version2Client({
    host: 'https://kybernaproject.atlassian.net',
    authentication: {
        basic: {
            email: credentials.email,
            apiToken: credentials.token,
        },
    },
});

async function getFirstProjectName() {
    var projects = await client.projects.getAllProjects();

    return projects
}

var app = express()
const port = 3000

app.use(cors())


// respond with "hello world" when a GET request is made to the homepage
app.get('/', async function (req, res) {
    var result = await getFirstProjectName()
  res.send(result[0].name)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })