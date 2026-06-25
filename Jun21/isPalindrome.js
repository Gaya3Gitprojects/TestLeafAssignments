function isPalindrome(){
    let str1 = "level";
    let str2 = "hello";

    let str1rev = "";
    let str2rev = "";

    for (let i = str1.length - 1; i >= 0; i--) {
        str1rev += str1[i];
}
    for (let j = str2.length - 1; j >= 0; j--) {
        str2rev += str2[j];
    }

    if(str1 === str1rev){
        console.log (str1,"is a Palindrome");
    }
    else
     {
        console.log (str1,"is not a Palindrome");
    }
    if(str2 === str2rev){
        console.log (str2,"is a Palindrome");
    }
    else{
        console.log (str2," is not a Palindrome");
    }
}

isPalindrome();