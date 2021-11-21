const searchCity = document.querySelector('#search-city');
const searchKeyword = document.querySelector('#search-key');
const searchAddr = document.querySelector('#search-addr');
const searchBtn = document.querySelector('.search-btn');

const noResMessage = document.querySelector('.no-res-message');
const resList = document.querySelector('.res-list');

// const resList = document.querySelector('.res-list');
// const resList = document.querySelector('.res-list');

// console.log(resList);



//路線搜尋
let msg = "請輸入查詢關鍵字";
let str = "";
render();

searchBtn.addEventListener('click',function(e){

    msg = "";
    str = "";
    
    e.preventDefault();
    let city =searchCity.value;
    let keyword = searchKeyword.value;
    if(city==""){
        alert("請選擇縣市並輸入查詢關鍵字");
        return;
    }else if(city=="no-result"){
        msg = "很抱歉，沒有找到相關的路線。";
        str = "";
        render();
        return;
    }else{
    
        msg = "";
        let url = `https://ptx.transportdata.tw/MOTC/v2/Cycling/Shape/${city}?$filter=contains(RouteName%2C%20'${keyword}')&$format=JSON`;
        console.log(url);
        // &$top=30

        
        axios.get(url)
            .then(function(response){
                let myData = response.data;
                let routeName = "";
                let routeDirection = "";
                let routeLength = "";
                let routeCity = "";
                let routeTown = "";
                
                myData.forEach(item => {
                    routeName = item.RouteName;
                    routeDirection = item.Direction;
                    routeLength = item.CyclingLength;
                    routeCity = item.City;
                    routeTown = item.Town;
                    // console.log(myData);
                    // console.log(routeName, routeDirection, routeLength, routeCity, routeTown);

                    str+=`
                    <li class="res-card brd-25 over-hid">
                        <div class="route-img"><img src="https://picsum.photos/360/192/?random=1" alt="" class="obj-fit"></div>
                        <div class="route-info">
                            <h6>${routeName}</h6>
                            <p class="flex-row jcsb">
                                <span>${routeDirection} ${routeLength}公里</span>
                                <span>
                                    <i class="fas fa-map-marker-alt"></i>
                                    ${routeCity}${routeTown}</span>
                            </p>
                        </div>
                    </li>`;
                    });
                    // console.log(str);

                    render();

            })


        }




})


function render(){
    // "RouteName": " 臺中市大安濱海自行車道",
    // "Direction": "雙向",
    // "CyclingLength": 26000,
    // "City": "臺中市",
    // "Town": "大安區",
    noResMessage.textContent = msg;
    resList.innerHTML = str;
}

// render();


//取得位置
// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//       function (position) {
//         const longitude = position.coords.longitude;  // 經度
//         const latitude = position.coords.latitude;  // 緯度
//         console.log(longitude)
//         console.log(latitude)



//       })
// }
 



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