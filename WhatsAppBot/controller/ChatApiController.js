
const tmpData = {
  data: null
}

export default {
  load(app){
    this.statusConenction(app)
    this.hookChanges(app)
  },
  statusConenction(app){
    app.get('/connect', (req, res) => res.send('Connected'))
  },
  hookChanges(app){
    app.post('/mywebhook/chat_api', (req, res) => {
        console.log('[LOG] hookChanges', JSON.stringify(req))
        res.send(req)
    })
  },

}