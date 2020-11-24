const dotenv = require ('dotenv');
dotenv.config();

const AssistantV1 = require('ibm-watson/assistant/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
const assistant = new AssistantV1({
    version: process.env.VERSION,
    authenticator: new IamAuthenticator({
        apikey: process.env.API_KEY,
        serviceUrl: process.env.SERVICE_URL,
        disableSslVerification: true,
    }),
});
assistant.message({ 
        input: { text: '' },
        workspaceId: process.env.WORKSPACE_ID,
        },
        function(err, response) { 
            if (err)
            { console.error(err); }
            else { console.log(JSON.stringify(response, null, 2)); }
        }
);