// https://perscholas.instructure.com/courses/1513/assignments/297809?module_item_id=966062

const express = require('express');
require('dotenv').config();
const jsxEngine = require('jsx-view-engine');
const connectDB = require('./utils/connectDB');
const Logs = require('./models/Logs')
const manyLogs = require('./models/manyLogs');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

//^ ============== variables
const app = express();
const PORT = 3000;


//^ ============== config
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

//^ ============== middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static('public'));

//^ ============== routes
/**
 * & ROUTE
 */
app.get("/", (req, res) => {
    res.render("new")
})

// View Routes


/**
 *& Index
 */
 app.get("/logs", async (req, res) => {
    try {
        const logs = await Log.find({});
        res.render('Index', {logs});
    } catch (e) {
        console.log(e);
    }
})




/**
 * & New
 * @Route /views/New
 * @Method GET
 * @Action Create
 * @Description show a form to create a new log
 */

app.get('/logs/new', (req, res) => {
    res.render('New');
})


/**
 *& Edit
 */
 app.get('/logs/:id/edit', async (req, res) => {
    const {id} = req.params;
    try {
        // we need to find the tweet
        const log = await Log.findById(id);
        // we also need to return a form template with the tweet data
        res.render('Edit', {log});
    } catch (error) {
        console.log(error);
    }
});


/**
 *& Show
 */
// this route finds the tweet by id
app.get("/logs/:id", async(req, res) => {
    const {id} = req.params;
    try {
        const log = await Log.findById(id)
        res.render('Show', {log});
    } catch (e) {
        console.log(e);
    }
})


/**
 *& Create POST
 */
 app.post("/api/logs", async (req, res) => {
    const createdLog = await Log.create(req.body);
    res.redirect('/logs');
});

/**
 *& Update
 */
app.put("/api/logs/:id", async (req, res) => {
    const {id} = req.params; // destructures the id
    if (req.body.sponsored === "on") {
        req.body.sponsored = true;
    } else {
        req.body.sponsored = false;
    }
    try {

        const updatedLog = await updatedLog.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.redirect(`/logs/${id}`);
    } catch (e) {
        console.log(e);
    }
})

/**
 *& Delete
 */
app.delete("/api/logs/:id", async (req, res) => {
    const {id} = req.params;
    try {
        const deletedLog = await Log.findByIdAndDelete(id);
        res.redirect('/logs');
    } catch (e) {
        console.log(e);
    }
})


//^ ============== listen and connect to database

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))