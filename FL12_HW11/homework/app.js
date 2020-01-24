const structure = [{
    'folder': true,
    'title': 'Films',
    'children': [{
        'title': 'Iron Man.avi'
      },
      {
        'folder': true,
        'title': 'Fantasy',
        'children': [{
            'title': 'The Lord of the Rings.avi'
          },
          {
            'folder': true,
            'title': 'New folder 1',
            'children': false
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Documents',
    'children': [{
      'folder': true,
      'title': 'EPAM Homework answers',
      'children': null
    }]
  }
];

const rootNode = document.getElementById('root');

function createFileTree(structure, pathNode) {
  let newList = document.createElement('ul'),
    newElement = document.createElement('li');
  newList.classList.add('list');
  if (pathNode !== rootNode) {
    newList.classList.add('nested');
  }
  pathNode.appendChild(newList);
  if (!structure) {
    newList.appendChild(newElement);
    newElement.innerHTML = `<span class='empty_folder'>This folder is empty</span>`;
    return;
  }
  for (let i = 0; i < structure.length; i++) {
    newElement = document.createElement('li');
    newList.appendChild(newElement);
    if (structure[i].folder) {
      newElement.innerHTML = `<div class='caret'><i class='material-icons folder_icon'>folder</i>
       ${structure[i].title}</div>`;
      createFileTree(structure[i].children, newElement);
    } else if (!structure[i].folder) {
      newElement.innerHTML = `<i class='material-icons file_icon'>insert_drive_file</i> ${structure[i].title}`;
    }
  }
}

function setupListeners() {
  let folders = document.getElementsByClassName('caret');
  for (let i = 0; i < folders.length; i++) {
    folders[i].addEventListener('click', folderToggle);
  }

  let listItems = document.getElementsByTagName('li');
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('mouseover', enterListItem);
    listItems[i].addEventListener('mouseout', leaveListItem);
  }
}

function assembleFileTree(structure, pathNode) {
  createFileTree(structure, pathNode);
  setupListeners();
}

function folderToggle() {
  let folder = this.parentElement.querySelector('.nested');
  folder.classList.toggle('active');
  if (folder.classList.contains('active')) {
    this.querySelector('i').textContent = 'folder_open';
  } else {
    this.querySelector('i').textContent = 'folder'
  }
}

function enterListItem(event) {
  if (event.target.firstChild.classList.contains('empty_folder')) {
    return;
  } else if (event.target.firstChild.tagName === 'DIV') {
    event.target.firstChild.classList.add('active-element');
  } else {
    event.target.classList.add('active-element');
  }
}

function leaveListItem(event) {
  if (event.target.firstChild.classList.contains('empty_folder')) {
    return;
  } else if (event.target.firstChild.tagName === 'DIV') {
    event.target.firstChild.classList.remove('active-element');
  } else {
    event.target.classList.remove('active-element');
  }
}

assembleFileTree(structure, rootNode);