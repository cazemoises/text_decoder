const input = document.querySelector('textarea')
const result = document.querySelector('.empty-placeholder');
const copy = document.querySelector('#copy');

const clearEmptyText = () => {

    input.value = input.value.trim();

}

const encryptMessage = () => {

    let message = input.value;
    if (message != "") {

        let encryptedMessage = message.replace(/a|e|i|o|u/g, (match) => {
    
            switch(match) {
                case "a":
                    return "ai";
                case "e":
                    return "enter";
                case "i":
                    return "imes";
                case "o":
                    return "ober";
                case "u":
                    return "ufat";
            }
    
        });
    
        result.innerHTML = encryptedMessage;
        result.classList.remove('empty');
        copy.style.display = 'flex';


    }

}

const decryptMessage = () => {

    let encryptedMessage = input.value;
    if (encryptedMessage != "") {

        let decryptedMessage = encryptedMessage.replace(/ai|enter|imes|ober|ufat/g, (match) => {
    

            switch(match) {
                case "ai":
                    return "a";
                case "enter":
                    return "e";
                case "imes":
                    return "i";
                case "ober":
                    return "o";
                case "ufat":
                    return "u";
            }
    
        });
    
        result.innerHTML = decryptedMessage;
        result.classList.remove('empty');
        copy.style.display = 'flex';

    }

}

const copyText = () => {

    navigator.clipboard.writeText(result.innerHTML);

}