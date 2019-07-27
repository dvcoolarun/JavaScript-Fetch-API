function createNode(element){
    return document.createElement(element);
};

function append(parent, el){
    return parent.appendChild(el);
};

const ul = document.getElementById('authors');

const url = 'https://randomuser.me/api/?results=20';

fetch(url)
    .then((resp) => resp.json())
    .then(function(data){
        let authors = data.results;
        return authors.map(function(author) { 
            let li = createNode('li'), 
                img = createNode('img'),
                span = createNode('span');
            img.src = author.picture.medium;
            span.innerHTML = `${author.name.first} ${author.name.last}`;
            append(li, img);
            append(li, span);
            append(ul, li);
        });
    })

    .catch(function(data) {
        console.log(error);
    });


/* 

  * Other types of requests
  * Change the headers 
  * send data
  
*/

/* For Post We need to set a object and pass it as second argument */

/* 
  const url = 'https://randomuser.me/api';

  // the data we're going to send in our request
  let data = {
  name: 'Sara'
  };

  // The parameters we're going to pass to the fetch function

  let fetchData = {
  method: 'POST',
  body: data,
  headers: new Headers()
  };

  fetch(url, fetchData)
  .then(function(data) {
  console.log(data.results);
  });
*/


// Instead, We can use **request constructor** with all the parameters we need
// In this case you don't have to pass the extra object to fetch

/*

  var request = new Request(url, {
  method: 'POST',
  body: data,
  headers: new Headers()
  });

  fetch(request)
  .then(function() {
  // Handle response from the request
  });

*/
