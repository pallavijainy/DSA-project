function PrivateRoute(){
    let blog = document.querySelector("#blog")
    blog.addEventListener("click",()=>{
        console.log("C")
        let call = localStorage.getItem("login")
        console.log(call)
        if(call == "true"){
            window.location.href="/BlogPage.html"
        }else{
            window.location.href="/signin.html"
        }
        })

        
        let logout = document.querySelector("#logout")
       

            logout.addEventListener("click",()=>{
                if(logout.innerText=="LOGOUT"){
                    localStorage.setItem("login",false)
                    window.location.href = "/signin.html"
                }else{
                    window.location.href="/signin.html"
                }
              
               
               
            })
        
// --------------------------------------------------------------------
            let add = document.querySelector("#add")
            add.addEventListener("click",()=>{
                console.log("C")
                let call = localStorage.getItem("login")
                console.log(call)
                if(call == "true"){
                    window.location.href="/Add.html"
                }else{
                    window.location.href="/signin.html"
                }
                })
}
export default PrivateRoute;