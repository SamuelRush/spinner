const sentence = "|/-\|/-\|";

// ... fill in the rest yourself ...
let i = 100;
let j = 1;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write("\r" + char + "   ");
  } ,(i));
  i=i+200;
  j = j+1;
  if (sentence.length === j){
    setTimeout(() => {
      process.stdout.write("\r\n");
    } ,(i+200));
  }
}