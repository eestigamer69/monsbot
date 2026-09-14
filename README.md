MonsBot

A simple Slack bot made as a Stardance mission project.

MonsBot is built with Node.js, Slack Bolt, and Axios. It runs in Socket Mode and provides several custom slash commands, including a joke command that fetches jokes from an external API.

Features
Command	Description
/monsbot-ping	Responds with a message telling you to leave it alone
/monsbot-hello	Greets the user
/monsbot-phm	Shows Rocky's status
/monsbot-joke	Fetches a random joke from an external API
/monsbot-help	Displays the available commands


Technologies
Node.js
Slack Bolt
Axios
dotenv
Official Joke API
Hosting

MonsBot is hosted on Nest, where it runs continuously as a background process. This allows the bot to remain connected to Slack without needing to be started manually each time.

Configuration

The bot requires two Slack tokens stored as environment variables:

SLACK_BOT_TOKEN=xoxb-your-bot-token
SLACK_APP_TOKEN=xapp-your-app-token

The tokens should never be committed to the repository.

Slack Setup

The Slack application requires:

Socket Mode enabled
A Bot Token
An App-Level Token
The required slash commands configured in the Slack application

The available slash commands are:

/monsbot-ping
/monsbot-hello
/monsbot-phm
/monsbot-joke
/monsbot-help
Running Locally

If the bot needs to be run outside of Nest, install the dependencies with:

npm install

Then start the bot with:

node index.js

If successful, the console will display:

bot is running!
Project Structure
monsbot/
├── index.js
├── package.json
├── package-lock.json
├── .env
└── .gitignore

.env contains the Slack tokens and should not be uploaded to GitHub.

How It Works

MonsBot uses Slack Bolt to listen for slash commands.

For example, /monsbot-hello causes the bot to acknowledge the command and respond with a greeting.

The /monsbot-joke command uses Axios to make a request to the Official Joke API. The API returns a random joke, which MonsBot then sends to Slack.

Purpose

This project was created as part of a Stardance mission to learn how to create a Slack bot using JavaScript, Slack's API, and an external web API.
