function toggleMenu() {
    const menu = document.getElementById('dropdownMenu');
    menu.classList.toggle('show');
}

// Close dropdown when clicking outside
window.onclick = function (event) {
    if (!event.target.matches('.menu-btn')) {
        const dropdowns = document.getElementsByClassName("dropdown-menu");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}




// Add active class on click
document.querySelectorAll('.floating-nav a').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelectorAll('.floating-nav a').forEach(a => a.classList.remove('active'));
        this.classList.add('active');
    });
});
