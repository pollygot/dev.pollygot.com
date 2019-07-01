---
description: Twilio
---

# Twilio

[Twilio](twilio.com) is a service for sending SMS.

## Config

Every `twilio` request requires

- `accountSid` - Your Twilio Account SID
- `token` - Your Twilio Account Token

For example
```json5
// POST 
// Content-Type: application/json
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

## Send single SMS

To send a single SMS, ensure that the "to" inside "payload" is a single string.

```json5
// POST https://pidgeon-api.pollygot.com/v1/twilio/sms/send?apiKey=YOUR_API_KEY
// Content-Type: application/json
{
  "config": { 
    // Twilio config
  },
  "payload": { 
    "to": "...",    // {string} The phone number of the person you are sending
    "from": "...",  // {string} Your twilio number
    "body": "...",  // {string} The actual content of the text
  },
}
```


## Send batch SMS

Twilio doesn't actually support sending batch messages so Pidgeon provides a convenience function.

To send multiple SMS, ensure that the "to" inside "payload" is an array of strings.

```json5
// POST https://pidgeon-api.pollygot.com/v1/twilio/sms/send?apiKey=YOUR_API_KEY
// Content-Type: application/json
{
  "config": { 
    // Twilio config
  },
  "payload": { 
    "to": ["...", "..."], // {string[]} A list of phone numbers 
    "from": "...",        // {string} Your twilio number
    "body": "...",        // {string} The actual content of the text
  },
}
```