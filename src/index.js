module.exports = function toReadable (n) {
    
        let obj = {
            '1': 'one',
            '2': 'two',
            '3': 'three',
            '4': 'four',
            '5': 'five',
            '6': 'six',
            '7': 'seven',
            '8': 'eight',
            '9': 'nine',
            '10': 'ten',
            '11': 'eleven',
            '12': 'twelve',
            '13': 'thirteen',
            '14': 'fourteen',
            '15': 'fifteen',
            '16': 'sixteen',
            '17': 'seventeen',
            '18': 'eighteen',
            '19': 'nineteen',
            '20': 'twenty',
            '30': 'thirty',
            '40': 'forty',
            '50': 'fifty',
            '60': 'sixty',
            '70': 'seventy',
            '80': 'eighty',
            '90': 'ninety',
            '0': '',
            
        }
        if (n==0) return 'zero';
        if (n<=19) return (obj[n+'']);
        if (n>19&&n<=99) return (obj[n-(n%10)+'']+' '+obj[n%10+'']||'').trim();
        if (n%100==0) return (obj[Math.floor(n/100)+''] +' hundred');
        if (n>100) return (obj[Math.floor(n/100)+''] +' hundred '+ toReadable(n%100)).trim();
    
}
    

