const generateHtml = (team) => {
    const html = [];
    const manager = manager => {
        console.log(manager);
        let managerHtml = ` 
        <div class="card employee-card">
        <div class="card-header bg-primary text-light">
            <h2 class="card-title">${manager.name}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                <li class="list-group-item">Office number: ${manager.officeNumber}</li>
            </ul>
        </div>
        </div>
        `;
        html.push(managerHtml);
    }
    const engineer = engineer => {
        console.log(engineer);
        let engineerHtml = ` 
        <div class="card employee-card">
            <div class="card-header bg-primary text-light">
            <h2 class="card-title">${engineer.name}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
            </div>
            <div class="card-body">
            <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
            </ul>
            </div>
        </div>
        `;
        html.push(engineerHtml);
    }
    const intern = intern => {
        console.log(intern);
        let internHtml = ` 
        <div class="card employee-card">
         <div class="card-header bg-primary text-light">
            <h2 class="card-title">${intern.name}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
         </div>
         <div class="card-body">
            <ul class="list-group">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
            <li class="list-group-item">School: ${intern.school}</li>
            </ul>
         </div>
        </div>
        `;
        html.push(internHtml);
    }

    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            manager(team[i]);
        }
        if (team[i].getRole() === "Engineer") {
            engineer(team[i]);
        }
        if (team[i].getRole() === "Intern") {
            intern(team[i]);
        }
    }

    return html.join('');
}
module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Team</title>
    <!-- CCS Framework - Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <script src="https://kit.fontawesome.com/4d07055d3e.js" crossorigin=“anonymous”></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading bg-danger text-light">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateHtml(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};
