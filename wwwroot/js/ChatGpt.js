﻿//document.getElementById("submitBook").addEventListener("click", getSummaryResponse);
var currBook = '@Html.Raw(Json.Encode(Model))';

function getSummaryResponse(bookName) {
    const apiKey = "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";
    const engineid = "text-davinci-002";
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            prompt: "Please provide a 4 sentence summary of the book " + bookName,
            model: 'text-davinci-003',
            temperature: 0.5,
            max_tokens: 1000,
            stop: ''
        })
    };

    fetch('https://api.openai.com/v1/completions', requestOptions)
        .then(response => response.json())
        .then(data => {
            const summary = data.choices[0].text;
            console.log(summary);
            currBook.Summary = summary
            //document.getElementById("bookSummaryArea").innerHTML = '<p>' + summary + '</p>';


        })
        .catch(error => console.error(error));
};