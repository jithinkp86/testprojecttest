function generateRandomEmail(baseEmail) {
    const randomNumber = Math.floor(Math.random() * 10000);
    return baseEmail.replace('{{random}}', randomNumber);
}

module.exports = { generateRandomEmail };
