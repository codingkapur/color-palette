# Color Palette App

Tints are a mix of primary colors to which mostly white color is added. 
And shades are a mix of primary colors to which mostly black color is added. 
With the Color Palette, pick a shade or a tint of the color of your choice. Just enter a color and get the lighter and darker versions of it ready to be copied for your use.

## HOW TO INSTALL PROJECT;
### Prequisite: 
    
Node version: Node 14
1. Run command 'git clone https://github.com/codingkapur/task-tracker-reactjs.git'
2. Run command 'npm install"
3. run command 'npm start'

## Problems presented in this app
1. How to validate input for a Hexadecimal color - Done
2. How to change border of input as validation takes place before submit. - Done
3. How to programmatically change the intensity of a Hexadecimal color - Done
4. How to dynamically generate a grid of tints and shades of the input color - Done
5. How to implement a random color - Done
6. How to implement Click to Copy functionality - Done

--------------------------------------------------------------------
Validation of Hex Color Input:
--------------------------------------------------------------------
regex = "^#([A-Fa-f0-9]{6})$";
Where: 
    ^ represents the starting of the string.
    # represents the hexadecimal color code must start with a ‘#’ symbol.
    ( represents the start of the group.
    [A-Fa-f0-9]{6} represents the letter from a-f, A-F, or digit from 0-9 with a length of 6.
    ) represents the end of the group.
    $ represents the ending of the string.
Returns true if the string matches with the given regex, else returns false.

const regex = new RegExp('^#([A-Fa-f0-9]{6})$')
regex.test(stringToBeTested) 

--------------------------------------------------------------------
Programmatically change the intensity of color:
--------------------------------------------------------------------
First convery HEX to RGB
For lighter shades, increase 10% from every color space(R,G,B). Check at every level if resulting number is 255 or greater.
For darker shades, decrease 10% from every color space(R,G,B). Check at every level if resulting number is 0 or less. 
Keep track of increments in percent as well.

## ISSUES SO FAR:

1. When we click on random color, the first click has an undesired behavior. On the second click and ahead, it works fine. To be fixed!

2. On every click on the random color button, the color created randomly is printed to the console in RGB format. After every few clicks, it can be observed that in the Red color space, NaN is the value. It appears only in the red color space even though the logic for generating the number for each color space is the same. FIXED! (Issue revealed - padStart pads the value with # and if the red space value is single digit, it adds an extra # which is why it says NaN. )


## Code Review Objective:

1. Rating the code on a scale of 1-10 on the following considerations:
    1. Readability
    2. Effectiveness
    3. Design

2. Refactoring for better score on above factors. 

3. Additional Input

--------------------------------------------------------------------
## Features to Add
1. Display values in RGB, Hex or HSL. -> Dropdown menu
2. Add a color picker pop up button.
