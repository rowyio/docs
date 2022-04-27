---
id: slack-message
title: Slack message
slug: /extensions/slack-message
---

Sends slack messages,

### Secret Manager setup:

Secret Name: `slack`

Secret Value:

```json
{
  "token": "SLACK_APP_TOKEN",
  "signingKey": "YOUR_SLACK_APP_SIGNING_KEY"
}
```

### Usage

```typescript
const extensionBody: SlackMessageBody = async ({ row, db, change, ref }) => {
  return {
    channels: [], // a list of slack channel IDs in string
    blocks: [], // the blocks parameter to pass in to slack api
    text: "", // the text parameter to pass in to slack api
    attachments: [], // the attachments parameter to pass in to slack api
  };
};
```
