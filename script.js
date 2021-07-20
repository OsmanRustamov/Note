let textarea = document.querySelector("#textarea");
let notes = [];
let two = {edit: false, key: undefined}; 
textarea.addEventListener   ('blur', function(){  
    if(two.edit){
        notes[two.key].text = this.value;
        this.value = '';
         two = {edit: false, key: undefined}; 
    }
    else{
    let date = new Date;
    let now =   zero(date.getHours()) + ':' +
                zero(date.getMinutes()) + ':' + 
                zero(date.getSeconds()) + ' ' +
                zero(date.getDate()) + '.' +
                zero(date.getMonth() + 1) + '.' +
                date.getFullYear()

    notes.push({ text: this.value, time: now});
    this.value = ''

    let li = document.createElement('li');
    li.dataset.num = notes.length - 1;
    li.innerHTML = now;
    list.appendChild(li);

    let self = this;
    li.addEventListener('click', function() {
        let num = this.dataset.num;
        self.value =  notes[num].text;
        two = {edit: true, key: num}; 

    })
}
}); 
function zero (num){
    if (num >=0 && num <= 9 ){
        return '0' + num 
    }
    else{
        return num
    }
}
