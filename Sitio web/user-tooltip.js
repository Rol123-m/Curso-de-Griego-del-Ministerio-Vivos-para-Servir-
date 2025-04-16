document.addEventListener('DOMContentLoaded', function() {
    // Verificar autenticación
    if(!localStorage.getItem('authenticated')) {
        window.location.href = "login.html";
        return;
    }

    // Obtener datos del usuario
    const userData = JSON.parse(localStorage.getItem('userData'));
    if(!userData) return;

    // Crear círculo
    const circle = document.createElement('div');
    circle.className = 'user-initial-circle';
    circle.textContent = userData.inicial;
    document.body.appendChild(circle);

    // Crear tooltip
    const tooltip = document.createElement('div');
    tooltip.className = 'user-tooltip';
    tooltip.innerHTML = `
        <button class="close-tooltip">&times;</button>
        <h4>Datos del Usuario</h4>
        <p><strong>Nombre:</strong> ${userData.nombre}</p>
        <p><strong>Apellido:</strong> ${userData.apellido}</p>
        <p><strong>ID:</strong> ${userData.id}</p>
        <a href="logout.html" style="display: block; margin-top: 10px; color: #6f42c1; text-decoration: none;">
            Cerrar sesión
        </a>
    `;
    document.body.appendChild(tooltip);

    // Eventos
    circle.addEventListener('click', function(e) {
        e.stopPropagation();
        tooltip.style.display = 'block';
    });

    document.querySelector('.close-tooltip').addEventListener('click', function(e) {
        e.stopPropagation();
        tooltip.style.display = 'none';
    });

    document.addEventListener('click', function() {
        tooltip.style.display = 'none';
    });

    tooltip.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});