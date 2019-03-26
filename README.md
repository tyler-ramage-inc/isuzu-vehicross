# CodeLou_FrontEnd

## Description
This site is about the rare Isuzu VehiCross.  Initially the site is just a carousel.  Click on the "What is it?" element or the down arrow to reveal the contents of the page.

## Custom CSS Classes
1. .carousel-item > img <br>
This targets all images in the carousel.  The values ensure that the images are centered and that the max height of any image is 525px to ensure that the "What is it?" will remain visible even on large viewports.

2. (html, body) and .container<br>
Ensure the layout is initially set up.

3. .fa-chevron-down<br>
This sets the size, padding and color of the down arrow (click to reveal page contents).

4. #whatIsIt<br>
This changes the cursor into the hand icon upon hover.  This makes it easier for the user to understand that this is a clickable feature.

5. #vx<br>
This targets the id of vx and uses the Isuzu font and creates a text shadow.

6. .heading<br>
This targets the heading and sets the font to Lilita One.  The font stack has fallback fonts to use in the event of a problem with the Lilita One font.
The Lilita One font was obtained using google cdn.

7. .lead::first-letter<br>
This targets only the first letter of the first paragraph (which is using the bootstrap 4 .lead for further styling) and changes the style to the values listed.

8. footer > div<br>
This changes the background color of the footer to a light gray color.

9. footer .btn-link<br>
This changes the styling for the footer button link.  This button is a Bootstrap 4 class and the button was not inline with the text.  It appeared to be out of place.  The padding and vertical-align brought the buttons location to back inline.

10. footer .btn-link:hover<br>
This changes the link to a blue color upon hover.  This was to ensure it stands out from the light bray background upon hover.

11. @font-face<br>
I learned how to upload a font and use the @font-face to be able to use the official Isuzu Font for #vx.

## Custom JavaScript

1. This function initially hides the contents of the page.  Once you click the "What is it?" or the Down Arrow then the "What is it?" disappears and the contents of the page appear.


## Extra Notes

1.  The carousel was difficult to work with in regards to image placement and display.  After doing research I found that others used a photo editor (PIXLR Editor) that allows you to crop images based on a certain aspect ratio.  I found that the Bootstrap 4 Carousel (at max vp) is 1200 x 480px.  I obtained high res images and then edited them to these specs.  Along with adding col-lg class, using CSS to set max height and editing these images, the carousel looks great now in all sizes.

2.  I brought in 2 fonts.  The Lilita One font was brought in using Google Fonts CDN.  For the Isuzu Font I used a font generator to create a webfont kit and used the @font-face to use it.  This was really exciting to learn how to bring in certain fonts.

3.  In the footer section if you click on "Tyler Ramage" a contact form modal will appear.  After hearing that bots can sniff email address from html pages I decided not to use the basic anchor tag.  Instead I used a modal to keep my email private.
  
4.  In the footer section if you click on "Sign Up Now" a sign-up form modal will appear.  In the future this will allow visitors to sign up.

