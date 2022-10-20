---
id: twilio-message
title: Twilio message
slug: /extensions/twilio-message
---

Integrates with twilio to simplify sending SMS/Whatsapp messages

### Secret Manager setup:

Navigate to [Google Secret Manager](https://cloud.google.com/secret-manager) and add a new secret
Secret Name: `twilio`

Secret Value:

```json
{
  "accountSid": "TWILIO_SID",
  "authToken": "TOKEN"
}
```

## Usage

```typescript
const extensionBody: TwilioMessageBody = async ({ row, db, change, ref }) => {
  /**
   You can add any code logic here to be able to customize your message
   or dynamically get the from or to numbers
  **/
  return {
    body: "Hi there", // message text
    from: "+15017122661", // from phone number registered on twilio
    to: "+15558675310", // recipient phone number
  };
};
```
