const React = require('react');

function DefaultLayout({title, children}) {
    return (
        <html>
            <head>
                <title>{title}</title>
                <link rel="stylesheet" href="/class/app.css"/>
            </head>

            <body>
                <h1>{title}</h1>
                {children}
            </body>
        </html>
    )
}

module.exports = DefaultLayout;