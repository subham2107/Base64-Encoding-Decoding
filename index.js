const readLineSync = require('readline-sync');

const user_response = readLineSync.question('Welcome to Base64 Encoding/Decoding. Which utility function would you like to use?\n1. Encode\n2. Decode\n');

console.log(`You selected ${user_response}`);

logic(user_response);

function base64Encode(url)
{
 const base64 = Buffer.from(url).toString('base64');
 console.log(base64); 
}

function base64Decode(url)
{
const original = Buffer.from(url, 'base64').toString('ascii');
console.log(original);
}
function logic(user_response)
{
if(user_response==='1')
{
  const url = readLineSync.question('Please enter the url to be encoded\n');
  base64Encode(url);
}
else if(user_response==='2')
{
  const url = readLineSync.question('Please enter the Base64 code to be decoded\n');
  base64Decode(url);
}
else
{
  console.log('Invalid URL');
}
}