const city = document.querySelector('#city');
const tourismType = document.querySelector('#tourism-type');
const keyword = document.querySelector('#keyword');
const searchBtn = document.querySelector('#search');

//首頁搜尋
searchBtn.addEventListener("click",function(e){
    let thisCity = city.value; 
    let thisTourismType = tourismType.value; 
    let thisKeyword = keyword.value; 
    if(thisCity=="%" && thisTourismType=="%" && thisKeyword==""){
        alert("請輸入查詢縣市、類別及關鍵字!!");
        return;
    }
    
    let link = "search-list.html?";
    if(thisCity!="%"){
        link+="city="+thisCity;
    }
    if(thisTourismType!="%"){
        link+="&type="+thisTourismType;
    }
    if(thisKeyword!=""){
        link+="&keyword="+thisKeyword;
    }
    console.log(link);
    location.href=link;
})











// -----------小節作業--------------

// const signUpAccount = document.querySelector('.signUp .account');
// const signUpPassword = document.querySelector('.signUp .password');
// const signUpBtn = document.querySelector('.signUp .btn');
// const loginAccount = document.querySelector('.login .account');
// const loginPassword = document.querySelector('.login .password');
// const loginBtn = document.querySelector('.login .btn');

// // console.log(signUpAccount.value); 
// signUpBtn.addEventListener("click",function(e){
//   if(signUpAccount.value=="" || signUpPassword.value==""){
//     alert("請輸入帳號密碼!");
//     return;
//   }
//   let obj = {};
//   obj.email = signUpAccount.value;
//   obj.password = signUpPassword.value;
  
//   axios.post('https://hexschool-tutorial.herokuapp.com/api/signup',obj)
//     .then(function(response){
//         alert(response.data.message);
//         signUpAccount.value="";
//         signUpPassword.value="";
//     })
//     .catch(function(error){
//         console.log(error);
//     })
// })

// loginBtn.addEventListener("click",function(e){
//     if(loginAccount.value=="" || loginPassword.value==""){
//         alert("請輸入帳號密碼!");
//         return;
//     }
//     let obj = {};
//     obj.email = loginAccount.value;
//     obj.password = loginPassword.value;
    
//     axios.post('https://hexschool-tutorial.herokuapp.com/api/signin',obj)
//     .then(function(response){
//         alert(response.data.message);
//         loginAccount.value="";
//         loginPassword.value="";
//     })
//     .catch(function(error){
//         console.log(error);
//     })
// })