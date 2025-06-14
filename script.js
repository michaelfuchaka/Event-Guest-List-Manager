
 
 
 function displayGuestList(event){
  event.preventDefault();

  const textInput = document.getElementById('text-input');
  const guestCategory = document.getElementById('guest-category');
  const guestList = document.getElementById('guestlist');

  const name = textInput.value.trim();
  const category = guestCategory.value;

    // Prevent adding Blank names
    if (name ==='' || category === ''){
      alert("please enter name and select category.");
      return;
    }
    // Check how many guests name we have
    const currentGuests = guestList.getElementsByTagName('li').length;
           if (currentGuests >= 10){
            alert("Guest limit reached(We can only accomodate 10 guests).");
            return;
           }
      // create new list item
          const li = document.createElement('li');
            li.className = 'guest'
            li.textContent = `${name} - (${category})`

            //RSVP
            const rsvpMark = document.createElement('label');
            rsvpMark.style.marginLeft = '10px';

            const rsvpCheckbox=document.createElement('input');
            rsvpCheckbox.type = 'checkbox';
            rsvpCheckbox.className = 'attendanceToggle';

            rsvpMark.appendChild(rsvpCheckbox);
            

            //RSVP STATUS
            const rsvpStatus =document.createElement('span');
            rsvpStatus.className = 'rsvpStatus';
            rsvpStatus.textContent = 'Not Attending';
            rsvpStatus.style.color ='red';
            rsvpStatus.style.marginLeft = '10px';

            //Adding Delete guest button
            const delBtn = document.createElement('button');
              delBtn.textContent = 'Remove Guest';
              delBtn.className = 'del-button';

              delBtn.style.marginLeft = '10px';

           // Add to the guest list
           li.appendChild(rsvpMark);
           li.appendChild(rsvpStatus)
              li.appendChild(delBtn);
          guestList.appendChild(li);
          
          textInput.value='';
          guestCategory.value = '';

} 
  // Global delete button
  document.addEventListener('click',function(evt){

    if (evt.target.matches('.del-button')){
      evt.target.closest('li').remove();}

  });

  // Toggle Rsvp
  document.addEventListener('change',function(evt){
    if
    (evt.target.matches('.attendanceToggle'))
    {
      const guestItem = evt.target.closest('li');
      const rsvpStatus= guestItem.querySelector('.rsvpStatus');
      if (evt.target.checked){
      rsvpStatus.textContent= 'Attending';
      rsvpStatus.style.color ='green';
      
      }else{
        rsvpStatus.textContent = 'Not Attending';
        rsvpStatus.style.color ='red';
      }
    }
  })