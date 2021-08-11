---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "{{ replace .Name "-" " " | title }}"
linktitle: "{{ replace .Name "-" " " | title }}"
summary:

publishDate: {{ .Date }}
draft: false  # Is this a draft? true/false
authors: []
categories: []
tags: []
# Add menu entry to sidebar.
# - Substitute `example` with the name of your course/documentation folder.
# - name: Declare this menu item as a parent with ID `name`.
# - parent: Reference a parent ID if this page is a child.
# - weight: Position of link in menu.
menu:
  example:
    name: YourParentID
    # parent: YourParentID
    weight: 1
---
