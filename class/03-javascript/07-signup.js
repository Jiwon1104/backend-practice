const checkValidation = function() {
    
    let email = document.getElementById("email").value
    let pw1 = document.getElementById("pw1").value
    let pw2 = document.getElementById("pw2").value

    if(email !== "" && pw1 !=="" && pw2 !==""  {
        // 모든 input이 비어있지 않을 때
        document.getElementById("submit").disabled = false

    } else {
         // 모든 input이 비어있을 때
         document.getElementById("submit").disabled = true

    }
}

// if절은 if(email&&pw1&&pw2)로도 바꿔쓸 수 있음