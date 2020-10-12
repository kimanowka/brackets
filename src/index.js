module.exports = function check(str, bracketsConfig) {
    

let count=0;
let open=['(', '{','['];
let close=[')','}',']'];

for (i=0;i<str.length;i++) {
  if (open.includes(str[i]))  count++;
  if (close.includes(str[i])) count--;
  if (count==-1) { break;}
}

if (count==0) {
  return true;
} else {return false;}

  
  
  
};
