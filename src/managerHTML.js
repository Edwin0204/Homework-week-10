const generateManagerSection = ({ name, role, id, email, officeNumber }) => {
    return `
    <div class="col-md-3 py-2">
        <div class="card h-100 bg-light shadow">
            <div class="card-block">
                <div class="card-header bg-primary text-white">
                    <h3 id="name">${name}</h3>
                    <h4><i class="fas fa-mug-hot"></i> Manager </h4>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                        <li class="list-group-item">Office Number: ${officeNumber}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    `;
}

module.exports = generateManagerSection;