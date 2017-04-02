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
            to:
              - "{{ config.plugins.email.to }}"
              - "{{ form.value.email }}"
            subject: "[Feedback] {{ form.value.name|e }}"
            body: "{% include 'forms/data.html.twig' %}"
        - save:
            fileprefix: inquiry-
            dateformat: Ymd-His-u
            extension: txt
            body: "{% include 'forms/data.txt.twig' %}"
        - message: Thank you for your interest!
        - display: thankyou
---

# My Form

Regular **markdown** content goes here...