var jira = require('jira.js');
var express = require('express')
var cors = require('cors')

const client = new jira.Version2Client({
    host: 'https://kybernaproject.atlassian.net',
    authentication: {
        basic: {
            email: 'maruscak.jan@ssakhk.cz',
            apiToken: 'jnOgSVevMswUG0fPSeMsE1D5',
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
    console.log("before")
    var result = await getFirstProjectName()
    console.log("AFTER")
    console.log(result)
  res.send(result[0].name)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })