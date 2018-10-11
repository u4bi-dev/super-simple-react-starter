import awsServerlessExpress from 'aws-serverless-express'
import app from './server'

let core

if (process.env.EXECUTION_ENV !== 'serverless') {


    if (module.hot) {
    
        module.hot.accept('./server', _ => console.log('🔁  HMR Reloading `./server`...'))
    
        console.info('✅  Server-side HMR Enabled!')
    
    }
    
    let port = process.env.PORT || 3000
    
    core = app.listen(port, error => console.log(error ? error : `🚀  Started on port ${port}`))

} else {

    let binaries = [
        '*/*'
    ]
    
    let server = awsServerlessExpress.createServer(app, null, binaries)
    
    core = (event, context) => awsServerlessExpress.proxy(server, event, context)

}

export const handler = core