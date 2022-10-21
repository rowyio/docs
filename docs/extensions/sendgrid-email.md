---
id: sendgrid-email
title: SendGrid email
slug: /extensions/sendgrid-email
---

Integrates with SendGrid to simplify sending emails

### Secret Manager setup:

Navigate to [Google Secret Manager](https://cloud.google.com/secret-manager)and add a new secret
Secret Name: `sendgrid`

Secret Value:

```
SENDGRID_API_KEY
```

## Usage

Below is an example of how we send invite emails.

The return object needs to be compliant with
[SendGrid V3 request body](https://sendgrid.api-docs.io/v3.0/mail-send/v3-mail-send)

```typescript
const extensionBody: SendgridEmailBody = async ({ row, db, change, ref }) => {
  return {
    // send from field
    from: "Rowy<welcome@rowy.app>",
    personalizations: [
      {
        // recipient
        to: [{ email: row.email }],
        // template parameters
        dynamic_template_data: {
          inviterName: row.inviter.displayName,
          inviteLink: `https://${row.projectId}.rowy.app/signup?email=${row.email}`,
          projectId: row.projectId,
        },
      },
    ],
    // sendgrid template ID
    template_id: "d-72072f3se34841e67daa0484fbb377d5",
    // helper info to categorise sendgrid emails
    categories: ["invites"],
  };
};
```
