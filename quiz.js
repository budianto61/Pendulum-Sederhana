function gradeTest() {
     //variables with global implications
     var totalQuestions = 10;
     var correctAnswers = 0;
     var alertText;
     var i;
	 var a1 = document.getElementById('q1').value.toLowerCase();
     if(a1 == '25') {
          correctAnswers++;
     }
	 var a2 = document.getElementsByName('q2');
     for(i = 0; i < a2.length; i++) {
          if(a2[i].checked) {
               if(a2[i].value == '0,04 s') {
                    correctAnswers++;
                    break;
               }
          }
     }
	 
	 var a3 = document.getElementsByName('q3');
     for(i = 0; i < a3.length; i++) {
          if(a3[i].checked) {
               if(a3[i].value == '0.05 detik') {
                    correctAnswers++;
                    break;
               }
          }
     }
	 /*
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
     } */
	 var a5 = document.getElementsByName('q5');
     for(i = 0; i < a5.length; i++) {
          if(a5[i].checked) {
               if(a5[i].value == '4 meter') {
                    correctAnswers++;
                    break;
               }
          }
     }
	 
	 var a6 = document.getElementsByName('q6');
     for(i = 0; i < a6.length; i++) {
          if(a6[i].checked) {
               if(a6[i].value == '360 kali') {
                    correctAnswers++;
                    break;
               }
          }
     }
	 
	 var a7 = document.getElementsByName('q7');
     for(i = 0; i < a7.length; i++) {
          if(a7[i].checked) {
               if(a7[i].value == '330 m/s') {
                    correctAnswers++;
                    break;
               }
          }
     }
	 
	 var a8 = document.getElementsByName('q8');
     for(i = 0; i < a8.length; i++) {
          if(a8[i].checked) {
               if(a8[i].value == '250 cm') {
                    correctAnswers++;
                    break;
               }
          }
     }
	 
	 var a9 = document.getElementsByName('q9');
     for(i = 0; i < a9.length; i++) {
          if(a9[i].checked) {
               if(a9[i].value == '3 m') {
                    correctAnswers++;
                    break;
               }
          }
     }
	 
	 var a10 = document.getElementsByName('q10');
     for(i = 0; i < a10.length; i++) {
          if(a10[i].checked) {
               if(a10[i].value == 'amplitudo') {
                    correctAnswers++;
                    break;
               }
          }
     }
	 
	 var a11 = document.getElementsByName('q11');
     for(i = 0; i < a11.length; i++) {
          if(a11[i].checked) {
               if(a11[i].value == 'gelombang merambat dengan memindahkan mediumnya') {
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