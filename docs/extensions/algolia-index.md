---
id: algolia-index
title: Algolia index
slug: /extensions/algolia-index
---

An extension for syncing data for Algolia

### GCP Secret Manager setup:

Navigate to [Google Secret Manager](https://cloud.google.com/secret-manager) and add a new secret 
Secret Name: `algolia`

Secret Value:

```json
{
  "appId": "YOUR_ALGOLIA_APP_ID",
  "adminKey": "YOUR_ALGOLIA_ADMIN_KEY",
  "searchKey": "YOUR_ALGOLIA_SEARCH_KEY"
}
```

## Usage

```typescript
const extensionBody: AlgoliaIndexBody = async ({ row, db, change, ref }) => {
  // you can modify the data passed in the row before syncing

  return {
    // a list of string of column names that would be synced to algolia
    fieldsToSync: [],
    // object of data to sync, usually the row itself
    row: row,
    // algolia index to sync to
    index: "",
    // algolia object ID, ref.id is one possible choice
    objectID: ref.id,
  };
};
```
