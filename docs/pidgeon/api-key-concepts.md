---
description: Key concepts
---

# Key concepts

Pidgeon is a RESTful interface. All requests are sent to:

```
https://pidgeon-api.pollygot.com?apiKey=YOUR_API_KEY
```


## API Key

Every request requires an API Key 

## Payload

Every request also requires the following elements:

```json
{
  "config": {},
  "payload": {}
}
```
- `config` is app specific
- `payload` is the data required
