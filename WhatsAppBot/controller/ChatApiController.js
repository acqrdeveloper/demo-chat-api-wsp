
let tmpData = null

export default {
  load(app){
    this.statusConenction(app)
    this.hookChanges(app)
    this.getData(app)
  },
  statusConenction(app){
    app.get('/connect', (req, res) => res.send('Connected'))
  },
  hookChanges(app){
    tmpData = null
    app.post('/mywebhook/chat_api', (req, res) => {
        console.log('[LOG] hookChanges', req.body)
        tmpData = req.body
        res.send(req.body)
    })
  },
  getData(app){
    app.get('/mywebhook/chat_api/data', (req, res) => {
      // console.log('[LOG] hookChanges', req.body)
      res.send(tmpData)

      tmpData = null
    })
  },
}