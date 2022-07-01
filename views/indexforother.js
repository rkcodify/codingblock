
async function user()
{
    try {
       const response = await fetch("http://127.0.0.1/",
            {method : 'POST',
            headers : {'content-type':'text/html'},
            });
            const userdata = await response.json();
            console.log(userdata);
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
        login.innerHTML = data1 +`<a href="/logout"><button id="signup">logout</button></a>`;
        login.style.fontSize = "1.5rem";
        login.style.color = "white";
       }
        }
    ));
}
else{
    console.log("we have the error");
}

 