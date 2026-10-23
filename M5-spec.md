Navigation Toggle:
Trigger: Clicking the navigation toggle button on the header on mobile viewports, as the navigation bar will remain fixed as a sidebar on desktop webview.
Expected DOM change: The navigation bar will be hidden and will only leave the logo and the navigation toggle button
Clicking the navigation toggle button again would make the navigation bar reappear.
Cases: People repeatedly clicking on the navigation toggle button, in which it will simply alternate between hidden and not hidden every click.
The user presses the Enter or Space key while the navigation toggle button is focused.

Pseudocode:
1. The script will identify the navigation toggle button and the navigation bar element in my HTML.
2. When the webpage loads on a desktop viewport, the navigation and headerbar will remain fixed on the side.
3. When the webpage loads on a mobile viewport, phone or tablet, the navigation and headerbar will initially appear at the top of the webpage.
4. When the user clicks the navigation toggle button, the navigation bar will toggle to being hidden if initially still there, and will reappear if initially hidden.
5. When the user clicks a navigation link, the webpage will navigate them to that section of the webpage whilst keeping the navigation bar open still.
6. When the viewport changes to desktop size, the navigation bar will stay fixed on the side of the webpage with no way to hide it. 
7. When the user switches back to a mobile viewport from the desktop size, the navigation bar will be visible and not hidden even if they hid it before switching to desktop viewport.
8. When the navigation toggle button is focused, pressing the Enter or Space key will activate the button and toggle the navigation bar between hidden and visible.


Dark Mode:
Trigger: Clicking the dark mode button.
Expected DOM change: The whole webpage will toggle into darkmode, meaning that the light background will become dark and the texts will become lighter.
Cases: People repeatedly clicking the dark mode toggle button, whichwill simply lead to it alternating between light annd dark mode.
Another case is if the person refreshes the webpage.
The user opens the webpage in two browser tabs and changes the mode in one tab.

Pseudocode:
1. The first time the user visits the webpage, the webpage will automatically be in light mode.
2. When the user clicks the dark mode toggle button, the webpage turns from light mode to dark mode.
3. When in dark mode and the user clicks the dark mode toggle button again, the webpage turns from dark mode to light mode.
4. On their next visits, the webpage will remember whether they left the webpage on light or dark mode, making it unnecessary to make it dark mode again.
5. When the user changes the webpage's mode in one browser tab, the other open tabs displaying the same webpage will also update to reflect the saved mode preference.


Dynamic Content from an Array:
Trigger: The content automatically just appears from loading in the webpage
Expected DOM change: the three short films appear automatically
Contents appear from an array rather than being hard-coded in HTML
Cases: No projects to display(?)
The array contains duplicate projects
The array contains a very large number of projects, potentially causing the webpage to take longer to load or making it difficult for users to browse all the projects.
The array contains invalid project data, such as missing titles, years, poster images, or other required properties.

Pseudocode:
1. The script will identify the section element in my HTML with the ID "projects".
2. The script will store information about the projects as objects in an array.
3. The script will go through the projects in the array with the help of an array method and create a project entry with the poster, title, year, and my role in the project.
4. After that, the script will put them in the unordered list in the section wit the ID "projects".
5. In the case that there are no projects in the array, a message will be displayed saying that no projects are available.
6. Before displaying the projects, the script will check the array for duplicate projects and ensure that each project is displayed only once.
7. If the array contains a very large number of projects, the script could display the projects in smaller groups using pagination or a “Load More” button, allowing users to browse the projects without displaying all of them at once.
8. Before displaying each project, the script will check whether the project contains the required information. If the data is invalid or incomplete, the script will skip that project to prevent errors and continue displaying the remaining valid projects.


Contact Form Validation:
Trigger: Pressing the submit button on the feedback comment section.
Expected DOM change: A success message appears when the comment is submitted.
The comment/feedback textbox is allowed to be empty and it's only optional to comment.
Cases: The user submits an empty comment.
The user submits a comment with only spaces.
The user submits repeatedly clicks submit.
The user submits a comment containing HTML tags, JavaScript code, or other potentially unsafe content.
An error occurs while processing the submission, preventing the form from displaying the success message.

Pseudocode:
1. The script will identify the form element inside the article element with the ID "feedback".
2. When the user presses the submit button, the script prevents the webpage from refreshing or reloading.
3. If the comment is empty or simply full of spaces then the script will display a validation message saying the message is invalid or asking the user to input a message.
4. If the comment has text then the script will display a validation message saying the user's comment has been sent.
5. After a successful submission the script will clear the text on the textbox.
6. If the user repeatedly presses the submit button the script will validate each of those clicks with a message saying the message is invalid or asking the user to input a message.
7. Before displaying the submitted comment, the script will treat the comment as plain text rather than executable HTML or JavaScript, preventing potentially harmful code from being executed on the webpage.
8. If an error occurs during submission processing, the script will display an error message informing the user that the submission could not be completed and allow them to try again.