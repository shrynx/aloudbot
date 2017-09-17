### 🎶🎧🎵 aloudbot 🎵🎧🎶
a telegram bot to share songs via spotify

## Links
https://telegram.me/aloudbot

## Usage
go to the chat or channel where you would like to post the song,

type **@aloudbot** *name of the song*

and select the song you would like to share.

The bot will then post a **spotify** song link to the chat channel.

## Fork / Clone
**Node 8+** is a prerequisite 
* git clone `https://github.com/shrynx/xiamibot.git`
* run `npm install`
* copy `.env.example` file and create two files 
  * `.env` (for production) and `.env.dev` (for development)
  * you can use same token for development and token if you prefer
* add your **telegram bot access token** and your **spotify client id** and **spotify client secret**
  * get your **telegram bot access token** using [@botfather](https://telegram.me/botfather)
  * get **spotify client id** and **spotify client secret** from [developer.spotify](https://developer.spotify.com/web-api/authorization-guide/)
* after setting environemnt variables run 
  * `npm run dev` for development
  * `npm run start` for production
  * `npm run deploy` to deploy the bot using **[now](https://zeit.co/now)**

## License

[MIT License](./LICENSE) © Shriyans Bhatnagar

---

made with 💚 using [micro-bot](https://github.com/telegraf/micro-bot)