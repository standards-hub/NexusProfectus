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
dataUrl: "/data/focus_items.json"
dataField: ''
columns:
  - name: "type"
    title: "Type"
    filter: true
    query: true
    hide: false
    sortable: false
    type: text
  - name: "number"
    title: "Item ID"
    filter: true
    query: true
    sortable: true
    type: number
  - name: "title"
    title: "Title"
    filter: true
    query: true
    sortable: false
    type: text
header: FOCUS GitHug Items
---
::
::