const React = require('react');
const DefaultLayout = require('./Layout/Default');

function Show({log}) {
    return (
        <DefaultLayout>
            <div>{log.title}</div>
            <div>{log.entry}</div>
            <div>{log.body}</div>

            {/* COMMENT MAP */}

            <div>
                {
                    log.entry.length > 1 && (
                        log.entry.map(entry => {
                            return (
                                <div>
                                    <div>{entry.body}</div>
                                </div>
                            )
                        })
                    )
                }
            </div>

            <div>
                <h3>Entry</h3>
                <form method="POST" action={`/api/logs/add-entry/${log._id}?_method=PUT`}>
                    Entry: <input type="text" name="body" required/>
                    <br />
                    <input type="submit" value="Add Entry" required/>
                    <br />
                    
                </form>
            </div>

        </DefaultLayout>


    )
} 

module.exports = Show;
