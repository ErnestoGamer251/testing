export function caesarCipher(string, shift) {
    const shiftChar = char => {
      if (char.match(/[a-z]/i)) {
        const charCode = char.charCodeAt(0);
        const offset = char.toUpperCase() === char ? 65 : 97;
        return String.fromCharCode(((charCode - offset + shift) % 26) + offset);
      }
      return char;
    };
  
    return string.split('').map(shiftChar).join('');
  }
  