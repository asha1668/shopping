data = JSON.parse(localStorage.getItem("Signup")) || [];
document.getElementById("submit_div").addEventListener("click",function(e){
    e.preventDefault();
    console.log("hello");

    let form_data = {
        name: document.getElementById("name").value,
        mobile: document.getElementById("mobile").value,
        email: document.getElementById("email").value,
        
        pass: document.getElementById("password").value,
        
    };

   // console.log(form_data.name,form_data.mobile,form_data.email,form_data.pass,form_data.conPass);
    if(document.getElementById("name").value==""||document.getElementById("mobile").value=="" || document.getElementById("email").value==""||document.getElementById("password").value=="" )
    {
            alert("Fill all the fields")
    }
    else{
        data.push(form_data);
    console.log(form_data);
    localStorage.setItem("Signup", JSON.stringify(data));
    alert("Account Created");
    window.location.href = "login.html";
    }
    


})