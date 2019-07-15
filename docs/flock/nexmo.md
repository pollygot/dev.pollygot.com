---
metaTitle: Nexmo | Flock by Pollygot
lang: en-US
---

# Nexmo

A RESTful API for interacting with [Nexmo](https://www.nexmo.com/).

## Base URL

```
https://flock-api.pollygot.com/v1/nexmo/...?apiKey=YOUR_API_KEY
```

## Config

Every Nexmo request requires the following config:

```json5
// POST 
// Content-Type: application/json
{
  "config": { 
    "nexmoApiKey": "",  // {string} 
    "nexmoApiSecret": ""  // {string}
  },
  "payload": { 
    // Function specific payload
  }
}
```

## Send single SMS

To send a single SMS, ensure that the "to" inside "payload" is a single string.

```json5
// POST https://flock-api.pollygot.com/v1/nexmo/sms/send?apiKey=YOUR_API_KEY
// Content-Type: application/json
{
  "config": { 
    // Nexmo config
  },
  "payload": { 
    "to": "...",    // {string} The phone number of the person you are sending
    "from": "...",  // {string} Your twilio number
    "text": "...",  // {string} The actual content of the text
  }
}
```

## Send batch SMS

Nexmo doesn't actually support sending batch messages so Flock provides a convenience function.

To send multiple SMS, ensure that the "to" inside "payload" is an array of strings.

```json5
// POST https://flock-api.pollygot.com/v1/twilio/sms/send?apiKey=YOUR_API_KEY
// Content-Type: application/json
{
  "config": { 
    // Nexmo config
  },
  "payload": { 
    "to": ["...", "..."], // {string[]} A list of phone numbers 
    "from": "...",        // {string} Your twilio number
    "text": "...",        // {string} The actual content of the text
  }
}
```