---
title: Quick Contact Form
routable: false
visible: false
form:
    name: Contact Form
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
          type: email
          validate:
            required: true
        - name: service
          id: service-select
          label: Service
          type: select
          options:
            developmental: Developmental Editing
            coaching: Writing Coaching
            assessment: Manuscript Assessment
            ebook: E-book Quality Assurance
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
        - display: thankyou
---