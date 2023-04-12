const inputRef = document.querySelector('#input');
const btnRef = document.querySelector('#btn-one');
const btnTwoRef = document.querySelector('#btn-two');
const imgRef = document.querySelector('#image');
const titleRef = document.querySelector('#title');
const paragraphRef = document.querySelector('#paragraph');
const divRef = document.querySelector('.container-text');
const btnThreeRef = document.querySelector('#btn-three');

let getInput = function () {
    return inputRef.value;
}

let getValue = function () {
    const pRef = document.querySelector('.container-text');
    const encrypted = pRef.innerText;
    const decrypted = decrypt(encrypted);
    const textWithoutCopy = decrypted.replace('Copiar', '').trim();
    return textWithoutCopy;
}

btnRef.addEventListener('click', function () {
    encrypt(getInput());
    hide()
    showValue()
    showButton()
});

btnTwoRef.addEventListener('click', function () {
    const input = getInput();
    if (input) {
        getValue();
        showValueDecrypt()
    }
})

btnThreeRef.addEventListener('click', clipboard)

function hide () {
    imgRef.style.display = 'none';
    titleRef.style.display = 'none';
    paragraphRef.style.display = 'none';
}

function showButton () {
    btnThreeRef.style.display = 'block';
}

function showValueDecrypt () {
    let div = document.querySelector('.container-text');
    div.innerText = decrypt(getValue());
    divRef.appendChild(btnThreeRef)
}

function showValue () {
    divRef.innerText = encrypt(getInput());
    divRef.appendChild(btnThreeRef)
    divRef.classList.add('container-text-btn');
}

function clipboard () {
    const textToCopy = document.querySelector('.container-text').innerText;
    const textWithoutCopy = textToCopy.replace('Copiar', '').trim();
    navigator.clipboard.writeText(textWithoutCopy);
}

function encrypt (word) {
    const map = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat',
    }

    const normalizedWord = word.toLowerCase();
    let encryptedWord = '';

    for (const letter of normalizedWord) {
        const encryptedLetter = map[letter];
        encryptedWord += encryptedLetter || letter;
    }
    return encryptedWord;
}

function decrypt (word) {
    const map = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    const chunks = word.split(/(enter|imes|ai|ober|ufat)/);
    let decrypted = '';

    for (const chunk of chunks) {
        decrypted += map[chunk] || chunk;
    }
    return decrypted;
}
