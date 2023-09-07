const React = require('react');
const DefaultLayout = require('./Layout/Default');

function Index({logs}) {
    return (
        <DefaultLayout>
            <nav>
                <a href="/logs/new">Create a New Log</a>
            </nav>

            <ul>
                {
                    logs.map(log => {
                        return (
                            <li key={log._id} >
                                <br />
                                <a href={`/logs/${log._id}`}>{log.title}</a>
                                <p>{log.body}</p>

                                <span>{log.shipIsBroken ? 'Ship is Broken?': ''}</span>

                                <br />
                                <a href={`/tweets/${tweet._id}/edit`}>Edit Tweet</a>

                                <form method="POST" action={`/api/logs/${log._id}?_method=DELETE`}>
                                    <input type="submit" value="Delete"/>
                                </form>    
                            </li>
                        )
                    })
                }
            </ul>
        </DefaultLayout>
    )
}

module.exports = Index;