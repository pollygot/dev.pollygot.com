---
metaTitle: Nexmo | Flock by Pollygot
lang: en-US
---

# Nexmo

A RESTful API for interacting with [Expo](https://docs.expo.io/versions/latest/).

## Base URL

```
https://flock-api.pollygot.com/v1/expo/...?apiKey=YOUR_API_KEY
```

## Config

Every Expo request requires the following config:

```json5
// POST 
// Content-Type: application/json
{
  "config": { 
    // No config required!
  },
  "payload": { 
    // Function specific payload
  }
}
```

## Send single Push Notification

To send a single Push Notification, ensure that the "to" inside "payload" is a single string.

```json5
// POST https://flock-api.pollygot.com/v1/nexmo/sms/send?apiKey=YOUR_API_KEY
// Content-Type: application/json
{
  "config": { 
    // Expo config
  },
  "payload": { 
    "to": "...",      // {string} Expo 
    "title": "...",   // {string} Title
    "body": "...",    // {string} Content
    "data": {},       // [{object}] Data 
    "badge": 0,       // [{number}] Badge count
  }
}
```
