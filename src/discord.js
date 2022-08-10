const Client = require('discord-oauth2-api');
const client = new Client({
    clientID: '1006576126925230090',
    clientSecret: 'vhD2QgeIDdsGBGKzQ7ZUsPsaiGgfJNX6',
    scopes: ['identify', 'guilds'],
    redirectURI: 'http://127.0.0.1:5173/login'
});