const user = document.querySelector(".card");

fetch("https://api.github.com/users/lucas93220").then(response => response.json())
/* .then(reponses => console.table(reponses)) */
.then(reponses => user.innerHTML += ` <p><b>${reponses.login}</b>
            <br><img src="${reponses.avatar_url}" alt="logo"><br>
            <a href="${reponses.html_url}" target="blank" class="button dark">
            Repertoire</a>
            <br>${reponses.location}</p>
`);