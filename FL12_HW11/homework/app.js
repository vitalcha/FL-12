const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
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
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');
function activeFolder(el, structure) {
  if (structure) {
    const ul = document.createElement('ul');
    for (let item of structure) {
      const li = document.createElement('li');
      const el = document.createElement('div');
      el.classList.add('title');
      li.appendChild(el);
      if (item.folder) {
        li.classList.add('folder');
        el.addEventListener(
          'click',
          event => {
            event.target.parentNode.classList.toggle('open');
            if (event.target.parentNode.classList.contains('open')) {
              event.target.children[0].textContent = 'folder_open';
            } else {
              event.target.children[0].textContent = 'folder';
            }
            event.preventDefault();
          },
          true
        );
        let image = document.createElement('i');
        image.classList.add('material-icons', 'folder');
        image.textContent = 'folder';
        el.appendChild(image);
        el.appendChild(document.createTextNode(item.title));
        activeFolder(li, item.children);
      } else {
        li.classList.add('file');
        let image = document.createElement('i');
        image.classList.add('material-icons', 'file');
        image.appendChild(document.createTextNode('insert_drive_file'));
        el.appendChild(image);
        el.appendChild(document.createTextNode(item.title));
      }
      ul.appendChild(li);
    }
    el.appendChild(ul);
  } else {
    let emptyFolder = document.createElement('p');
    emptyFolder.classList.add('empty-message');
    const textNode = document.createTextNode('Folder is empty');
    emptyFolder.appendChild(textNode);
    el.appendChild(emptyFolder);
  }
}

activeFolder(rootNode, structure);