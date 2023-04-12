const inputRef = document.querySelector('#input');
const btnRef = document.querySelector('#btn-one');
const btnTwoRef = document.querySelector('#btn-two');
const imgRef = document.querySelector('#image');
const titleRef = document.querySelector('#title');
const paragraphRef = document.querySelector('#paragraph');
const divRef = document.querySelector('.container-text');
const btnThreeRef = document.querySelector('#btn-three');

let getInput = function () {
    console.log(inputRef.value);
    return inputRef.value;
}

let getValue = function () {
    const pRef = document.querySelector('.container-text');
    const encrypted = pRef.innerText;
    const decrypted = decrypt(encrypted);
    let result = decrypted.replace("Copiar", "")
    return result;
}

btnRef.addEventListener('click', function () {
    encrypt(getInput());
    hide()
    showValue()
    showButton()
    removeElement()
});

btnTwoRef.addEventListener('click', function () {
    getValue();
    showValueDecrypt()
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


function removeElement () {
    const div = document.querySelector('.text');

    if (div) {
        div.remove();
    }
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
    const removeLetter = textToCopy.replace("Copiar", "")
    navigator.clipboard.writeText(removeLetter)
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
    console.log("chamou", encryptedWord);
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
    console.log("chamou2", decrypted);
    return decrypted;
}
