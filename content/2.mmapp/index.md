---
title: Meeting Minutes App
description: Visual representation of a MM App as a standalone one-page website UI
---

[Go back](/mmintegration)

::ShSegment
---
ui:
    wrapper: bg-neutral-800 rounded-xl
---
  :::ShDynamicTable
  ---
  dataUrl: "/data/meetingRegister.json"
  transformRawData: "filterTopic"
  dataField: ''
  columns:
    - name: "Groups"
      title: "Groups"
      filter: false
      query: true
      hide: false
      sortable: false
      type: text
    - name: "Dates"
      title: "Dates"
      filter: false
      query: true
      sortable: true
      type: number
    - name: "Attendees"
      title: "Attendees"
      hide: true
      filter: false
      query: true
      sortable: true
      type: text
    - name: "Release Version"
      title: "Rel Version"
      hide: true
      filter: true
      query: true
      sortable: true
      type: text
    - name: "Minnutes"
      title: "Minutes"
      filter: false
      query: false
      sortable: true
      type: text
    - name: "topics"
      title: "Topics"
      filter: true
      query: true
      sortable: true
      type: text
    - name: "Item"
      title: "Item"
      filter: false
      query: false
      sortable: true
      type: number
    - name: "Resources"
      title: "Resources"
      filter: false
      query: false
      sortable: false
      type: text
  header: FOCUS GitHub Items
  ---
  :::
::