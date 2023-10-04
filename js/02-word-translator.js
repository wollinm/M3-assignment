// Magdalena Wollin
//The Word Translator
//Usage: Use simple conditional statements
//Create an application that prompts the user for a language code ("es", "de", "en", and "fr"). 
//If they enter one of the four codes, display the translated version of "Hello World" for the 
//given language within the console window. 
//If the user enters anything but those four language codes, the application should default to English. 
//The result should be (for example):
//Hello World translated in French is: Bonjour le monde

//Global variables
let lanCode;
let lanDes;
//document.write("Word Translator<br>")
//Get language code from user
lanCode = prompt('Please select a language code? ""es"", ""de"", ""en"", ""fr""');
validLan = (lanCode == 'es' || lanCode == 'de' || lanCode == 'en' || lanCode == 'fr')

//default to English if invalid code entered
if (!validLan) {
   lanCode = 'en'
}
//set description and translation for selected code
if (lanCode == 'es') {
   lanDesc = 'Spanish'
   translation = 'Hola Mundo'
}
if (lanCode == 'de') {
    lanDesc = 'German'
    translation = 'Hallo Welt'
}
if (lanCode == 'en') {
   lanDesc = 'English'
   translation = 'Hello World'
}
if (lanCode == 'fr') {
   lanDesc = 'French'
   translation = 'Bonjour le monde'
}
//document.write(lanCode);
//document.write(lanDesc);

//Display the result
  document.write(`Hello World translated in ${lanDesc} is: ${translation}`);
 
