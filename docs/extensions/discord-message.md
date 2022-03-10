---
id: discord-message
title: Discord message
slug: /extensions/discord-message
---

Sends discord messages every time there is an update to selected fields of your database. 

### General Discord webhook URL
Use the [Discord guide](https://discordjs.guide/popular-topics/webhooks.html#creating-webhooks-through-server-settings) on how to create webhook URL for your server/channel to which you want to post the message to. This generated URL will be used in the code below.

### Usage

- Add a task extension
- Select CRUD operations that you want to trigger this extension on
- Select the conditions you want to be met (if any) in addition to the selected CRUD operation for the extension to be triggered (for example, required fields, special conditions for the data etc)
- Update the body of the task extension with the following code snippet for sending Discord message.

```typescript
const discordMessage: TaskBody = async ({ row, db, change, ref }) => {
  
  const webhookURL = "<Generated Discord Webhook URL>"
  // create the message you would like to send 
  const content = `**CUSTOM MESSAGE**
                    Sender: ${row.name}
                    URL: ${row.URL} 
                    ** anything else you want to add!`
  return fetch(webhookURL,
    {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({content})
    }).then(async resp => {
      const result = await resp.json()
      if (resp.ok) console.info(result)
      else console.error(result)
    })
}

```
