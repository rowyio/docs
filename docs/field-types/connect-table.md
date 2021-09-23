---
id: connect-table
title: Connect Table
sidebar_label: Connect Table
slug: /field-types/connect-table
---

# Connect Table Field

Connect table uses algolia indices to create a connection between tables

## Prerequisite 

You'll need to index your table data on algolia, use can use the [algoliaIndex extension](../extensions/algolia-index) to do so

## Setup

Go to the Rowy Run cloud run Configuration

Variables & Secrets

add the following variables, you should be able to find them on your Algolia dashboard
```
ALGOLIA_APPLICATION_ID
ALGOLIA_ADMIN_KEY
ALGOLIA_SEARCH_KEY
```

![Environment Variables](envVars.jpg)



## Configurations
