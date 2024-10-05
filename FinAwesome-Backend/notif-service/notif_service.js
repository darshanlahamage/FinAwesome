const serverless = require("serverless-http");
const express = require("express");
const app = express();
app.use(express.json())
const AWS=require('aws-sdk')
const creds=new AWS.SharedIniFileCredentials({profile:'default'})
const sns=new AWS.SNS({creds,region:'ap-south-1'})

app.get("/status", (req, res, next) => {
  return res.status(200).json({
    status:"ok",
    sns
  });
});

app.post('/subscribe', (req, res) => {
  
  let params = {
      Protocol: 'EMAIL', 
      TopicArn: 'your-arn:finnotify',
      Endpoint: req.body.email
  };

  sns.subscribe(params, (err, data) => {
      if (err) {
          console.log(err);
      } else {
          console.log(data);
          return res.status(201).json(data);
      }
  });
});
app.post('/publish', (req, res) => {
  let params = {
      Message: req.body.message,
      Subject: "Latest Offers ! Checkout FinAwesome",
      TopicArn: 'your-arn:finnotify'
  };

  sns.publish(params, function(err, data) {
      if (err) console.log(err, err.stack); 
      else return res.status(201).json(data);
  });
});

// app.post('/unsubscribe', (req, res) =>{
//   let params = {
//     Protocol: 'EMAIL', 
//     TopicArn: 'arn:aws:sns:ap-south-1:975050103500:finnotify',
//     Endpoint: req.body.email
// };
//    sns.unsubscribe(params, (err,data)=>{
//     if(err){
//       console.log('Error - ',err);
//     }else{
//       console.log(data);
//       return res.status(201).json(data);
//     }
//    })
// })

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
