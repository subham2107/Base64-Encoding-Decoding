const readLineSync = require('readline-sync');

const user_response = parseInt(readLineSync.question('Welcome to Base64 Encoding/Decoding. Which utility function would you like to use?\n1. Encode\n2. Decode\n'));

console.log(`You selected ${user_response}`);

logic(user_response);

function base64Encode(url)
{
 const base64 = Buffer.from(url).toString('base64');
 return base64; 
}

function base64Decode(base64code)
{
const original = Buffer.from(base64code, 'base64').toString('ascii');
return original;
}
function logic(user_response)
{
switch(user_response)
{
  case 1:
  const url = readLineSync.question('Please enter the url to be encoded\n');
  console.log(base64Encode(url));
  break;

  case 2:
  const base64code = readLineSync.question('Please enter the Base64 code to be decoded\n');
  console.log(base64Decode(base64code));
  break;

  default:
  console.log('Invalid URL');
  break;
}
}