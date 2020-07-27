
// const ChatApiSdk = require('chat_api_sdk');
// const axios = require('axios')

const tmpData = {
  data: null
}

export default {
  load(app){

    // const defaultClient = ChatApiSdk.ApiClient.instance;
    // console.log("defaultClient", defaultClient)

    // Configure API key authorization: instanceId
    // const instanceId = defaultClient.authentications['instanceId'];
    // instanceId.apiKey = "instance154076"

    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //instanceId.apiKeyPrefix['instanceId'] = "Token"
    // Configure API key authorization: token
    // const token = defaultClient.authentications['token'];
    // token.apiKey = "j2pm4q777tr4udtk"

    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //token.apiKeyPrefix['token'] = "Token"

    // const api = new ChatApiSdk.Class1InstanceApi

    // var callback = function(error, data, response) {
    //   if (error) {
    //     console.error(error);
    //   } else {
    //     console.log('API called successfully. Returned data: ' + data);
    //   }
    // };
    // api.expiry(callback);

    // this.sendMessage(app, api)
    // this.getCodeQR(app, api)



    this.statusConenction(app)
    this.hookChanges(app)
  },
  statusConenction(app){
    app.get('/connect', (req, res) => res.send('Connected'))
  },
  hookChanges(app){
    app.post('/mywebhook/chat_api', (req, res) => {
        console.log('[LOG] hookChanges', req)
        // tmpData.data = req.data
        res.send(req)
    })
  },








  // sendMessage(app, api){
  //   app.get('/chat', (req, res) => res.send('Test started'))
  // },
  // getCodeQR(app, api){
  //   app.get('/qr/code', (req, res) => {
  //     axios.get('https://api.chat-api.com/instance154076/qr_code?token=j2pm4q777tr4udtk').then((r) => {
  //       console.log('getCodeQR', r.data)
  //       res.send(r.data)
  //     }).catch((e) => {
  //       res.send(e)
  //     })
  //   })
  // },

}