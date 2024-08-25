// Función para encriptar el texto
function btnEncriptar() {
    const text = document.getElementById('texto').value;

    let encryptedText = text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    document.getElementById('resultado').value = encryptedText;
}

// Función para desencriptar el texto
function btnDesencriptar() {
    const text = document.getElementById('texto').value;

    let decryptedText = text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    document.getElementById('resultado').value = decryptedText;
}

// Función para copiar el texto 
function copyToClipboard() {
    const resultInput = document.getElementById('resultado');
    resultInput.select();
}
