var container = document.getElementById('card-container');

var rowDiv = document.createElement('div');
rowDiv.classList.add('row', 'px-4', 'pt-4', 'ps-4');
container.appendChild(rowDiv);


function createStudentCard(index) {

var colDiv = document.createElement('div');
colDiv.classList.add('col-12', 'col-lg-3', 'col-md-4', 'col-sm-6', 'mb-4');
rowDiv.appendChild(colDiv);


var cardDiv = document.createElement('div');
cardDiv.setAttribute('class', 'card');
colDiv.appendChild(cardDiv);

// Create an anchor element for the card header
var cardHeader = document.createElement('a');
cardHeader.setAttribute('href', 'detail.html');
cardDiv.appendChild(cardHeader);

// Create an img element for the card image
var cardImg = document.createElement('img');
cardImg.setAttribute('class', 'card-img-top');
cardImg.setAttribute('src', './images/avatar img.avif');
cardHeader.appendChild(cardImg);

// Create a div element for the card body
var cardBody = document.createElement('div');
cardBody.classList.add('card-body', 'bg-black', 'text-white');
cardDiv.appendChild(cardBody);

// Create a heading element for the card title
var cardTitle = document.createElement('h5');
cardTitle.setAttribute('class', 'card-title');
var cardTitle_text_node = document.createTextNode('M.Ahmed');
cardTitle.appendChild(cardTitle_text_node);
cardBody.appendChild(cardTitle);

// Create a paragraph element for the card text
var cardText = document.createElement('p');
cardText.setAttribute('class', 'card-text');
var cardText_text_node = document.createTextNode('Web Development Student');
cardText.appendChild(cardText_text_node);
cardBody.appendChild(cardText);

// Create a paragraph element for the card link
var cardLink = document.createElement('p');
cardLink.classList.add('d-inline-flex', 'gap-1');
cardBody.appendChild(cardLink);

// Create an anchor element for the card link like icon/button
var cardLinkIcon = document.createElement('a');
cardLinkIcon.classList.add('btn', 'btn-primary', 'fst-italic');
cardLinkIcon.setAttribute('data-bs-toggle', 'collapse');
cardLinkIcon.setAttribute('href', '#collapseExample1' + index);
cardLinkIcon.setAttribute('role', 'button');
cardLinkIcon.setAttribute('aria-expanded', 'false');
cardLinkIcon.setAttribute('aria-controls', 'collapseExample1' + index);
cardLink.appendChild(cardLinkIcon);

var cardLinkIcon_text_node = document.createTextNode('View Details');
cardLinkIcon.appendChild(cardLinkIcon_text_node);

// Create a div element for the collapse content
var collapseDiv = document.createElement('div');
collapseDiv.classList.add('collapse');
collapseDiv.setAttribute('id', 'collapseExample1' + index);
cardBody.appendChild(collapseDiv);

// Create a div element for the collapse card body
var collapseCardBody = document.createElement('div');
collapseCardBody.classList.add('card', 'card-body', 'bg-secondary', 'bg-gradient', 'text-white');
collapseDiv.appendChild(collapseCardBody);


// Create text nodes for the collapse card body
var collapseCardBody_text_node = document.createTextNode('Roll no : WMA-2343');
collapseCardBody.appendChild(collapseCardBody_text_node);

var collapseCardBodyLineBreak = document.createElement('br');
collapseCardBody.appendChild(collapseCardBodyLineBreak);

var collapseCardBody_text_node = document.createTextNode('Location : Karachi , Gulshan-e-Iqbal');
collapseCardBody.appendChild(collapseCardBody_text_node);

var collapseCardBodyLineBreak = document.createElement('br');
collapseCardBody.appendChild(collapseCardBodyLineBreak);

var collapseCardBody_text_node = document.createTextNode('Batch : 23rd Batch');
collapseCardBody.appendChild(collapseCardBody_text_node);

var collapseCardBodyLineBreak = document.createElement('br');
collapseCardBody.appendChild(collapseCardBodyLineBreak);

var collapseCardBody_text_node = document.createTextNode('Status : Active');
collapseCardBody.appendChild(collapseCardBody_text_node);

var collapseCardBodyLineBreak = document.createElement('br');
collapseCardBody.appendChild(collapseCardBodyLineBreak);


// Create an anchor element for the card link to navigate to the detail page
var cardLinkNavIcon = document.createElement('a');
cardLinkNavIcon.classList.add('btn', 'btn-light', 'text-primary', 'fw-bold', 'w-75', 'mt-2', 'text-decoration-none');
cardLinkNavIcon.setAttribute('href', 'detail.html');
cardLinkNavIcon.appendChild(document.createTextNode('View Profile'));
collapseCardBody.appendChild(cardLinkNavIcon);
}


for (var i = 1; i <= 6; i++) {
    createStudentCard(i);
}


