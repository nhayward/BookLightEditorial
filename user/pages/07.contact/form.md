---
title: Contact
form:
    name: contact-form
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
          label: Service
          placeholder: Choose the service you're looking for
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
        - name: g-recaptcha-response
          label: Captcha
          type: captcha
          recaptcha_site_key: 6Le2RRsUAAAAAKI4p5Fgbm3gj8vdB_jvKYGeeifO
          recaptcha_not_validated: 'Captcha not valid!'
          validate:
            required: true
    buttons:
        - type: submit
          value: Submit
        - type: reset
          value: Reset
    process:
        - captcha:
            recaptcha_secret: 6Le2RRsUAAAAAGEXzoCTMEYQ_y3qGdFNf66d15PE
        - email:
            from: "{{ config.plugins.email.from }}"
            to: "{{ config.plugins.email.to }}"
            subject: "[Inquiry] {{ form.value.name|e }}"
            body: "{% include 'forms/data.html.twig' %}"
        - save:
            fileprefix: inquiry-
            dateformat: Ymd-His-u
            extension: txt
            body: "{% include 'forms/data.txt.twig' %}"
        - message: Thank you for your interest!
        - display: thankyou
---

**Do you have any questions?**

Please send me a message and I promise I will get back to you within one business day!

If you are looking for an estimate, include an approximate word count, type of story/genre, and what services you have your eye on.