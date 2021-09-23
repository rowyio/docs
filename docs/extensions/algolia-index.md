---
id: algolia-index
title: AlgoliaIndex
sidebar_label: AlgoliaIndex
slug: /extensions/algolia-index
---

# AlgoliaIndex

An extension for syncing data for Algolia

### GCP Secret Manager setup:

Secret Name: ```algolia```

Secret Value: 
```json
{
    "appId":"YOUR_ALGOLIA_APP_ID",
    "adminKey":"YOUR_ALGOLIA_ADMIN_KEY",
    "searchKey":"YOUR_ALGOLIA_SEARCH_KEY"
}
```

## Usage

```typescript
const extensionBody: AlgoliaIndexBody = async({row, db, change, ref}) => {
 
   // you can modify the data passed in the row before syncing
  
  return ({
    fieldsToSync: [],    // a list of string of column names that would be synced to algolia
    row: row,    // object of data to sync, usually the row itself
    index: "",    // algolia index to sync to
    objectID: ref.id,    // algolia object ID, ref.id is one possible choice
  })
}
```