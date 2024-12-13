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
dataUrl: "https://raw.githubusercontent.com/OpenMobileAlliance/lwm2m-registry/prod/DDF.xml"
transformRawData: "filterDDFObjects"
dataField: ''
columns:
  - name: "SourceStr"
    title: "Source"
    filter: true
    query: true
    hide: true
    sortable: false
    type: text
  - name: "URN"
    title: "URN | Version"
    filter: false
    query: true
    sortable: false
    type: text
  - name: "xmlEditor"
    title: "XML Name"
    filter: false
    query: false
    sortable: false
    type: text
  - name: "lwm2mEditor"
    title: "LwM2M Editor"
    filter: false
    query: false
    sortable: false
    type: text
  - name: "Name"
    title: "Object Name"
    filter: true
    query: true
    sortable: true
    type: text
  - name: "Owner"
    title: "Owner"
    filter: true
    query: true
    sortable: true
    type: text
  - name: "Ver"
    title: "Version"
    filter: true
    query: true
    sortable: true
    type: text
  - name: "tsLink"
    title: "Technical Specification"
    filter: false
    query: true
    sortable: false
    type: text
  - name: "Description"
    title: "Description"
    filter: false
    query: true
    sortable: false
    type: text
header: OMA LwM2M Registry (Objects)
---
::
::