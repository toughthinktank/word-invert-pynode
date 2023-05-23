const express = require('express')
const child_process = require('child_process');
const app = express()
const port = 3000
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter the word below (Max Length 21)\n', word => {
    if (word.length > 21) console.log("Invalid string, maximum length should be 21");
    else {
        app.get("/", (req, res) => {
            var dataToSend;
            const python = child_process.spawn('python3', ['oddgenword.py', word]);
            python.stdout.on('data', data => {
                data = JSON.parse(data.toString());
                dataToSend = data.final_string.replace(/[0-9]/g, "").split("").reverse().join("");
            });
            python.on('close', (code) => {
                console.log(`child process close all stdio with code ${code}`);
                res.send(dataToSend)
            });
        });
    }
    readline.close();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));