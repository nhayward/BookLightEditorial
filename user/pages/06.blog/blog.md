---
content:
    items: '@self.children'
    order:
        by: date
        dir: desc
    limit: 10
    pagination: true

subscribe:
    fields:
        - name: email
          label: Email
          placeholder: 'Enter your email address'
          type: email
          validate:
            required: true
    buttons:
        - type: submit
          value: Subscribe
    process:
        - mailchimp:
            lists: [2186454ed1]
---