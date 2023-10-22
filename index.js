document.addEventListener('DOMContentLoaded', () => {
    const navHeader = document.getElementById('navHeader');
    const dropdown = document.getElementById('dropdown');
  

    const toggleDropdown = () => {

      dropdown.classList.toggle('show');
    };
  
    navHeader.addEventListener('click', toggleDropdown);
  });