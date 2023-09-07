const React = require('react');

function New() {
    return (
        <div>
            <h1>Create New Log</h1>

            <form action="/logs" method="POST">

                Title: <input type="text" name="title" required/>

                Entry: <input type="text" name="entry" required/>

                Ship Is Broken: <input type="checkbox" name="shipIsBroken"/>

                {/* <textarea name="body" required></textarea> */}

                <input type="submit" value="Post"/>

            </form>
        </div>

    )
}

module.exports = New;