console.log('Hey There');

$(document).ready(onReady);

// GET (page load) > POST (save) > GET (refresh data)

function onReady() {
  console.log('READY!!!');

  // EVENT LISTENERS
  $('.js-btn-save').on('click', clickToSavePerson);

  // get people
  getPeople();
}

function clickToSavePerson() {
  const personObject = {
    name: $('.js-input-name').val(),
    age: $('.js-input-age').val(),
  };

  $('.js-input-name').val('');
  $('.js-input-age').val('');

  // push to list
  $.ajax({
    type: 'POST',
    url: '/people',
    data: personObject,
  })
    .then(function (response) {
      console.log(response);
      // GET
      getPeople();
    })
    .catch(function (err) {
      console.log(err);
      alert('There was an error saving your person.');
    });
}

function getPeople() {
  $.ajax({
    type: 'GET',
    url: '/people',
  })
    .then(function (response) {
      // response // people List
      render(response);
    })
    .catch(function (err) {
      console.log(err);
      alert('There was an issue showing people.');
    });
}

function render(people) {
  $('.js-people').empty();
  for (let i = 0; i < people.length; i++) {
    const person = people[i];
    $('.js-people').append(`
      <li>${person.name} is ${person.age} years old</li>
    `);
  }
}
