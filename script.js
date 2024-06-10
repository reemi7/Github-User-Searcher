
const apiurl = "https://api.github.com/users/";
const main = document.querySelector("#main");
const search = document.querySelector('#search')
let btn = document.querySelector('button')
const getuser = async (username) => {
    try {
        const resp = await fetch(apiurl + username);
        const data = await resp.json();
        console.log(data);
        const card = `
        <div>
            <img src="${data.avatar_url}" alt="" class="avatar">
        </div>
            <div class="card container">
                <div class="user-info">
                    <h1>${data.name}</h1>
                    <h4>${data.bio}</h4>
                    <ul class="info">
                        <li>${data.followers} <strong>followers</strong></li>
                        <li>${data.following} <strong>following</strong></li>
                        <li>${data.public_repos} <strong>repos</strong></li>
                    </ul>
                    <div id="repos">
                    </div>
                </div>
            </div>
        `;

        main.innerHTML = card;
        hide_div.classList.add('show')

        getrepos(username);
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
};

const getrepos = async (username) => {
    try {
        const response = await fetch(apiurl + username + "/repos");
        const data = await response.json();
        console.log(data);
        let repos = document.querySelector("#repos");
        data.forEach((item,i) => {
            const elem = document.createElement("a");
            
            elem.classList.add("repo");
            elem.href = item.html_url;
            elem.innerText = item.name;
            elem.target = "_blank";
            repos.appendChild(elem);

        });
    } catch (error) {
        console.error("Error fetching user repos:", error);
    }
};

// getuser("taylorotwell");
let hide_div=  document.querySelector('.main-div-parent')


btn.addEventListener('click',()=>{
    if (search.value!==''){
        getuser(search.value)
        // hiden()
        // hide_div.style.display = "block"

        // main_button_show_veriable.classList.toggle('show')
    }
    console.log("oki")
})

// let main_button_show_veriable ;

// function hiden(){
//     hide_div.classList.toggle('show')
//     // if(main_button_show_veriable==1){
//     //     // hide_div.classList.toggle('show')
//     //     hide_div.style.display = "none"
//     //     main_button_show_veriable=0
//     // }
//     // else{
//     //     hide_div.style.display = "block"

//     //     main_button_show_veriable=1

//     // }

    

// }
 
// let formSumbit = ()=>{
//     if (search.value!==''){
//         getuser(search.value)
//     }
// }




// const apiurl = "https://api.github.com/users/";
// const main = document.querySelector("#main")
// const getuser = async (username) => {
//     const resp = await fetch(apiurl + username);
//     const data = await resp.json()
//     console.log(data)
//     const card = ` <div class="card">
//     <div>
//         <img src="${data.avatar_url}" alt="" class="avatar">
//     </div>
//     <div class="user-info">
//         <h1>${data.name}</h1>
//         <p>${data.bio}</p>
//         <ul class="info">
//             <li>${data.followers} <strong>followers</strong></li>
//             <li>${data.following} <strong>following</strong></li>
//             <li>${data.public_repos} <strong>repos</strong></li>
//         </ul>
//         <div id="repos">
      
           
//         </div>
//     </div>
// </div> `

//     main.innerHTML = card;
//     getrepos(username)


// }
// getuser("taylorotwell")
// let  repos = document.querySelector("#repos")
// const getrepos = async (username) => {
//     const response = await fetch(apiurl + username + "/repos")
//     const data = await response.json();
//         console.log(data)
//         data.forEach((item) => {
//             const elem = document.createElement("a")
//             elem.classList.add("repo")
//             elem.href = item.html_url
//             elem.innerText = item.name
//             elem.target = "_blank"
//         repos.appendChild(elem)
        

//     });

// }