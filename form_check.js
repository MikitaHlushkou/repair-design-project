function validateForm() {
   let a = document.forms["Form_online_control"]["username"].value;
    let b = document.forms["Form_online_control"]["phone"].value;
   
    if (a == null || a == "", b == null || b == "") {
      alert("Please Fill All Required Field");
      return false;
    }
  }


  function validateForm_consultation() {
    let a = document.forms["Form_consultation"]["username-c"].value;
    let b = document.forms["Form_consultation"]["phone-c"].value;
   let c=document.forms["Form_consultation"]["mail-c"].value;
    if (a == null || a == "", b == null || b == "",c == null || c == "") {
      alert("Please Fill All Required Field");
      return false;
    }
  }










  