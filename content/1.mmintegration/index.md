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
::ShDynamicTable
---
dataUrl: "/data/meetingRegister.json"
dataField: ''
columns:
  - name: "type"
    title: "Groups"
    filter: true
    query: true
    hide: false
    sortable: false
    type: text
  - name: "number"
    title: "Dates"
    filter: true
    query: true
    sortable: true
    type: number
  - name: "title"
    title: "Attendees"
    hide: true
    filter: true
    query: true
    sortable: true
    type: text
  - name: "title"
    title: "Rel Version"
    hide: true
    filter: true
    query: true
    sortable: true
    type: text
  - name: "title"
    title: "Minutes"
    filter: false
    query: true
    sortable: true
    type: text
  - name: "title"
    title: "Topics"
    filter: true
    query: true
    sortable: true
    type: text
  - name: "title"
    title: "Item"
    filter: false
    query: true
    sortable: true
    type: number
  - name: "title"
    title: "Resources"
    filter: false
    query: true
    sortable: false
    type: text
header: FOCUS GitHub Items
---
::
::

::FilterTopic
::