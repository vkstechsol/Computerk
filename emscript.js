
// const words = [
//   "Perfidious - धोखेबाज, बेईमान, विश्वासघाती",
//   "Kinship - संबंध, रिश्ता, बंधन",
//   "Magnanimous - उदार, दयालु, महानुभाव",
//   "Nefarious - दुर्जन, दुष्ट, अनैतिक",
//   "Lethargy - सुस्ती, आलस्य, अव्यावर्तिकता",
//   "Omnipotent - सर्वशक्तिमान, सर्वव्यापी, सर्वाधिकारी",
//   "Hierarchy - श्रेणीबद्धता, अधिकार व अधिकृतता की श्रेणी विभाजन",
//   "Intrepid - निडर, निर्भीक, दिलेर",
//   "Juxtaposition - एक साथ रखना, साथ-साथ रखना, विरोधाभास में रखना",
//   "Eloquent - प्रवक्ता, बोलचाल कुशलता से सम्बंधित"
// ];

// let index = 0;

// const wordElement = document.getElementById("word");

// const nextButton = document.getElementById("nextButton");

// function changeWord() {
//   wordElement.innerText = words[index];
//   index = (index + 1) % words.length;

// }

// nextButton.addEventListener("click", changeWord);
// changeWord();

const words = [" 1- Chatty - बातूनी ", " 2- Kinship - संबंध, रिश्ता", " 3- Magnanimous - उदार, दयालु, ", " 4- Nefarious - दुर्जन, दुष्ट,", " 5- Stingy- कंजूस ", "6- Fearless -निडर ", " 7- Slim - दुबला-पतला, ", " 8- Diligent - मेहनती", " 9- Candid - मासूम"," 10-Docile - विनम्र"," 11- Silently - दिल ही दिल में", " 12- Get Annoyed - नाराज़ होना", " 13- Back out - मुकर जाना", " 14 - Make promises - वादे करना:", " 15- Guide - मार्गदर्शक"," 16- Cunning - चालाक", " 17- Hoodwink - आंख में धूल झोंकना"," 18- Befool - मूर्ख बनाना"," 19- Creep - रेंगना"," 20- Carve - नक़्क़ाशी करना"," 21- Chew - चबाना"," 22- Dance - नृत्य"," 23- Desire - इच्छा"," 24- Dip - डुबोना"," 25- Cultivate - खेती करना"," 26- Civilize - सभ्य बनाना"," 27- Deceive - धोखा देना"," 28- Defeat - हराना"," 29- Be - होना"," 30- Behold - निहारना"," 31- Bend - झुकना",
               "32- Cross - पार करना"," 33- Beg - भीख मांगना"," 34- Believe - विश्वास करना"," 35- Behave - व्यवहार करना"," 36- Bleed - खून बहाना"," 37- Boast - डींग मारना"," 38- Borrow - उधार मांगना"," 39- Breed - जनना"," 40- Elect - चुनना"," 41- Feed - खिलाना"," 42- Threaten - धमकी देना"," 43- Drool - लार"," 44- Biting Nails - नाखून चबाना"," 45- Hate - घृणा"," 46- Hire - किराये पर लेना"," 47- Harass - उत्पीड़ित करना"," 48- Insult - अपमान करना"," 49- Instigate - उकसाना"," 50- Interfere - दखल देना"," Wake up early - जल्दी जागो"," Get up - उठना"," Make my bed - मेरा बिस्तर लगा दो"," Take a bath - नहाना"," Set an Alarm - अलार्म लगाएं"," Comb my Hair - बालो में कंघी करना"," Climb the stairs - सीढ़ियों पर चढ़ना"," Read book - पुस्तक पढ़ना"," Dream - सपना देखना"," Go to bed - सोने जाओ"," I am under the weather - मै बीमार हूं"," Threaten - धमकी देना", "Accumulate - एकत्रित करना"," Benefit - लाभ"," Contribute - योगदान देना", " Determine - निर्धारण करना", " Establish - स्थापित करना"," Flourish - फलना-फूलना", " Generate - उत्पन्न करना", " Hypothesis - परिकल्पना", " Interpret - व्याख्या करना", " Justify - उचित ठहराना", " Aspire - आकांक्षा करना", " Collaborate - सहयोग करना", " Devise - योजना बनाना", " Enhance - सुधारना", " Facilitate - सुगम बनाना", " Grasp - समझना", " Innovate - नवाचार करना", " Integrate - एकीकृत करना", " Mitigate - कम करना"," Negotiate - बातचीत करना", " Optimize - अनुकूलित करना", " Predict - भविष्यवाणी करना", " Resolve - हल करना", " Simplify - सरल बनाना", " Synthesize - संश्लेषण करना", " Transform - रूपांतरित करना", " Validate - मान्य करना", " Visualize - दृष्टिगत करना", " Achieve - प्राप्त करना", " Analyze - विश्लेषण करना", " Allocate - आवंटित करना", " Comprehend - समझना", " Facilitate - सुगम बनाना"," Optimize - अधिक अच्छा बनाना", " Validate - मान्य करना", " Persuade - मनाना", " Prioritize - प्राथमिकता देना", " Differentiate - अंतर करना"  ];



// const words = [
//   "Perfidious - धोखेबाज, बेईमान, विश्वासघाती",
//   "Kinship - संबंध, रिश्ता, बंधन",
//   "Magnanimous - उदार, दयालु, महानुभाव",
//   "Nefarious - दुर्जन, दुष्ट, अनैतिक",
//   "Lethargy - सुस्ती, आलस्य, अव्यावर्तिकता",
//   "Omnipotent - सर्वशक्तिमान, सर्वव्यापी, सर्वाधिकारी",
//   "Hierarchy - श्रेणीबद्धता, अधिकार व अधिकृतता की श्रेणी विभाजन",
//   "Intrepid - निडर, निर्भीक, दिलेर",
//   "Juxtaposition - एक साथ रखना, साथ-साथ रखना, विरोधाभास में रखना",
//   "Eloquent - प्रवक्ता, बोलचाल कुशलता से सम्बंधित"
// ];

let index = 0;
let index1 = 0;
const wordElement = document.getElementById("word");
const wordElement1 = document.getElementById("word1");
const nextButton = document.getElementById("nextButton");

function changeWord() {
  wordElement.innerText = words[index];
  index = (index + 1) % words.length;
}

function changeWord1() {
  wordElement1.innerText = words[index1];
  index1 = (index1 + 1) % words.length;
}

nextButton.addEventListener("click", () => {
  changeWord();
  changeWord1();
});

changeWord();
setInterval(changeWord1, 5000);










// // Get references to the word display div and next button
// var wordDisplay = document.getElementById("word-display");
// var nextButton = document.getElementById("next-button");

// // Initialize the current word index to 0
// var currentWordIndex = 0;

// // Function to display the current word on the page
// function displayCurrentWord() {
// 	wordDisplay.textContent = words[currentWordIndex].word;
// }

// // Function to advance to the next word
// function goToNextWord() {
// 	// Increment the current word index
// 	currentWordIndex++;

// 	// If we've gone past the end of the array, reset to 0
// 	if (currentWordIndex >= words.length) {
// 		currentWordIndex = 0;
// 	}

// 	// Display the new current word
// 	displayCurrentWord();
// }

// Attach an event listener to the next button
// nextButton.addEventListener("click", goToNextWord);

// // Display the initial word
//  changeWord()
// displayCurrentWord();
