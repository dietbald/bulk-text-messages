# Automate messages.google.com using Puppeteer

Allow sending SMS's from my computer using Android Messages

## To use

Set your specific values for path to Google Chrome and profile dir

```javascript
{  executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
    userDataDir:
      "/Users/jmcd/Library/Application Support/Google/Chrome/Profile 1",
}
```

Before using log into messages for web and authenticate and remember the session so the browser will auto login in to messages

Phone needs to be awake and on your Wi-Fi

Open message.js and edit your message and add an array of mobile numbers. Run using npm

```

npm run start

```
