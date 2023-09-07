// https://perscholas.instructure.com/courses/1513/assignments/297809?module_item_id=966062

const express = require('express');
require('dotenv').config();
const jsxEngine = require('jsx-view-engine');


//^ ============== variables
const app = express();
const PORT = 3000;


//^ ============== config
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());


//^ ============== routes
/**
 * & ROOT
 */
app.get("/", (req, res) => {
    res.render("new")
})

// View Routes



/**
 * @Route /views/New
 * @Method GET
 * @Action Create
 * @Description show a form to create a new log
 */

app.get('/views/new', (req, res) => {
    res.render('views/New');
})










//^ ============== listen and connect to database

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))