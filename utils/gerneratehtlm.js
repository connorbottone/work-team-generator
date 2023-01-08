function createHTML(employeeMembers) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="Description" content="Enter your description here"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile Generator</title>
    </head>
    <body>
    ${employeeMembers
      .map((member) => {
        return ` 
    <div class="row my-5 align-items-center justify-content-center">
      <div class="col-8 col-lg-4 col-xl-3">
        <div class="card border-primary">
          <div class="card-body text-left py-4">
                <h5 class="card-title">${member.name}, ${member.getRole(
          "Manager",
          "Engineer",
          "Intern"
        )}</h5>
                <p class="card-text">
                  ID: ${member.id}
                </p>
                <p class="card-link">Email: <a href="mailto:${
                  member.email
                }" target="_blank">${member.email}</a></p>
                <p class="card-link">${member.getSpecial(
                  "Manager",
                  "Engineer",
                  "Intern"
                )}</p>
                </p>
                </div>
                </div>
              </div>
            </div>`;
      })
      .join("")}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js"></script>
      </body>
      </html>`;
  }
  
  module.exports = createHTML;
  
  {
  }