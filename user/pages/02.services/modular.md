---
title: 'Editing Services'
metadata:
    description: Find the rates and services offered by Book Light Editorial, a freelance editing company that does developmental editing and copyediting
    keywords: editing, freelance, publishing, writing, author, indie author, editor, self-publishing, developmental editing, copyediting, manuscript, services
sitemap:
    changefreq: monthly
    priority: 1.0
header_image: book_light_editorial_printerkey2_banner.png
onpage_menu: false
body_classes: modular
content:
    items: '@self.modular'
    order:
        by: default
        dir: asc
        custom:
            - _services
            - _quick-form
            - _bottom-content
form:
    action: /services
    name: Quick Contact Form
    fields:
        - name: name
          label: Name
          placeholder: Enter your name
          autofocus: on
          autocomplete: on
          type: text
          validate:
            required: true
        - name: email
          label: Email
          placeholder: Enter your email address
          autocomplete: on
          type: email
          validate:
            required: true
        - name: service
          id: service-select
          label: Service
          type: select
          options:
            developmental: Developmental Editing
            assessment: Manuscript Assessment
            partial: Partial Developmental Edit Package
            coaching: Writing Coach
            second: Second-Read Review
            copy: Manuscript Copyedit
            unsure: Not sure yet...
          validate:
            required: true
        - name: message
          label: Message
          placeholder: Enter your message
          type: textarea
          validate:
            required: true
        - name: honeypot
          type: honeypot
    buttons:
        - type: submit
          value: Submit
        - type: reset
          value: Reset
    process:
        - email:
            from: "{{ config.plugins.email.from }}"
            to: "{{ config.plugins.email.to }}"
            subject: "[Inquiry] {{ form.value.name|e }}"
            body: "{% include 'forms/data.html.twig' %}"
        - save:
            fileprefix: "[Inquiry] {{ form.value.name|e }} - "
            dateformat: Ymd-His-u
            extension: txt
            body: "{% include 'forms/data.txt.twig' %}"
        - message: Thank you for your interest!
        - display: _quick-form/thankyou
---
