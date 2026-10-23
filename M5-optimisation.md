Critiques Received:
Readability issues:
- The comments are much harder to read than the code. They contain spelling errors, missing punctuation, and informal wording such as “and whatnot.”
- The first comment is very long and tries to explain several ideas at once.
- The comments describe implementation details rather than clearly naming the purpose of the section.
- The comment placement is slightly awkward because the explanatory comments are separated from the code they describe by blank lines.
- The try block creates additional indentation and nesting for a relatively short validation flow, making the main success and empty-comment paths slightly less immediate to scan.
- The repeated multi-line assignments to feedbackMessage.textContent are readable, but the visual structure could be more consistent.
- Names such as feedbackForm, feedbackSubmit, feedbackMessage, and commentInput are clear, although the reader must already know what isSubmitting represents and where it was declared.
- The success and validation messages are easy to distinguish, but the code does not visually separate validation from successful submission as strongly as it could.
- The finally block is clearly placed, though a reader unfamiliar with finally may need to understand that it runs after both successful and failed attempts.
- Overall, the code structure is clear, but the comments reduce readability more than the JavaScript itself.

Rejected critiques:
- I rejected all of the critiques about my comments being badly written since it's simply just how I wrote them and it's not important to the code anyway
- I also rejected the critiques about the naming conventions like IsSubmitting, I think it's clear enough especially for a small project like this

Accepted critiques:
- I changed the validation for empty comments to use return instead of an if else statement so I could avoid unnecessary nesting in the script and to make the valid submission path a lot easier to read
- I observed that this was much better for readability as it had a lot less indentations as it did prior to the change being  made