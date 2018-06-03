import app from './server'

if (module.hot) {
  module.hot.accept('./server', function() {
    console.log('🔁  HMR Reloading `./server`...')
  })
  console.info('✅  Server-side HMR Enabled!')
}

const port = process.env.PORT || 3000

app.listen(port, error => {
  if (error) {
    console.log(error)
  }
  console.log(`🚀  Started on port ${port}`)
})

export default app
