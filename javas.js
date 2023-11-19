const openModalButton = document.getElementById('reg_link');
const closeModalButton = document.getElementById('close-model');
const modal = document.getElementById('modal_block');

const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const popup = document.getElementById('popup');
const addForm = document.getElementById('modal_block');

openModalButton.addEventListener('click', (e) =>{
    e.preventDefault();
    modal.classList.add('open');
});


closeModalButton.addEventListener('click', ()=>{
    modal.classList.remove('open');
    nameInput.classList.remove('invalid');
    emailInput.classList.remove('invalid');
});


addForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    let error = 0;
    // Проверка ввода имени

    if(nameInput.value == ""){
        nameInput.classList.add('invalid');
    }
    if(emailInput.value == ""){
        emailInput.classList.add('invalid');
    }

    if (!/^[A-Za-z\s]+$/.test(nameInput.value)) {
        nameInput.classList.add('invalid');
        return;
    } else {
        nameInput.classList.remove('invalid');
    }

    if (!/^\S+@\S+\.\S+$/.test(emailInput.value)) {
        emailInput.classList.add('invalid');
        return;
    } else {
        emailInput.classList.remove('invalid');
    }

    if (error == 0){

        const formData = new FormData(addForm);
        const response = await fetch('sing_up.php', {
            method: 'POST',
            body: formData
        });

        const respcount = await response.text();

        if (response.ok) {
            alert('Succesfull registration! \n\r ' + respcount);
            nameInput.value = "";
            emailInput.value = "";
            modal.classList.remove('open');
        } else {
            alert('Error during registration.');

        }
    }
});