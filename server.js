const express = require('express');
const bodyParser = require('body-parser');//  helper for web applications
const mailgun = require('mailgun-js');
const path = require('path')
const apiKey = 'key-82059f30a91f1412a6df3b53349b1f61';
const domain = 'sandbox672f92f782c042818049a55652aac2a3.mailgun.org';
const cors = require("cors")

const app = express(); // this line gives the name to express as app and it is preparing a workspace before I build a code.
const mg = mailgun({ apiKey, domain });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })) 

app.use(cors());
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/subscribe', async (req, res) => {
    try {
        const { email } = req.body;

        
        const data = {
            from: 'khushivohra4875.be22@chitkara.edu.in',
            to: email,
            subject: 'Welcome to DEV@Deakin!',
            text: 'Thank you for joining DEV@Deakin!',
        };
        
        mg.messages().send(data, (error, body) => {
            if (error) {
                console.error('Error sending welcome email:', error);
                res.status(500).json({ message: 'An error occurred.' });
            } else {
                res.status(200).json({ message: 'Welcome email sent successfully.' });
            }
        });
    } catch (error) {
        console.error('Error sending welcome email:', error);
        res.status(500).json({ message: 'An error occurred.' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});