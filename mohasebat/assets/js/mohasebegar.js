if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
  var inputs = document.querySelectorAll('input[type="number"]');
  for (var i = inputs.length; i--;) inputs[i].setAttribute("pattern", "\\d*");
}
document.onkeydown = function (e) {
  if (event.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
};

function calculate() {
  let val1 = document.getElementById("karse-one-sorat").value;
  let val2 = document.getElementById("karse-two-sorat").value;
  let val3 = document.getElementById("karse-one-makhraj").value;
  let val4 = document.getElementById("karse-two-makhraj").value;
  if (val3 == "0" || val4 == "0") {
    Swal.fire({
      icon: "error",
      title: "کسر تعریف نشده است",
      background: "#e6e6e6",
      confirmButtonText: "باشه",
    });
    return;
  }
  if (val1 == "" || val2 == "" || val3 == "" || val4 == "") {
    Swal.fire({
      icon: "error",
      title: "فیلد های خالی را پر کنید",
      background: "#e6e6e6",
      confirmButtonText: "باشه",
    });
    return;
  } else {
    if (val1 / val3 == val2 / val4) {
      Swal.fire({
        icon: "error",
        title: "دو کسر برابر است",
        background: "#e6e6e6",
        confirmButtonText: "باشه",
      });
    } else {
      document.getElementsByClassName("result")[0].innerHTML =
        parseFloat(val1) + parseFloat(val2);
      document.getElementsByClassName("result1")[0].innerHTML =
        parseFloat(val3) + parseFloat(val4);
      document.getElementById("karse-one-sorat").value = "";
      document.getElementById("karse-one-makhraj").value = "";
      document.getElementById("karse-two-sorat").value = "";
      document.getElementById("karse-two-makhraj").value = "";
    }
  }
}

function calculate2() {
  if (document.getElementById("tedad-ozv").value == "") {
    swal.fire({
      icon: "error",
      title: "لطفا فیلد خالی را پر کنید",
      background: "#e6e6e6",
      confirmButtonText: "باشه",
    });
    return;
  }
  let math = Math.pow(2, document.getElementById("tedad-ozv").value);
  document.getElementById("result2").innerHTML = math.toString();
}

function checkPrime() {
  if (document.getElementById("addade").value == "") {
    swal.fire({
      icon: "error",
      title: "لطفا فیلد خالی را پر کنید",
      background: "#e6e6e6",
      confirmButtonText: "باشه",
    });
    return;
  }
  var n,
    i,
    flag = true;

  // Getting the value form the
  // text field using DOM
  n = document.getElementById("addade").value;
  n = parseInt(n);
  for (i = 2; i <= n - 1; i++)
    if (n % i == 0) {
      flag = false;
      break;
    }

  // Check and display output
  if (flag == true)
    swal.fire({
      icon: "succses",
      title: "اول است ",
      background: "#e6e6e6",
      confirmButtonText: "باشه",
    });
  else
    swal.fire({
      icon: "error",
      title: "اول نیست",
      background: "#e6e6e6",
      confirmButtonText: "باشه",
    });
}

function findNthPrime() {
  var n = document.getElementById("kodom").value;
  var num = 1;
  var count = 0;

  while (count < n) {
    num = num + 1;
    for (var i = 2; i <= num; i++) {
      if (num % i == 0) {
        break;
      }
    }
    if (i == num) {
      count = count + 1;
    }
  }
  swal.fire({
    icon: "succses",
    title: num,
    background: "#e6e6e6",
    confirmButtonText: "باشه",
  });
}