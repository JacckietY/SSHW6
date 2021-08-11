const FRUITS1 = ['Яблоко', 'Банан', 'Ананас'];
let red1 = FRUITS1.reduce( (acc, curr) => [...acc, curr[0]], []);

console.log(red1);

const FRUITS2 = ['Яблоко', 'Банан', 'Ананас'];
let red2 = FRUITS2.reduce( (acc, curr) => curr[0].toLowerCase() === 'а' ? [...acc, curr] : acc, []);

console.log(red2);

const FRUITS3 = ['Яблоко', 'Банан', 'Ананас'];
let red3 = FRUITS3.reduce((acc, curr, index) => [...acc, `${index + 1} : ${curr}`], []);

console.log(red3);