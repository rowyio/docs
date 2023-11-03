---
id: algolia-index
title: Algolia index
slug: /extensions/algolia-index
---

import algolia1 from './assets/algolia1.png'; import algolia2 from
'./assets/algolia2.png'; import algolia3 from './assets/algolia3.png';

The **Algolia Extension** is an extension for syncing data fields to an Algolia
Index.

<img src={algolia3} alt="Algolia Extension" />

## GCP Secret Manager Setup

Navigate to the
[Google Cloud Secret Manager](https://cloud.google.com/secret-manager) and
create a new secret with the following details:

Secret Name: `algolia`

Secret Value:

```json
{
  "appId": "YOUR_ALGOLIA_APP_ID",
  "adminKey": "YOUR_ALGOLIA_ADMIN_KEY",
  "searchKey": "YOUR_ALGOLIA_SEARCH_KEY"
}
```

## Working

<img src={algolia2} alt="Algolia Index" />

The DocSync extension accepts three properties:

- `fieldsToSync`: It is an array of strings representing the fields in row that
  should be synced to the Algolia Index.

- `row`: It is an object representing a row of data. It is the data that is
  being synced.

- `index`: It is a string representing the name of the Algolia Index to which
  the data is being synced. You can create a new index in the
  [Algolia dashboard](https://dashboard.algolia.com/).

- `objectID`: It is a string representing the objectID of the Algolia Index to
  which the data is being synced.

### Working based on trigger types

The extension will sync and update the Algolia Index based on its trigger type,
which is defined in the extension's configuration modal.

<img src={algolia1} alt="Algolia Extension Modal" />

## Usage

```js
const extensionBody: AlgoliaIndexBody = async ({ row, db, change, ref }) => {
  // you can modify the data passed in the row before syncing

  return {
    // a list of string of column names that would be synced to algolia
    fieldsToSync: ["field1", "field2"],
    // object of data to sync, usually the row itself
    row: row,
    // algolia index to sync to
    index: "algoliaIndex1",
    // algolia object ID, ref.id is one possible choice
    objectID: ref.id,
  };
};
```
