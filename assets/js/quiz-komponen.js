(function () {
  function buildQuiz() {
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for (letter in currentQuestion.answers) {

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
          `<div class="" id="each-quiz">
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

  function showResults() {

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = '#096b00';
      }
      // if answer is wrong or blank
      else {
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
      question: "Tempat peletakan prosesor pada motherboard. Dudukan ini berbentuk segi empat dengan lubang-lubang kecil tempat tertancapnya kaki-kaki (pin-pin) prosesor yang tersusun membentuk matriks 2 dimensi. Apa nama komponen yang dimaksud ?",
      answers: {
        a: "Konektor Power",
        b: "Northbridge",
        c: "Slot Processor",
        d: "Port SATA"
      },
      correctAnswer: "c"
    },
    {
      question: "Pin yang menyambungkan motherboard dengan power supply di casing sebuah komputer. Agar si motherboard menerima daya dari power supply. Apa nama komponen yang dimaksud ?",
      answers: {
        a: "Konektor Power",
        b: "Northbridge",
        c: "Slot Processor",
        d: "Port SATA"
      },
      correctAnswer: "a"
    },
    {
      question: "Disebut apakah komponen yang menghubungkan processor (CPU) ke sistem memori dan graphics controller (AGP dan PCI Express) melalui bus berkecepatan tinggi, dan ke southbridge ?",
      answers: {
        a: "Konektor Power",
        b: "Northbridge",
        c: "Slot Processor",
        d: "Port SATA"
      },
      correctAnswer: "b"
    },
    {
      question: "Komponen apakah yang berfungsi untuk memasang memory card (RAM) ?",
      answers: {
        a: "Konektor Power",
        b: "Northbridge",
        c: "Slot Processor",
        d: "Slot Memory RAM"
      },
      correctAnswer: "d"
    },
    {
      question: "Komponen apakah yang berfungsi untuk menghubungkan Media penyimpanan seperti hardisk atau SSD ke Motherboard ?",
      answers: {
        a: "Port SATA",
        b: "PCI Express (PCI–E/PCIex)",
        c: "Southbridge",
        d: "Port VGA"
      },
      correctAnswer: "a"
    },
    {
      question: "Komponen apakah yang dijadikan slot ekspansi dan didesain untuk menggantikan PCI bus yang lama ?",
      answers: {
        a: "Port SATA",
        b: "PCI Express (PCI–E/PCIex)",
        c: "Southbridge",
        d: "Port VGA"
      },
      correctAnswer: "b"
    },
    {
      question: "Komponen apakah yang merupakan chip dalam arsitektur chipset logika inti pada bagian utara motherboard PC dan kegunaannya adalah mengatur kerja perangkat semacam IDE Controller, PCI Bus, ROM Bios, Keyboard & Mouse, USB, Eth. LAN, Modem dan fungsi I/O lainnya. Disebut apakah komponen yang dimaksud ?",
      answers: {
        a: "Port SATA",
        b: "PCI Express (PCI–E/PCIex)",
        c: "Southbridge",
        d: "Port VGA"
      },
      correctAnswer: "c"
    },
    {
      question: "Komponen apakah yang dijadikan sebuah antarmuka analog pada kartu grafis yang umumnya digunakan untuk menghubungkan antara komputer dengan monitor ?",
      answers: {
        a: "Port SATA",
        b: "PCI Express (PCI–E/PCIex)",
        c: "Southbridge",
        d: "Port VGA"
      },
      correctAnswer: "d"
    },
    {
      question: "Komponen apakah yang berfungsi untuk memberikan daya ke kipas processor agar dia dapat menyala sehingga bisa mendinginkan processor. ?",
      answers: {
        a: "Port SATA",
        b: "PCI Express (PCI–E/PCIex)",
        c: "Southbridge",
        d: "Pin CPU Fan"
      },
      correctAnswer: "d"
    }
  ];

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();