const str = 'I can, can I?'

const isPalindrome = (inStr) => {
    inStr = inStr.replace(/\W/g, '')
    inStr = inStr.toLowerCase()
   
    
    return  inStr === inStr.split('').reverse().join('')
}

console.log(isPalindrome(str))