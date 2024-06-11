const form = document.getElementById("form")
const email = document.getElementById("email").value
const pass = document.getElementById("password").value

const loginBtn = document.getElementById("loginButton")

const url = "http://localhost:3000/auth/login"

let data = {
    email,
    password
}

loginBtn.addEventListener("click",()=>{
    console.log("send Data")
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('smoething went wrong');
        }
    })
        .then(data => {
            console.log('Server response:', data);
        })
        .catch(error => {
            console.error('Error  sending data:', error);
        });
})