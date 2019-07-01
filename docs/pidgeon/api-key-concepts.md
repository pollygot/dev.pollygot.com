---
description: Key concepts
---

# Key concepts

Pidgeon is an RESTful on top of multiple notification services to overcome repetitive building and platform idiosyncrasies. 


## Always send a POST

Pidgeon does not store any of your config for external services. Because of this, every request you make must be a `POST` request that includes the config of the app that you want to use. For example, to send an SMS message via Twilio, the request would look like this:

```json5
// POST https://pidgeon-api.pollygot.com/v1/twilio/send?apiKey=YOUR_API_KEY 
// Content-Type: application/json" 
{
  "config": { 
    "accountSid": "TWILIO_ACCOUNT_SID", 
    "token": "process.env.TWILIO_TOKEN"
  },
  "payload": {
    // Function specific payload
  },
}
```

## API Keys

Every request requires an API Key. This is appended to the end of the URL:

```
https://pidgeon-api.pollygot.com/...?apiKey=YOUR_API_KEY
```

## POST Payload

Every request also requires the following elements:

```json5
{
  "config": {
    // App specific config.
    // Usually this is your credentials for the app.
  },
  "payload": {
    // Function specific data. 
    // See each app for details.
  }
}
```
