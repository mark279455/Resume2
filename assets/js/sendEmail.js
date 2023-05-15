function sendMail(contactForm) {
    emailjs.send("service_fenbe2l", "template_rds7nwo", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}

// emailjs.send("service_fenbe2l", "template_rds7nwo", {
//     name: "Mark",
//     notes: "The project that I want is..."
// })
