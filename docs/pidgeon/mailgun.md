# Mailgun

[Mailgun](mailgun.com) is a service for sending transactional emails.

## Config

Every Mailgun request requires the following config:

```json5
// POST 
// Content-Type: application/json
{
  "config": { 
    "mailgunApiKey": "MAILGUN_API_KEY", // {string} Your Mailgun API Key
    "mailgunDomain": "MAILGUN_DOMAIN" // {string} Your Mailgun Domain
  },
  "payload": { 
    // Function specific payload
  }
}
```

## Send single email

Example:

```json5
// POST https://pidgeon-api.pollygot.com/v1/mailgun/sms/send?apiKey=YOUR_API_KEY
// Content-Type: application/json
{
  "config": { 
    // Mailgun config
  },
  "payload": { 
    "to": "...",        // {string} The phone number of the person you are sending
    "from": "...",      // {string} Your twilio number
    "subject": "...",   // {string} The actual content of the text
    "text": "...",      // {string} The actual content of the text
  }
}
```