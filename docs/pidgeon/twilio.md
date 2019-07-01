---
description: Twilio
---

# Twilio

[Twilio](twilio.com) is a service for sending SMS.

## Config

Every Twilio request requires the following config:

```json5
// POST 
// Content-Type: application/json
{
  "config": { 
    "accountSid": "TWILIO_ACCOUNT_SID", // {string} Your Twilio Account SID
    "token": "TWILIO_TOKEN" // {string} Your Twilio Account Token
  },
  "payload": { 
    // Function specific payload
  }
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
  }
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
  }
}
```