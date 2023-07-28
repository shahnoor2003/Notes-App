const createnote = ()=>{
  var container =  document.querySelector('.container');
  let html_data = `
   <div class="note">
                <div class="nav d-flex jsa cp fs-3 ps">
                  <ion-icon  class="check" name="checkmark-outline"></ion-icon>
                    <ion-icon  id="button1" name="trash-outline"></ion-icon>
                </div><br>
                <textarea placeholder="Write Note Here..."></textarea>

                <p class="value"></p>
        </div>`
  container.insertAdjacentHTML('afterbegin',
  html_data
    ); 
  const p_value = container.querySelector('.value');
  const note = document.querySelector('.note');
  const textarea = document.querySelector('textarea');
  container.querySelector('#button1').addEventListener('click',()=>{
  note.remove();})
  container.querySelector('.check').addEventListener('click',()=>{
     p_value.innerHTML=textarea.value;
     textarea.remove();
  });
}
function updatetoLS(){
  const p_values = document.querySelectorAll('.value');
  const notes = [];
  p_values.forEach((e)=>{
     notes.push(e.innerHTML);
  })
   console.log(notes);
  localStorage.setItem('notes',JSON.stringify(notes));
}
const notes = JSON.parse((localStorage.getItem('notes')));
if (notes) {
  notes.forEach((note)=>{
    const container =  document.querySelector('.container');
    let html_data = `
     <div class="note">
                  <div class="nav d-flex jsa cp fs-3 ps">
                      <ion-icon  id="button" name="trash-outline"></ion-icon>
                  </div><br>
                  <p class="value"></p>
          </div>`
    container.insertAdjacentHTML('afterbegin',
    html_data
      ); 
     
      const p_val = document.querySelector('.value');
      p_val.innerHTML=note;
      container.querySelector('#button').addEventListener('click',()=>{
        const note= container.querySelector('.note');
        note.remove();
      })
  });
  
}
const save = document.querySelector('#save').addEventListener('click',()=>{
  updatetoLS();
})
document.querySelector('#add-btn').addEventListener("click",createnote);