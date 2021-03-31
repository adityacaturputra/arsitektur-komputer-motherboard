(function(){
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
            // ...add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="div-shadow margin-padding-1 font-size">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join('')} </div>
            </div>
            `
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = '#096b00';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} jawaban benar dari ${myQuestions.length} soal`;
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "Menurut sejarah yang dicatat oleh dunia teknologi, motherboard pertama kali dibuat oleh siapa ?",
        answers: {
          a: "Douglas Crockford",
          b: "Sheryl Sandberg",
          c: "Steve Jobs dan Wozniak"
        },
        correctAnswer: "c"
      },
      {
        question: "Salah satu contoh populer tipe backplane ?",
        answers: {
          a: "S-190 bus, bagian dari mikro-komputer Mac 8800",
          b: "A-100 bus, bagian dari mikro-komputer Souvenir 8800",
          c: "S-100 bus, bagian dari mikro-komputer Altair 8800",
          d: "S-200 bus, bagian dari mikro-komputer Altair 8800"
        },
        correctAnswer: "c"
      },
      {
        question: "Motherboard pertama di dunia yang digunakan pada PC ?",
        answers: {
          a: "Mini Breadboard",
          b: "Micro Breadboard",
          c: "ATX Breadboard",
          d: "IBM Planar Breadboard"
        },
        correctAnswer: "d"
      },
      {
        question: "Sebagaimana konsep desain komputer yang dirakit seperti saat ini, IBM mencetuskan desain AT (Advanced Technology) pada motherboardnya yang dilahirkan pada tahun ?",
        answers: {
          a: "1983",
          b: "1984",
          c: "1985",
          d: "1986"
        },
        correctAnswer: "b"
      },
      {
        question: "Integrated Chip – IC, juga dikenal sebagai ?",
        answers: {
          a: "Super I/O chip",
          b: "Main I/O chip",
          c: "Dummy I/O chip",
          d: "Mega I/O chip"
        },
        correctAnswer: "a"
      },
      {
        question: "Di akhir 80-an dan awal 90-an menggabungkan banyak perangkat dalam satu motherboard menjadi semakin ekonomis. Akan tetapi, desain form factor AT memiliki beberapa kekurangan, yaitu ?",
        answers: {
          a: "Keefisienan sumber daya",
          b: "Ruang dan kemampuan menukar perangkat keras",
          c: "Kecepatan render",
          d: "Pengolahan aritmetika"
        },
        correctAnswer: "b"
      },
      {
        question: "Datanglah Intel di tahun 1995 dengan desain baru, yang menawarkan motherboard dengan dimensi dan layout yang baru. Desain ini juga menjawab berbagai permasalahan yang dimiliki form factor AT, konsep desain apa yang dibawa oleh intel ?",
        answers: {
          a: "Mini Breadboard",
          b: "Micro Breadboard",
          c: "ATX form factor",
          d: "IBM Planar Breadboard"
        },
        correctAnswer: "c"
      },
      {
        question: "Memasuki era millenium para produsen komputer ternama berlomba-lomba mendesain motherboard sekecil dan seekonomis mungkin, dengan performa yang tidak kalah dengan desain biasa. VIA, mengawali dengan membuat terobosan baru. Meski ditujukan untuk casing kecil, performa motherboard ini sebanding dengan tipe ATX dan Micro ATX. Apa desain dari terobosan baru yang dimaksud?",
        answers: {
          a: "Mini ITX",
          b: "Micro ATX",
          c: "Nano ITX",
          d: "Pico ITX"
        },
        correctAnswer: "c"
      },
      {
        question: "Di tahun 2007 ASUStek dinobatkan menjadi produsen terbesar motherboard sedunia. 2 Tahun kemdian, lagi-lagi VIA, berhasil merilis mobile-ITX, motherboard terkecil sedunia dengan ukuran ?",
        answers: {
          a: "60mm x 60mm",
          b: "70mm x 70mm",
          c: "80mm x 80mm",
          d: "50mm x 50mm"
        },
        correctAnswer: "a"
      }
    ];
  
    // Kick things off
    buildQuiz();
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
  })();