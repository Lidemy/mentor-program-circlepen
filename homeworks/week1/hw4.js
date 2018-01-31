function reverseString(str) { return str.split("").reverse().join(""); }

export const isPalindromes = (str) => {
  
    if (reverseString(str) === str) return true
	else return false
}