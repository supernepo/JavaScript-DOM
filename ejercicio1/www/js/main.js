"use strict";

async function getUserData(users) {
  const arrayUsers = [];
  const url = `https://randomuser.me/api/?results=${users}`;
  const response = await fetch(url);
  const fullData = await response.json();
  const usersData = fullData.results;
  for (let i = 0; i <= users - 1; i++) {
    const user = {
      Usuario: usersData[i].login.username,
      Nombre: usersData[i].name.first,
      Apellido: usersData[i].name.last,
      Genero: usersData[i].gender,
      Pais: usersData[i].location.country,
      Email: usersData[i].email,
      Foto: usersData[i].picture.large,
    };
    arrayUsers.push(user);
  }
  console.log(arrayUsers);
}
getUserData(5);

/* 


*/
