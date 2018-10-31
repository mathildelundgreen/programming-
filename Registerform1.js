
document.getElementById("create").addEventListener("click", function (){   
    
    
    var form = document.getElementById("register-form");     

    for(var i=0; i < form.elements.length; i++){
        if(form.elements[i].value === '' && form.elements[i].hasAttribute('required')){
            alert('There are some required fields!');
            return false;
        }
    }

    function save()

    var userValue = document.getElementById ("user").value;
    localStorage.getItem("user", "userValue");

    if(users == null ){
        users = [new User ("Mathilde", "Lundgreen", "mathi", "Denmark", "mathildelundgreen@gmail.com", "sunny", "sunny")
                new User ("Theodor" "Lundgreen" "theo" "Sweden" "theo@gmail.com" "foggy" "foggy")]
    }
   
   
});


var users = localStorage.getItem("users");

if(users == null ){
    users = [new User ("Mathilde", "Lundgreen", "mathi", "Denmark", "mathildelundgreen@gmail.com", "sunny", "sunny")
            new User ("Theodor" "Lundgreen" "theo" "Sweden" "theo@gmail.com" "foggy" "foggy")]
}


});
