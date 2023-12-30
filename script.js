document.addEventListener('DOMContentLoaded', function () {
  const getUsersBtn = document.getElementById('getUsersBtn');
  const userGrid = document.getElementById('userGrid');
  const loader = document.getElementById('loader');

  getUsersBtn.addEventListener('click', getUsers);

  function getUsers() {
    showLoader();
    fetch('https://reqres.in/api/users?page=1')
      .then(response => response.json())
      .then(data => {
        hideLoader();
        displayUsers(data.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        hideLoader();
      });
  }

  function displayUsers(users) {
    userGrid.innerHTML = '';
    users.forEach(user => {
      const userCard = document.createElement('div');
      userCard.className = 'user-card';
      userCard.innerHTML = `
        <img src="${user.avatar}" alt="${user.first_name}">
        <p>${user.first_name} ${user.last_name}</p>
        <p>Email: ${user.email}</p>
      `;
      userGrid.appendChild(userCard);
    });
  }

  function showLoader() {
    loader.style.display = 'block';
  }

  function hideLoader() {
    loader.style.display = 'none';
  }
});
