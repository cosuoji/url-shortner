let input = document.getElementById("input")

document.querySelector('button').addEventListener('click', () => {
    console.log(input.value)
    if(input.value === "") return
    // URL where the GET request will be sent
    fetch('http://localhost:9000/shortner',{
        method: "POST",
        body: JSON.stringify({url: input.value}),
        headers: {
         "Content-type": "application/json; charset=UTF-8"
        }

    })
    // Obtains the text of the response in the form of a promise
    .then(res => res.json())
    // Changes the text of the paragraph to the response text
    .then(json => console.log(json))
})