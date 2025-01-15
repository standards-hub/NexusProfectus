---
layout: doc
title: Meeting Minutes Integration
description: Visual representation of a MM App integrated into a existing website
---

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
    - name: "id"
      title: "Topic ID"
      filter: false
      query: false
      hide: false
      sortable: false
      type: text
    - name: "title"
      title: "Title"
      filter: false
      query: false
      hide: false
      sortable: false
      type: text
    - name: "meetingID"
      title: "Meeting ID"
      filter: true
      query: true
      hide: false
      sortable: false
      type: text
    - name: "group"
      title: "Group"
      filter: true
      query: true
      hide: false
      sortable: false
      type: text
    - name: "releaseVersion"
      title: "Release Version"
      filter: true
      query: true
      hide: false
      sortable: false
      type: text
    - name: "discussed"
      title: "Discussed"
      filter: true
      query: false
      hide: false
      sortable: false
      type: text
    - name: "attendees"
      title: "Attendees"
      filter: false
      query: true
      hide: false
      sortable: false
      type: text
  header: FOCUS GitHub Items
  ---
  :::
::

::FilterTopic
::