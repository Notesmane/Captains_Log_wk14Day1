const React = require('react');
const DefaultLayout = require('./Layout/Default');

function New() {
    return (
        <div>
            <h1>Create New Log</h1>

            <form action="/api/logs" method="POST">

                Title: <input type="text" name="title" required/>

                Entry: <input type="body" name="entry" required/>

                Ship Is Broken: <input type="checkbox" name="shipIsBroken"/>

                {/* <textarea name="body" required></textarea> */}

                <input type="submit" value="Add Entry"/>

            </form>
        </div>

    )
}

module.exports = New;