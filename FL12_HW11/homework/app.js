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

// Todo: your code goes here
let headerLi,headUl,span,childLi,childUl,folderIconHead;
for (let i = 0; i < structure.length; i++) {
  const obj = structure[i];
  if(obj.folder === true){
    headUl = document.createElement('ul');
    headerLi = document.createElement('li');
    span = document.createElement('span');
    folderIconHead = document.createElement('i');
    headerLi.appendChild(folderIconHead).textContent='folder';
    folderIconHead.classList.add('material-icons');
    headUl.appendChild(headerLi);
    headerLi.appendChild(span).textContent = obj.title;
    span.classList.add('caret');
    rootNode.appendChild(headUl);
  }
  if(obj.children){
    const ulNested = document.createElement('ul'),
    file = document.createElement('i'),
    folder2 = document.createElement('i');
    headerLi.appendChild(ulNested);
    ulNested.classList.add('nested');
      for(let i=0;i<obj.children.length;i++){
        const chilObj = obj.children[i];
        childLi = document.createElement('li');
        if(chilObj.folder === true){
          const span2 = document.createElement('span'),
                textLi = document.createElement('li'),
                textUl = document.createElement('ul');
                
          ulNested.appendChild(childLi);
          span2.classList.add('caret');
          childLi.appendChild(folder2).textContent='folder';
          folder2.classList.add('material-icons');
          childLi.appendChild(span2).textContent = chilObj.title;
              if(chilObj.children === null){
                  childLi.appendChild(textUl);
                  textUl.classList.add('nested');
                  textUl.appendChild(textLi).textContent='Folder is emoly';
                  textLi.classList.add('italicStyle');
              }
        } else{ 
          childLi.appendChild(file).textContent='insert_drive_file';
          file.classList.add('material-icons','icons_file');
          ulNested.appendChild(childLi);
          childLi.appendChild(document.createElement('span')).textContent=chilObj.title;
        }
        if(chilObj.children){
          childUl = document.createElement('ul');
          childLi.appendChild(childUl);
          childUl.classList.add('nested');
          for(let i=0;i<chilObj.children.length;i++){
              const childInChild = chilObj.children[i];
              const childInChildLi = document.createElement('li');
              childUl.appendChild(childInChildLi);
              if(childInChild.folder === true ){
                const span3 = document.createElement('span'),
                      folder3 =document.createElement('i'),
                      textUl = document.createElement('ul'),
                      textLi = document.createElement('li');

                span3.classList.add('caret');
                childInChildLi.appendChild(folder3).textContent='folder';
                folder3.classList.add('material-icons');
                childInChildLi.appendChild(span3).textContent = childInChild.title;
                childInChildLi.appendChild(textUl);
                textUl.classList.add('nested');
                textUl.appendChild(textLi).textContent='Folder is emoly';
                textLi.classList.add('italicStyle');
              } else{
                const file2 = document.createElement('i');
                childInChildLi.appendChild(file2).textContent='insert_drive_file';
                file2.classList.add('material-icons','icons_file');
                childInChildLi.appendChild(document.createElement('span')).textContent=childInChild.title;
              }
          }
        }
      }
  }
}
function activ() {
  let toggler = document.querySelectorAll('.caret');
  let icon = document.querySelectorAll('.material-icons');
  for (let i = 0; i < toggler.length; i++) {
      toggler[i].addEventListener('click', function() {
          this.parentElement.querySelector('.nested').classList.toggle('active');
      });
  }
  for(let i=0;i<toggler.length;i++){
    for(let j=0;j<icon.length;j++){
      toggler[i].addEventListener('click',function() {
        if(this.parentElement.querySelector('i').textContent === 'folder_open'){
          this.parentElement.querySelector('i').textContent = 'folder';
        } else{
          this.parentElement.querySelector('i').textContent='folder_open';
        }
      });
    }
  }
}
activ();