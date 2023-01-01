var register_btn = document.getElementById("register_btn");
//点击注册触发事件
register_btn.addEventListener("click",function(){
    // 获取所有判断div框
    var divs = document.getElementsByTagName('div');
    var check_divs=[];
    var success_inputs=[];
    var error_inputs=[];
    //调出所有的判断窗口
    for(let i = 0,j=0; i<divs.length; ++i){
        if(divs[i].className==="span-success"||divs[i].className==="span-error"||divs[i].className==="span-none"){
            check_divs[j]=divs[i];
            ++j;
        }
    }
    //将窗口进分类
    for (let i = 0 ,j=0 , k=0; i<check_divs.length; ++i) {
        if (check_divs[i].className==="span-success"){
            success_inputs[j]=check_divs[i];//输入正确的窗口
            ++j;
        }else {
            error_inputs[k]=check_divs[i];//输入错误的窗口
            ++k;
        }
    }
    //判断全部信息是否输入正确
    function doubleCheck(boolean) {
        return success_inputs.length===check_divs.length;
    }
    //判断输入框的信息是否输入正确
    if (doubleCheck()){
        var name=document.getElementById("user_name").value;
        var pwd= document.getElementById("user_password").value;
        //注册成功存入localStorage,并且弹回登录界面
        localStorage.setItem(name,pwd);
        document.getElementById("register_sucss").innerHTML = "注册成功，正在跳转登录界面。。。";
        //注册完成实现延时跳转登录
        //第二种延时跳转
        setTimeout(function(){
            window.location.href = "login.html";
        },1000);  //1秒
    } else{
        //调用shake使输入错误和空值的输入框抖动
        shake();
    }
    //抖动变红
    function shake() {
        for (let i=0;i<error_inputs.length;++i){
            error_inputs[i].parentNode.parentNode.classList.add('shake')
            error_inputs[i].parentNode.previousSibling.previousSibling.classList.add('color-error');
            setTimeout(()=>{ error_inputs[i].parentNode.parentNode.classList.remove('shake') }, 800)
            setTimeout(()=>{ error_inputs[i].parentNode.previousSibling.previousSibling.classList.remove('color-error') }, 800)
            var tips2 = error_inputs[i].parentNode.previousSibling.previousSibling;
            tips2.value = "";
            //右边小图标变回空值状态
            error_inputs[i].className = "span-none";
        }
    }
})