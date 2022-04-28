function submit() {
  var txt;
  if (confirm("You have successfully sent a message!")) {
    txt = "Message Sent";
  } else {
    txt = "Message Canceled";
  }
  document.getElementById("send").innerHTML = txt;

  let summaryMessage = "From: " + document.querySelector('#fname').value + ". Sent Message: " + document.querySelector('#subject').value + "... Thank you for sending a message to Hyelin! c: ";
  document.getElementById('summary').innerHTML = summaryMessage;

  document.querySelector('#fname').value= '';
  document.querySelector('#subject').value='';
document.querySelector('#lname').value='';
};
