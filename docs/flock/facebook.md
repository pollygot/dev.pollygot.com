---
metaTitle: Facebook | Flock by Pollygot
lang: en-US
---

# Facebook

A RESTful API for interacting with [Facebook](https://developers.facebook.com/tools/).

## Base URL

```
https://flock-api.pollygot.com/v1/facebook/...?apiKey=YOUR_API_KEY
```

## Config

Every Facebook request requires the following config:

```json5
// POST 
// Content-Type: application/json
{
  "config": { 
    "facebookAccessToken": "",  // {string} 
    "facebookVerifyToken": "",  // {string} 
    "facebookAppSecret": ""     // {string} 
  },
  "payload": { 
    // Function specific payload
  }
}
```

## Send to private group 

In case you are looking, it is not possible to send a direct message to a group unless you use a Bot that has been invited into the group first. The closest you can do via an API is send to a feed/wall.


## Send to Feed

Sending to a "feed" or "wall".

```json5
// POST https://flock-api.pollygot.com/v1/facebook/feed/send?apiKey=YOUR_API_KEY
// Content-Type: application/json
{
  "config": { 
    // Facebook config
  },
  "payload": { 
    "feedId": "",   // {string} The ID of the Feed/Wall
    "message": "",  // {string} The text that you want to post on the wall
  }
}
```