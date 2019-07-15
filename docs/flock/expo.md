---
metaTitle: Expo | Flock by Pollygot
lang: en-US
---

# Expo

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
    "to": "...",          // {string} An Expo push token specifying the recipient of this message.
    "data": {},           // {object}? A JSON object delivered to your app.
    "title": "...",       // {string}? The title to display in the notification.
    "body": "...",        // {string}? The message to display in the notification
    "ttl": "...",         // {number}? Time to Live: the number of seconds for which the message may be kept around for redelivery if it hasn't been delivered yet.
    "expiration": "...",  // {number}? A timestamp since the UNIX epoch specifying when the message expires.
    "priority": "...",    // {'default' | 'normal' | 'high'}? The delivery priority of the message.

    // iOS-specific fields
    "badge": 0,           // {number}? Number to display in the badge on the app icon. Specify zero to clear the badge.
    "sound": "...",       // {'default' | null}? A sound to play when the recipient receives this notification.

    // Android-specific fields
    "channelId": "...",    // {string}? The message to display in the notification
  }
}
```


## Send batch Push Notification

To send a multiple Push Notifications in one go, simply change the `payload` to an array of objects. For example

```json5
// POST https://flock-api.pollygot.com/v1/nexmo/sms/send?apiKey=YOUR_API_KEY
// Content-Type: application/json
{
  "config": { 
    // Expo config
  },
  "payload": [
    { "to": "ExponentPushToken[xxxxxxxxxxxxxxxxxxxxxx]", "body": "Hello world!" },
    { "to": "ExponentPushToken[xxxxxxxxxxxxxxxxxxxxxx]", "body": "You've got mail" }
  ]
}
```
