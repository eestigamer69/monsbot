const axios = require("axios");
require("dotenv").config();

const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

app.command("/monsbot-ping", async ({ command, ack, respond }) => {
  await ack();
  await respond({ text: `LEAVE ME ALONE` });
});

app.command("/monsbot-hello", async ({ command, ack, respond }) => {
  await ack();
  await respond({ text: `Haiiii!! :3` });
});

app.command("/monsbot-phm", async ({ command, ack, respond }) => {
  await ack();
  await respond({ text: `Rocky is happy. Good good good` });
});

app.command("/monsbot-joke", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
    await respond({
      text:
`${response.data.setup}

${response.data.punchline}`
    });
  } catch (err) {
    await respond({ text: "Failed to fetch a joke." });
  }
});

app.command("/monsbot-help", async ({ ack, respond }) => {
  await ack();
  await respond({
    text:
`Available Commands:
/monsbot-ping - ping monsbot
/monsbot-hello - greet monsbot
/monsbot-phm - rocky status
/monsbot-joke - monsbot tries comedy`
  });
});

(async () => {
  await app.start();
  console.log("bot is running!");
})();