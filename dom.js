// Examine the document object

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 789;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[9].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GetElementById
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var headerTitle = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.textContent = 'Good Morning';
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h2>Hello</h2>';
// headerTitle.style.borderBottom = 'solid 5px black';

// GET ELEMENT BY CLASSNAME
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Pizza';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'cyan';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4';
// }

// // GET ELEMENT BY TAG NAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Pizza';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'cyan';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length; i++){
//     li[i].style.backgroundColor = 'lightCyan';
// }

// // QUERY SELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderTop = 'solid 5px yellow';
// header.style.borderBottom = 'solid 5px yellow';

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var secondItem = document.querySelector('.list-group-item:nth-Child(2)');
// secondItem.style.color = 'indigo';

// var thirdItem = document.querySelector('.list-group-item:nth-Child(3)');
// thirdItem.style.color = 'lime';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// // QUERY SELECTOR ALL //
// var titles = document.querySelectorAll('.title');

// //console.log(titles);
// titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for(var i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = 'lightblue';
    even[i].style.backgroundColor = '#FF7F7F';
    // console.log(odd);
}