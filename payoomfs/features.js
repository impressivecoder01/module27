document.getElementById('btn-show-cash-out').addEventListener('click',function(event){
    // show cash out button clicked
    document.getElementById('cash-out-form').classList.remove('hidden')
    
    // hide the add money form
    document.getElementById('add-money-form').classList.add('hidden')
});

document.getElementById('btn-toggle-add').addEventListener('click', function(){
    document.getElementById('add-money-form').classList.remove('hidden')
    document.getElementById('cash-out-form').classList.add('hidden');
})