import app from './server'

if (module.hot) {
  
  module.hot.accept('./server', _ => console.log('🔁  HMR Reloading `./server`...'))

  console.info('✅  Server-side HMR Enabled!')

}

const port = process.env.PORT || 3000

app.listen(port, error => console.log(error ? error : `🚀  Started on port ${port}`))

export default app
