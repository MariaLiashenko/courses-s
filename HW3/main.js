//tasks without using DOM
//Ви повинні реалізувати функцію, яка повертає різницю між
// найбільшим та найменшим значенням у списку , отриманому як аргумент
// функції. Масив, який отримує функція як аргумент, може містити позитивні
// та негативні числа. Якщо масив порожній або має значення, поверніть нуль.
// Спочатку масив буде поданий у невідсортованому вигляді.
// arr([1, 2, 3, -4]); // вернет 7, потому что: 3 - (-4) == 7
// arr([16]) => 0
const _ = require("lodash");
const ver = _.VERSION;
console.log(ver);
function diff(arr) {
    let res;
    arr.length === 0 || arr.length === 1 ? (res = 0) : (res = Math.max(...arr) - Math.min(...arr));
    return console.log(res);
}
// diff(["1", 2, 3, -4]);
// diff([]);
// diff([15]);

//lodash
function diffL(arr) {
    let res;
    arr.length === 0 || arr.length === 1 ? (res = 0) : (res = _.max(arr) - _.min(arr));
    return console.log(res);
}
// diffL(["1", 2, 3, -4]);
// diffL([]);

//Напишіть функцію, яка приймає рядок і число. Поверніть у вигляді
// масиву тільки ті слова, довжина яких перевищує число.
function arrayWithCorrectWords(str, num) {
    // add regular expressions to delete all punctuation in string
    let punctuationless = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s{2,}/g, " ");
    let myArray = punctuationless.split(" ");
    let result = myArray.filter((word) => word.length > num);
    return console.log(result);
}
// arrayWithCorrectWords("This., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation", 2);
// arrayWithCorrectWords("Stand with Ukraine dd ff s ,. g", 2);

//lodash
function arrayWithCorrectWordsL(str, num) {
    // add regular expressions to delete all punctuation in string
    let punctuationless = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s{2,}/g, " ");
    let myArray = punctuationless.split(" ");
    let result = _.remove(myArray, (word) => word.length > num);
    return console.log(result);
}
// arrayWithCorrectWordsL("This., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation", 2);
// arrayWithCorrectWordsL("Stand with Ukraine dd ff s ,. g", 2);

//Напишіть функцію, яка повертає true, якщо перший переданий
// аргумент (рядок) закінчується другим аргументом (також рядком).
// Приклад:
// solution('abc', 'bc') => true
// solution('abc', 'd') => false
function endsWithStr(str, suffix) {
    return console.log(str.endsWith(suffix));
}
// endsWithStr("abc", "bc");
// endsWithStr("abc", "d");
//lodash
function endsWithStrL(str, suffix) {
    return console.log(_.endsWith(str, suffix));
}
// endsWithStrL("abc", "bc");
// endsWithStrL("abc", "d");

// Напишіть функцію, яка отримує масив цілих чисел і повертає масив
// середніх значень кожного цілого числа та його послідовника, якщо він є.
// Приклад:
// averages([2, -2, 2, -2, 2]), [0, 0, 0, 0]
// averages([1, 3, 5, 1, -10]), [2, 4, 3, -4.5]
function avg_with_next(arr) {
    let result = [];
    for (let i = 0; i < arr.length - 1; i++) {
        result.push((arr[i] + arr[i + 1]) / 2);
    }
    return console.log(result);
}
// avg_with_next([2, -2, 2, -2, 2]);
// avg_with_next([1, 3, 5, 1, -10]);

// Створіть функцію, яка приймає рядок і повертає кількість (кількість)
// голосних, які у ній.
// Приклад:
function countVowels(str) {
    let vowels = ["a", "e", "i", "o", "u"];
    let chars = str.toLowerCase().split("");
    let count = 0;
    count = chars.filter((char) => vowels.includes(char)).length;

    return console.log(count);
}
//countVowels("Celebration"); //5
//countVowels("Palm"); // 1

//lodash
function countVowelsL(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    const chars = _.toLower(str).split("");
    const count = _.filter(chars, (char) => _.includes(vowels, char)).length;

    return console.log(count);
}

// countVowelsL("Hello World"); // 3

// Створіть функцію, яка видаляє літери "a", "b" і "c" з цього рядка і поверне
// змінену версію. Якщо цей рядок не містить "a", "b" або "c", повернути null.
function removeABC(str) {
    const vowels = ["a", "b", "c", "A", "B", "C"];
    let arr = Array.from(str);
    let res = arr.filter((char) => !vowels.includes(char));
    return res.join("") === str ? console.log(null) : console.log(res.join(""));
}
//removeABC("This might be a bit hard"); //"This might e it hrd"
//removeABC("hello world!"); //null

//lodash
function removeABCL(str) {
    const vowels = ["a", "b", "c", "A", "B", "C"];
    let arr = _.values(str);
    let res = _.filter(arr, (char) => !_.includes(vowels, char));
    return _.join(res, "") === str ? console.log(null) : console.log(_.join(res, ""));
}
// removeABCL("This might be a bit hard"); //"This might e it hrd"
// removeABCL("hello world!"); //null

//Напишіть JavaScript для пошуку унікальних елементів з двох масивів.
function difference(arr1, arr2) {
    let mergeResult = [...arr1, ...arr2];
    let uniqueChars = mergeResult.filter((element, index) => {
        return mergeResult.indexOf(element) === index;
    });

    return uniqueChars;
}
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));

//lodash
function differenceL(arr1, arr2) {
    let mergeResult = [...arr1, ...arr2];
    const uniqueChars = _.uniq(mergeResult);
    return uniqueChars;
}
// console.log(differenceL([1, 2, 3], [100, 2, 1, 10]));

//Напишіть функцію, щоб отримати копію об'єкта, де ключі стали
// значеннями, а значення ключами.

function reverseObject(obj) {
    let reversed = {};
    for (let [key, value] of Object.entries(obj)) {
        reversed[value] = key;
    }
    return console.log(reversed);
}
// reverseObject({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" });

//lodash
function reverseObjectL(obj) {
    let reversed = _.invert(obj);
    return console.log(reversed);
}
// reverseObjectL({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" });

//Івана Іванова обікрали. Але його речі було застраховано на певну суму.
// Враховуючи вкрадені речі та обмеження страховки, поверніть різницю між
// загальною вартістю цих речей та межею політики.
function calculateDifference(obj, num) {
    let sum = 0;
    let diff = Object.values(obj);
    diff.map((x) => (sum += x));
    return isNaN(sum - num) || sum - num < 0 ? console.log("wrong obj") : console.log(sum - num);
}
// calculateDifference({ "baseball bat": "baseball bat" }, 5);

// calculateDifference({ "baseball bat": 20 }, 5);
// calculateDifference({ skate: 10, painting: 20 }, 19);
// calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400);

//lodash
function calculateDifferenceL(obj, num) {
    let res = _.sum(Object.values(obj)) - num;
    return isNaN(res) || res < 0 ? console.log("wrong obj") : console.log(res);
}
// calculateDifferenceL({ "baseball bat": "baseball bat" }, 5);
// calculateDifferenceL({ "baseball bat": 20 }, 5);
// calculateDifferenceL({ skate: 200, painting: 200, shoes: 1 }, 400);

//Напишіть функцію, яка приймає три виміри цегли: висоту (a), ширину
// (b) і глибину (c) і повертає істину, якщо ця цегла може поміститися в отвір з
// шириною (w) та висотою (h). Виміри вводить користувач через форму.
function canFitBrick(a, b, c, w, h) {
    // Перевіряємо, чи один з розмірів цегли не більше розмірів отвору
    if (
        (a <= h && b <= w) ||
        (a <= h && c <= w) ||
        (b <= h && a <= w) ||
        (b <= h && c <= w) ||
        (c <= h && a <= w) ||
        (c <= h && b <= w)
    ) {
        return true;
    } else {
        return false;
    }
}
// console.log(canFitBrick(1, 1, 1, 1, 1)); // true
// console.log(canFitBrick(1, 2, 2, 1, 1)); // true

// Дано рядок, що містить повне ім'я файлу (наприклад, 'c:
// \WebServers\home\testsite\www\myfile.txt'). Виділіть із цього рядка ім'я файлу
// без розширення.
function file(filename) {
    const filenameStr = filename.split("\\").pop();
    let filenameArr = Array.from(filenameStr);
    let res = filenameArr.slice(0, filenameArr.indexOf(".")).join("");
    return console.log(res);
}
// я не змогла зробити це завдання з одинарними зворотніми слешами \ оскільки вони рахуються як спеціальні символи
// file("c:\\WebServers\\home\\testsite\\www\\myfile.txt");

//11
// Дано два рядки. Чи можна перший рядок отримати з другим циклічним
// зрушенням?
// так можна якщо обидва рядки будуть однакові за довжиною та  потрібно перебрати всі можливі зсуви рядка
function isCyclicShift(s1, s2) {
    if (s1.length !== s2.length) {
        return false;
    }
    for (let i = 0; i < s1.length; i++) {
        if (s1 === s2.slice(i) + s2.slice(0, i)) {
            return true;
        }
    }
    return false;
}
// console.log(isCyclicShift("mary", "ryma"));
//lodash
function isCyclicShiftL(s1, s2) {
    if (_.size(s1) !== _.size(s2)) {
        return false;
    }
    for (let i = 0; i < _.size(s1); i++) {
        let sum = _.slice(s2, i) + _.slice(s2, 0, i);
        if (_.isEqual(s1, sum)) {
            return true;
        }
    }
    return false;
}
// console.log(isCyclicShiftL("mary", "ryma"));

//12
//З елементів масиву a, що складається з 2n елементів, отримати масиви b
// і c наступним чином: вибрати в масиві a два найбільш близькі за значенням
// елемента, менший з них помістити в масив b, а більший - масив c. Виключити
// з розгляду в масиві a ці елементи і продовжити вибір з елементів, що
// залишилися.

function twoArrays(arr) {
    arr.sort((a, b) => a - b);
    const b = arr.filter((num, index) => index % 2 === 0);
    const c = arr.filter((num, index) => index % 2 !== 0);
    console.log(b);
    console.log(c);
    return [b, c];
}
// twoArrays([4, 2, 6, 8, 10, 12]);

//lodash
function twoArraysL(arr) {
    const sortedArr = _.sortBy(arr);
    const b = _.filter(sortedArr, (num, index) => index % 2 === 0);
    const c = _.filter(sortedArr, (num, index) => index % 2 !== 0);
    console.log(b);
    console.log(c);
    return [b, c];
}
// twoArraysL([4, 2, 6, 8, 10, 12]);

//13
// Дано рядок, що складається зі слів, розділених пробілами. Сформувати
// новий рядок з такими властивостями: а) усі слова у нижньому регістрі, крім
// першої літери першого слова; б) усі посилання у словах замінюються на
// "[посилання заборонено]"; в) всі email замінюються на "[контакти
// заборонені]"; г) усі слова довжини понад 3 символи, що містять лише цифри,
// видаляються.
// Якщо кількість символів в отриманому рядку буде більшої ніж
// кількість символів у вихідному, то запустити функцію, що буде кожні 5
// секунд в alert буде питати, чи потрібна нам допомога.

function ChangeLine() {
    let line = document.getElementById("text").value;
    // line = "ЦеЕЕе Текст з ПосилАнням 1234 На Https://google.com та Email abc123@gmail.com.";
    let arrLine = line.split(" ");

    console.log(!isNaN("20"));

    console.log(arrLine);
    const res = arrLine.map((word, index) => {
        if (index === 0) {
            return word[0].toUpperCase() + word.substring(1).toLowerCase();
        } else {
            let lowerWord = word.toLowerCase();
            if (lowerWord.includes("https") || lowerWord.includes("http")) {
                return "[посилання заборонено]";
            }
            if (lowerWord.includes("@gmail")) {
                return "[контакти заборонені]";
            }
            if (lowerWord.length > 3 && !isNaN(lowerWord)) {
                return null;
            }
            return lowerWord;
        }
    });
    if (res.join(" ").length > line.length) {
        setTimeout(function () {
            if (confirm("Чи потрібна вам допомога?")) {
                // Якщо користувач підтверджує, що потрібна допомога, викликаємо функцію transformString() знову
                ChangeLine();
            }
        }, 5000);
    }
    console.log(res.join(" "));
    document.getElementById("changedText").value = res.join(" ");
    return res.join(" ");
}
//14
// Перевірити, чи дотримується в заданому тексті баланс круглих дужок,
// що відкриваються і закриваються, тобто можна встановити взаємно
// однозначну відповідність відкриваючих і закриваючих дужок, причому
// відкриваюча дужка завжди передує тій, що закривається. Якщо баланс
// дотримується вивести цей текст на html – сторінку і заборонити користувачу
// копіювати цей текст та перегляд коду сторінки.

function checkBracket() {
    let text = document.getElementById("textwithBracket").value;

    let brackets = [];
    for (let i = 0; i < text.length; i++) {
        if (text[i] === "(") {
            brackets.push("(");
        } else if (text[i] === ")" && brackets[brackets.length - 1] === "(") {
            brackets.pop();
        }
    }
    if (brackets.length === 0) {
        let div = document.createElement("div");
        div.innerHTML = `<strong oncontextmenu="return false;">${text}</strong>`;
        document.body.append(div);
        div.onselectstart = function () {
            alert("Но-но-но! Не можна копіювати");
            return false;
        };

        document.addEventListener("contextmenu", function (event) {
            event.preventDefault();
        });
    } else {
        let div = document.createElement("div");
        div.innerHTML = "<p>Баланс дужок порушено!</p>";
        document.body.append(div);
    }

    console.log(brackets);
    return brackets.length;
}
checkBracket();
//15
// Запросіть користувача ввести якусь фразу. Відобразіть кожне слово у
// вигляді списку ul li. Також відобразіть перше слово UPPERCASE, а останні 2
// з маленької. Знайдіть усі літери "а" їх кількість виведіть у alert вікно. Після
// закриття alert - реалізувати скрипт, який через 5 хвилин бездіяльності
// користувача (нічого не натискається, нічого не виділяється, не рухається
// прогрес-бар) висвітлює повідомлення "Ви ще тут?" Якщо так, користувач
// залишається на сторінці, якщо ні сторінка закривається.
function processInput() {
    let input = document.getElementById("userInput").value;
    let words = input.split(" ");

    let wordList = document.getElementById("wordList");
    wordList.innerHTML = "";
    words.forEach((word, index) => {
        let li = document.createElement("li");
        li.innerText = word;
        wordList.appendChild(li);

        if (index === 0) {
            li.innerText = li.innerText.toUpperCase();
        } else if (index === words.length - 1 || index === words.length - 2) {
            li.innerText = li.innerText.toLowerCase();
        }
    });

    const count = input.split("a").length - 1;
    alert(`Кількість "а" ${count}`);

    let timeoutId = null;
    function resetTimer() {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            const stay = confirm("Ви ще тут?");
            if (!stay) {
                window.close();
            }
            resetTimer();
        }, 300000);
    }
    resetTimer();
}

//16
// Створити пароль для користувача. Вимоги: довжина від 6 до 20
// символів повинен бути рівно один символ підкреслення, хоча б дві великі
// літери, не більше 5 цифр, будь-які дві цифри поспіль неприпустимі.
function generatePassword() {
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    let password = "";
    let numUpperLetters = 0;
    let numNumbers = 0;
    let numUnderscores = 0;
    while (password.length < 6 || password.length > 20 || numUnderscores !== 1) {
        password = "";
        //2 малі літери
        for (let i = 0; i < 3; i++) {
            password += lowerCaseLetters.charAt(Math.floor(Math.random() * lowerCaseLetters.length));
        }
        //2 великі літери
        for (let i = 0; i < 3; i++) {
            let upperLetter = upperCaseLetters.charAt(Math.floor(Math.random() * upperCaseLetters.length));
            password += upperLetter;
            numUpperLetters++;
        }
        //цифри
        const numDigits = Math.floor(Math.random() * 5) + 1;
        for (let i = 0; i < numDigits; i++) {
            let digit = numbers.charAt(Math.floor(Math.random() * numbers.length));
            if (password.indexOf(digit) === -1) {
                password += digit;
                numNumbers++;
            }
        }
        //_
        if (numUnderscores === 0) {
            let underscoreIndex = Math.floor(Math.random() * password.length);
            password = password.slice(0, underscoreIndex) + "_" + password.slice(underscoreIndex);
            numUnderscores++;
        }
    }
    return password;
}
// console.log(generatePassword());

// 17
// В заданому масиві найменший елемент помістити на перше місце,
// найменший з тих, що залишилися - на останнє місце, наступний -
// передостаннє і так далі - до середини масиву.
function sortArray(arr) {
    let res = [];
    arr.sort((a, b) => a - b);

    for (let i = arr.length - 1; i >= 0; i--) {
        if (i % 2 === 0) {
            res.unshift(arr[i]);
        } else {
            res.push(arr[i]);
        }
    }
    return res;
}
// console.log(sortArray([2, 1, 3, 5, 4])); // [1, 3, 5, 4, 2]
//lodash
function sortArrayL(arr) {
    let res = [];
    arr = _.sortBy(arr);

    _.forEachRight(arr, (value, index) => {
        if (index % 2 === 0) {
            res.unshift(value);
        } else {
            res.push(value);
        }
    });
    return res;
}
// console.log(sortArrayL([2, 1, 3, 5, 4]));
