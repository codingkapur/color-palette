# Color Palette App

Pick a shade or a tint of the color of your choice. Just enter a color and get the lighter and darker versions of it ready to be copied for your use.

## HOW TO INSTALL PROJECT;
### Prequisite: 
    Node 14
Node version: 
1. Run command 'git clone https://github.com/codingkapur/task-tracker-reactjs.git'
2. Run command 'npm install"
3. run command 'npm start'

## Problems presented in this app
1. How to validate input for a Hexadecimal color
2. How to change border of input as validation takes place.
3. How to programmatically change the intensity of a Hexadecimal color
4. How to 


Answer 1:
regex = "^#([A-Fa-f0-9]{6})$";
Where: 
    ^ represents the starting of the string.
    # represents the hexadecimal color code must start with a ‘#’ symbol.
    ( represents the start of the group.
    [A-Fa-f0-9]{6} represents the letter from a-f, A-F, or digit from 0-9 with a length of 6.
    ) represents the end of the group.
    $ represents the ending of the string.

const regex = new RegExp('^#([A-Fa-f0-9]{6})$')
regex.test(stringToBeTested)