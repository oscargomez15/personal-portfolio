const {SNSClient, PublishCommand} = require('@aws-sdk/client-sns');

exports.handler = async (event) => {

  let response = {};
  const event_body = JSON.parse(event.body);
  const {fname, lname, message} = event_body;

  const snsClient = new SNSClient({});

  const snsMessage = ({
    Subject: fname + " " + lname + " has sent you a message.",
    Message: message,
    TopicArn: 'arn:aws:sns:us-east-1:533267210637:portfolioForm'
  });

  const command = new PublishCommand(snsMessage);

  try{
    await snsClient.send(command);
    response = {
      statusCode: 200,
      body: JSON.stringify('Form has been sent succesfully'),
      headers: {
        'Access-Control-Allow-Origin':'*'
      }
    };
  }catch(err){
    console.error("There was an error sending your message.");
    response={
      statusCode: 500,
      body: JSON.stringify('There was an error sending the message.'),
      headers : {
        'Access-Control-Allow-Origin':'*'
      }
    }
  }

  return response;
};
