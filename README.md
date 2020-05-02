# Automate messages.google.com using Puppeteer

Allow sending SMS's from my computer using Android Messages

## To use

Set your specific values for path to Google Chrome and profile dir

```javascript
{
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
    userDataDir:
      "/Users/jmcd/Library/Application Support/Google/Chrome/Profile 1",
}
```

## Before using

Log into messages.google.com and authenticate and remember the session so the browser will auto login in to messages

Phone needs to be awake and on your Wi-Fi

Open message.js and edit your message

```js
const message = `Hi {FIRSTNAME},
Thanks so much to you and all for being a part of events today.

WCL
James`;
```

Add mobile numbers firstname lastname separated by tabs to `people.txt`

```tsv
Phone	FirstName	LastName
0428964633	James	McDonald
```

Run using npm

```

npm run start

```
