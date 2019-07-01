---
metaTitle: Mailgun | Pigeon by Pollygot
lang: en-US
---

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

## Sending emails

Example:

```json5
// POST https://pidgeon-api.pollygot.com/v1/mailgun/email/send?apiKey=YOUR_API_KEY
// Content-Type: application/json
{
  "config": { 
    // Mailgun config
  },
  "payload": {
    // Required
    "to": "",        // {string} A comma separated list of email addresses
    "from": "",      // {string} The email address you are sending from. Can include a name: Display Name <email@address.com>
    "subject": "",   // {string} The email subject
    "text": "",      // {string} The email content

    // Optional
    "recipientVariables": "",  // [{object}] A set of key:value pairs for mail merge. See mail merge example below
  }
}
```

## Mail merge 

If you need to send custom text for each email, you can use `recipientVariables` 

For example:

```json5
// POST https://pidgeon-api.pollygot.com/v1/mailgun/email/send?apiKey=YOUR_API_KEY
// Content-Type: application/json
{
  "config": { 
    // Mailgun config
  },
  "payload": {
    "from": "Excited User <me@samples.mailgun.org>",
    "to": "alice@example.com, bob@example.com",
    "subject": "Hey %recipient.first%",
    "text": "If you wish to unsubscribe, click http://mailgun/unsubscribe/%recipient.id%",
    "recipientVariables": {
      "alice@example.com": { "first": "Alice", "id": 1 }, 
      "bob@example.com": {"first": "Bob", "id": 2 }
    }
  }
}
```
