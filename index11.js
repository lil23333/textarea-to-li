let story = document.querySelector('#story');

let btn = document.querySelector('#btn');

btn.addEventListener('click', (e)=> {
    let arr = document.getElementsByName('story')[0].value.split('\n').filter(str=>str.length>1);
    let ul = document.createElement('ul'); 
    story.after(ul);

    arr.forEach(el=> {
    let li = document.createElement('li'); 
     ul.appendChild(li);
        li.innerHTML = el;
        ul.after(li);
    });
});









