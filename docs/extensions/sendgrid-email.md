---
id: sendgrid-email
title: SendGrid Email
sidebar_label: SendGrid Email
slug: /extensions/sendgrid-email
---

Integrates with SendGrid to simplify sending emails

### Secret Manager setup:

Secret Name: ```sendgrid```

Secret Value: 
```
SENDGRID_API_KEY
```

## Usage

below is an example of we send invite emails
the return object needs to be compliant with [SendGrid V3 request body](https://sendgrid.api-docs.io/v3.0/mail-send/v3-mail-send) 

```typescript
const extensionBody: SendgridEmailBody = async({row, db, change, ref}) => {
  return ({
    from: "Rowy<welcome@rowy.app>",   // send from field
    personalizations: [
        {
            to: [{ email: row.email }],  // recipient
            dynamic_template_data: {
              inviterName:row.inviter.displayName,
              inviteLink:`https://${row.projectId}.rowy.app/signup?email=${row.email}`,
              projectId:row.projectId,
            },  // template parameters
        },
    ],
    template_id: "d-72072f3se34841e67daa0484fbb377d5",    // sendgrid template ID
    categories: ["invites"], // helper info to categorise sendgrid emails
  })
}
```