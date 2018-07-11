export default {
    htmlAttributes: {
        lang: 'en'
    },
    title: 'Super Simple React Starter',
    link: (pathName) => [
        {
            rel: 'canonical',
            href: `http://localhost:3000${ pathName }`
        }
    ],
    meta: [
        {
            charset: 'UTF-8'
        },
        {
            'http-equiv': 'X-UA-Compatible', 
            content:'IE=edge' 
        },
        {
            name: 'viewport', 
            content: 'width=device-width', 
            'initial-scale': 1
        }
    ]
}