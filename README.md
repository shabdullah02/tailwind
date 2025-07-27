## How to setUp Tailwind css 
Step 1:
install Node.js ( Go to the website -> https://nodejs.org/en/download )


Step 2:
Verify you have npm installed ( ctrl + r -> cmd -> 
``` 
npm -v 
```
: expected output some version 11.4.2 e.g)

Step 3: To start , Enter this command 
```
npm init -y
```


Step 4:
You can also do that in Vs code terminal by using ( ctrl + ` ) or if not now open the VS code and terminal ,
```
npm install -D tailwindcss@^3.4.0
```
idk but v4.1 didn't worked for me 


Step 5:
```
npx tailwindcss init
```
This will generate the tailwind.config.js file then you go to Line 3 inside [square braces] of Content add
```
"*.{html,js}"
```


Step 6:
Create a src folder in current directory use that <img width="33" height="28" alt="image" src="https://github.com/user-attachments/assets/e628bed9-2b82-43fd-9b62-4e1fbc8223c3" /> icon then a file name input.css 


Step 7:Add this into your input.css
```
 @tailwind base;
 @tailwind components;
 @tailwind utilities;
```


Step 8:
Use the command
```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```
this will generate an output.css file in src 


Step 9:
link the output.css to your html ( you know that much ohterwise you wouldn't have been starting tailwind ) 

