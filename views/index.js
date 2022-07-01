async function user()
{
    try {
       const response = await fetch("http://127.0.0.1/",
            {method : 'POST',
            headers : {'content-type':'text/html',
                       'Access-Control-Allow-Origin':'*',
                       'Access-Control-Allow-Methods':'GET, POST, OPTIONS, PUT, PATCH, DELETE',
                       'Access-Control-Allow-Headers':'Origin,X-Requested-With,content-type,set-cookie',
                       'Access-Control-Allow-Credentials':true}
            });
            const userdata = await response.json();
            return userdata;
    } catch (error) {
        console.log(error);
    }
}

const userdata = user();
if((userdata))
{
    (userdata.then((data)=>{
        let data1 = data.user;
        if(data1)
        {
        const login = document.querySelector(".login");
        const welcomecontent = document.querySelector("#welcomecontent");
        welcomecontent.innerHTML = `<p>Welcome <strong>${data1}</strong> thanks for signing up</p>`+`<p>Click on <strong>COURSES</strong> and</p>`+`<p>Start your codify journey with Us &#128512;</p>`;
        login.innerHTML = data1 +`<a href="/logout"><button id="signup">logout</button></a>`;
        login.style.fontSize = "1.5rem";
        login.style.color = "white";
        welcomecontent.style.marginTop = "100px";
       }
        }
    ));
}
else{
    console.log("we have the error");
}