'use strict';

//1. feladat-----------------------------

const johnDoe = { 
    firstName: 'Jonh',
    lastName: 'Doe'
};

const janeDoe = { 
    firstName: 'Jane',
    lastName: 'Doe'
}

const mergeObjects = (...paramObj) => {
    return { ...paramObj };
}

const metaObj = mergeObjects(johnDoe, janeDoe);

console.log(metaObj);

//2. feladat----------------------------
const user = {
    firstName: 'John',
    lastName: 'Doe',
    city: 'New York',
    age: '30'
};

const tagging = (texts, ...values) => 
    texts.map((text, index) => `<i>${text}</i>${values[index] ? `<b>${values[index]}</b>` : '' }`).join('');

const template = tagging`Hi! My name is ${user.firstName} ${user.lastName}.<br>I'm ${user.age} and I live in ${user.city}.`;

console.log(template);
document.body.innerHTML = template;


//3. feladat----------------------------
const char = 'e';
const arr1 = ['first', 'second', 'third'];
const arr2 = ['apple', 'banana', 'Ed      '];
const arr3 = ['Tom', 'John', 'Jane', 'Tom', 'Ed', 'Kate'];

const mergeArr = (paramChar, ...paramArr) => {
    return [...paramArr].flat()
        .map(item => item.trimEnd())
        .filter((item, index, self) => self.indexOf(item) == index)
        .filter(item => !item.includes(paramChar))
        ;
}

const metaArr = mergeArr(char, arr1, arr2, arr3);

console.log(metaArr);


//4. feladat------------------------------

const mergeArr4 = (paramChar, ...paramArr) =>  [...paramArr].flat();

const trimStrings = paramArr => paramArr.map(item => item.trim());

const getUnique = paramArr => paramArr.filter((item, index, self) => self.indexOf(item) == index);

const metaArr4 = getUnique(trimStrings(mergeArr4(char, arr1, arr2, arr3)));

console.log((metaArr4));

