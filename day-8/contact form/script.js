function sendEmail(){
    const email = document.getElementById("mail").value
    let name = document.getElementById("name").value
    console.log(email)
    Email.send({
        Host : "smtp.gmail.com",
        Username : "",
        Password : "",
        To : `${email}`,
        From : "info@edspace.app",
        Subject : `Hiiii, ${name}`,
        Body : `Hello thank you for submission ${name}`
    }).then(
      message => alert(message)
    );
}