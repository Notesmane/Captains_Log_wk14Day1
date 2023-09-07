const React = require('react');
const DefaultLayout = require('./Layout/Default');

function Edit({log}) {
    return(
        <DefaultLayout title="Logs">
            <h1>Edit Log</h1>

            <form action={`/api/logs/${log._id}?_methodPUT`} method="POST">

                Title: <input type="text" name="title" defaultValue={log.title} required/>

                <textarea name="body" defaultValue={log.body} required></textarea>

                <input type="checkbox" name="shipIsBroken" defaultChecked={log.shipIsBroken} />

                <input type="submit" value="Update" />

            </form>

        </DefaultLayout>
    )
}

module.exports = Edit;