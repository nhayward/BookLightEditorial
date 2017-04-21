---
title: Contact
heading: 'Do you have any questions?'
form:
    name: 'Contact Form'
    fields:
        -
            name: name
            label: Name
            placeholder: 'Enter your name'
            autocomplete: 'on'
            type: text
            validate:
                required: true
        -
            name: email
            label: Email
            placeholder: 'Enter your email address'
            autocomplete: 'on'
            type: email
            validate:
                required: true
        -
            name: service
            label: Service
            placeholder: 'Choose the service you''re looking for'
            type: select
            options:
                developmental: 'Developmental Editing'
                coaching: 'Writing Coaching'
                assessment: 'Manuscript Assessment'
                ebook: 'E-book Quality Assurance'
                unsure: 'Not sure yet...'
            validate:
                required: true
        -
            name: message
            label: Message
            placeholder: 'Enter your message'
            type: textarea
            validate:
                required: true
        -
            name: honeypot
            type: honeypot
    buttons:
        -
            type: submit
            value: Submit
        -
            type: reset
            value: Reset
    process:
        -
            email:
                from: '{{ config.plugins.email.from }}'
                to: '{{ config.plugins.email.to }}'
                subject: '[Inquiry] {{ form.value.name|e }}'
                body: '{% include ''forms/data.html.twig'' %}'
        -
            save:
                fileprefix: '[Inquiry] {{ form.value.name|e }} - '
                dateformat: Ymd-His-u
                extension: txt
                body: '{% include ''forms/data.txt.twig'' %}'
        -
            message: 'Thank you for your interest!'
        -
            display: thankyou
---

Please send us a message and we will get back to you within 1-2 business days!

If you are looking for an estimate, include an approximate word count, type of story/genre, and what services you have your eye on. The more information you give us, the better!

We look forward to hearing from you!
