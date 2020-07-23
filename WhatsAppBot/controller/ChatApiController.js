
var ChatApiSdk = require('chat_api_sdk');

export default {
  load(app){

    var defaultClient = ChatApiSdk.ApiClient.instance;
// Configure API key authorization: instanceId
    var instanceId = defaultClient.authentications['instanceId'];
    instanceId.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//instanceId.apiKeyPrefix['instanceId'] = "Token"
// Configure API key authorization: token
    var token = defaultClient.authentications['token'];
    token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix['token'] = "Token"

    var api = new ChatApiSdk.Class1InstanceApi()
    var callback = function(error, data, response) {
      if (error) {
        console.error(error);
      } else {
        console.log('API called successfully. Returned data: ' + data);
      }
    };
    api.expiry(callback);

    this.statusConenction(app)
    this.sendMessage(app)
    this.getCodeQR(app)
  },
  statusConenction(app){
    app.get('/connect', (req, res) => res.send('Connected'))
  },
  sendMessage(app){
    app.get('/chat', (req, res) => res.send('Test started'))
  },
  getCodeQR(app){
    app.get('/chat', (req, res) => res.send('Test started'))
  },
}