
var rootRef = firebase.database().ref().child("bins");
  rootRef.on("child_added", snap => {
    var status = snap.child("STATUS01").val();
    $("#t1").append("<tr><td>bins01</td><td>"+ status +"</td></tr>");

  });

  var rootRef = firebase.database().ref().child("bins01");
    rootRef.on('child_added', snap  => {
      var status1 = snap.child("STATUS02").val();
      $("#t1").append("<tr><td>bins02</td><td>"+ status1 +"</td></tr>");

    });
