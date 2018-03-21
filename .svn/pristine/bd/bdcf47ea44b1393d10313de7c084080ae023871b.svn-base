function gradeTest() {
     //variables with global implications
     var totalQuestions = 5;
     var correctAnswers = 0;
     var alertText;
     var i;
	 var a1 = document.getElementById('q1').value.toLowerCase();
     if(a1 == 1080) {
          correctAnswers++;
     }
	 var a2 = document.getElementsByName('q2');
     for(i = 0; i < a2.length; i++) {
          if(a2[i].checked) {
               if(a2[i].value == '471.83 Hz') {
                    correctAnswers++;
                    break;
               }
          }
     }
	 var a3 = document.getElementsByName('q3');
     for(i = 0; i < a3.length; i++) {
          if(a3[i].checked) {
               if(a3[i].value == 16,6) {
                    correctAnswers++;
                    break;
               }
          }
     }
	 var a4 = document.getElementsByName('q4');
     var a4answers = new Array();
     var a4right = new Array('Sumber mendekati pendengar','Pendengar mendekati sumber');
     var a4bool = true;
 
     for(i = 0; i < a4.length; i++) {
          if(a4[i].checked) {
               a4answers.push(a4[i].value);
          }
     }
     a4answers.sort();
     a4right.sort();
     if(a4answers.length == a4right.length) {
          for(i = 0; i < a4answers.length; i++) {
               if(a4answers[i] != a4right[i]) {
                    a4bool = false;
                    break;
               }
          }
     }
     else {
          a4bool = false;
     }
     if(a4bool == true) {
          correctAnswers++;
     }
	 var a5 = document.getElementsByName('q5');
     for(i = 0; i < a5.length; i++) {
          if(a5[i].checked) {
               if(a5[i].value == '471.83 Hz') {
                    correctAnswers++;
                    break;
               }
          }
     }
	 
	  if(correctAnswers == totalQuestions) {
          alertText = "Selamat! Anda berhasil menjawab semua pertanyaan! ";
     }
     else {
          alertText = "Benar " + correctAnswers + " Dari " + totalQuestions + " Pertanyaan";
     }
     alert(alertText);
}