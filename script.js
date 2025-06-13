// 20 sample questions for each company (replace with real previous year questions as needed)
const allQuestions = {
  Time_and_work: [
  { question: "Q1: If A can do a job in 10 days and B can do it in 15 days, how long will they take if they work together?", options: ["5 days", "6 days", "8 days", "9 days"], answer: 1 },
  { question: "Q2: A car travels 60 km in 1.5 hours. What is its speed?", options: ["30 km/h", "40 km/h", "45 km/h", "50 km/h"], answer: 2 },
  { question: "Q3: If 4 men can do a work in 20 days, how many days will 8 men take?", options: ["10", "20", "40", "5"], answer: 0 },
  { question: "Q4: A train 120 meters long takes 6 seconds to pass a pole. What is its speed?", options: ["60 km/h", "72 km/h", "80 km/h", "90 km/h"], answer: 1 },
  { question: "Q5: If A alone can complete a work in 12 days and B in 8 days, what is the time taken if they work together?", options: ["4.8 days", "5 days", "5.2 days", "6 days"], answer: 0 },
  { question: "Q6: Distance = 240 km, Speed = 60 km/h. Time taken?", options: ["3 hrs", "4 hrs", "5 hrs", "6 hrs"], answer: 1 },
  { question: "Q7: If a person walks at 5 km/h instead of 4 km/h, he reaches his destination 15 minutes earlier. What is the distance?", options: ["4 km", "5 km", "6 km", "7.5 km"], answer: 2 },
  { question: "Q8: Two pipes can fill a tank in 20 and 30 minutes. How long will they take to fill the tank together?", options: ["10", "12", "15", "18"], answer: 1 },
  { question: "Q9: A train passes a platform in 30 seconds and a pole in 15 seconds. If the train is 150 m long, what is the length of the platform?", options: ["150 m", "200 m", "250 m", "300 m"], answer: 1 },
  { question: "Q10: If a car travels at 60 km/h for 2 hours and 40 km/h for 1 hour, what's the average speed?", options: ["52 km/h", "53.3 km/h", "50 km/h", "55 km/h"], answer: 2 },
  { question: "Q11: A does half as much work as B in the same time. If B can complete the work in 12 days, how long will A take?", options: ["12", "18", "24", "30"], answer: 2 },
  { question: "Q12: If speed increases, time taken to cover the same distance will:", options: ["Increase", "Remain same", "Decrease", "Double"], answer: 2 },
  { question: "Q13: A cyclist covers 40 km in 2 hours. What is the speed in m/s?", options: ["5.55", "4.44", "6.66", "7.77"], answer: 0 },
  { question: "Q14: If 6 people complete a task in 12 days, how many people are needed to finish it in 4 days?", options: ["18", "16", "20", "12"], answer: 0 },
  { question: "Q15: A train 300 m long is running at 90 km/h. How long to pass a person on the platform?", options: ["10 sec", "12 sec", "15 sec", "18 sec"], answer: 1 },
  { question: "Q16: A can do a piece of work in 10 days. B is 50% more efficient. Together, how many days to complete the work?", options: ["4", "5", "6", "7"], answer: 1 },
  { question: "Q17: What is the formula for speed?", options: ["Distance × Time", "Distance / Time", "Time / Distance", "Speed / Distance"], answer: 1 },
  { question: "Q18: A car covers a distance of 300 km in 5 hours. What is the speed?", options: ["50 km/h", "55 km/h", "60 km/h", "65 km/h"], answer: 2 },
  { question: "Q19: If A takes 6 days and B takes 12 days to complete a job, in how many days will they finish it together?", options: ["3", "4", "5", "6"], answer: 1 },
  { question: "Q20: If a pipe fills a tank in 5 hours and another empties it in 10 hours, how long will it take to fill the tank?", options: ["7 hrs", "8 hrs", "10 hrs", "6 hrs"], answer: 3 }
    // ...add 18 more Zoho questions
  ],
  Networking: [
    { question: "Q1: What flavor of Network Address Translation can be used to have one IP address allow many users to connect to the global Internet?", options: ["NAT", "Static", "Dynamic", "PAT"], answer: 3 },
    { question: "Q2: What protocol does PPP use to identify the Network layer protocol?", options: ["NCP", "ISDN", "HDLC", "LCP"], answer: 0 },
    { question: "Q3: You want to implement a mechanism that automates the IP configuration, including IP address, subnet mask, default gateway, and DNS information. Which protocol will you use to accomplish this?", options: ["SMTP", "SNMP", "DHCP", "ARP"], answer: 2 },
    { question: "Q4: In which of the following technologies is the term HFC used?", options: ["DSL", "PPPoE", "Frame Relay", "Dedicated T1"], answer: 0 },
    { question: "Q5: Using the illustration from the previous question, what would be the IP address of S0 if you were using the first subnet? The network ID is 192.168.10.0/28 and you need to use the last available IP address in the range. Again, the zero subnet should not be considered valid for this question.", options: ["192.168.10.24", "192.168.10.62", "192.168.10.30", "192.168.10.127"], answer: 2 },
    { question: "Q6: Which layer of the OSI model is responsible for routing?",options: ["Physical", "Network", "Transport", "Session"],answer: 1},
    { question: "Q7: What does DHCP stand for?",options: ["Dynamic Host Configuration Protocol","Data Handling Control Protocol","Direct Host Communication Protocol","Dynamic Hypertext Control Protocol"],answer: 0},
    { question: "Q8: Which protocol is used to securely transfer files over the Internet?",options: ["FTP", "SFTP", "SMTP", "SNMP"],answer: 1},
    { question: "Q9: What is the default port number for HTTP?",options: ["21", "25", "80", "443"],answer: 2},
    { question: "Q10: Which device connects different networks together?",options: ["Switch", "Router", "Hub", "Repeater"],answer: 1},
    { question: "Q11: What is the primary function of a firewall?", options: ["To connect devices", "To filter network traffic", "To store data", "To provide wireless access"], answer: 1 },
    { question: "Q12: Which protocol is used for sending emails?", options: ["HTTP", "FTP", "SMTP", "SNMP"], answer: 2 },
    { question: "Q13: What does DNS stand for?", options: ["Domain Name System", "Data Network Service", "Dynamic Network System", "Direct Name Service"], answer: 0 },
    { question: "Q14: Which layer of the OSI model is responsible for end-to-end communication?", options: ["Physical", "Data Link", "Network", "Transport"], answer: 3 },
    { question: "Q15: What is the purpose of a subnet mask?", options: ["To identify the network portion of an IP address", "To encrypt data", "To route packets", "To assign IP addresses"], answer: 0 },
    { question: "Q16: Which protocol is used to resolve IP addresses to MAC addresses?", options: ["ARP", "RARP", "ICMP", "IGMP"], answer: 0 },
    { question: "Q17: What is the maximum length of a CAT5 Ethernet cable?", options: ["50 meters", "100 meters", "200 meters", "500 meters"], answer: 1 },
    { question: "Q18: Which device operates at the Data Link layer of the OSI model?", options: ["Router", "Switch", "Hub", "Modem"], answer: 1 },
    { question: "Q19: What is the primary purpose of NAT (Network Address Translation)?", options: ["To provide security", "To conserve IP addresses", "To increase bandwidth", "To connect to the Internet"], answer: 1 },
    { question: "Q20: Which protocol is used for remote login to a server?", options: ["FTP", "SSH", "HTTP", "Telnet"], answer: 1 }
    // ...add 18 more TCS questions
  ],
  Percentage: [
  { question: "Q1: What is 25% of 200?", options: ["25", "50", "75", "100"], answer: 1 },
  { question: "Q2: If 30 is 20% of a number, what is the number?", options: ["120", "130", "140", "150"], answer: 3 },
  { question: "Q3: Increase 400 by 25%", options: ["425", "450", "475", "500"], answer: 1 },
  { question: "Q4: Decrease 500 by 20%", options: ["400", "420", "440", "450"], answer: 0 },
  { question: "Q5: What percent of 80 is 20?", options: ["20%", "25%", "30%", "40%"], answer: 1 },
  { question: "Q6: A number is increased by 10% and then decreased by 10%. What is the net change?", options: ["0%", "1%", "1% decrease", "1% increase"], answer: 2 },
  { question: "Q7: 10% of 250 is:", options: ["15", "20", "25", "30"], answer: 2 },
  { question: "Q8: What is the percentage change from 200 to 250?", options: ["20%", "25%", "30%", "35%"], answer: 1 },
  { question: "Q9: A student scored 45 out of 60. What is the percentage?", options: ["70%", "75%", "80%", "85%"], answer: 2 },
  { question: "Q10: 12 is what percent of 60?", options: ["15%", "20%", "25%", "30%"], answer: 1 },
  { question: "Q11: What number increased by 20% becomes 72?", options: ["55", "58", "60", "62"], answer: 2 },
  { question: "Q12: What is 150% of 80?", options: ["100", "110", "120", "140"], answer: 3 },
  { question: "Q13: If 60% of a number is 90, what is the number?", options: ["120", "140", "150", "160"], answer: 2 },
  { question: "Q14: Find the number which when increased by 30% becomes 78.", options: ["60", "65", "66", "70"], answer: 0 },
  { question: "Q15: A number is 20% more than another. What is the ratio of the two numbers?", options: ["6:5", "5:4", "4:3", "3:2"], answer: 0 },
  { question: "Q16: What is the smallest 3-digit number?", options: ["100", "101", "110", "111"], answer: 0 },
  { question: "Q17: Which of these is a prime number?", options: ["91", "93", "97", "99"], answer: 2 },
  { question: "Q18: What is the sum of first 10 natural numbers?", options: ["45", "50", "55", "60"], answer: 2 },
  { question: "Q19: Find the least common multiple (LCM) of 6 and 8.", options: ["12", "16", "18", "24"], answer: 3 },
  { question: "Q20: What is the greatest 2-digit number divisible by 7?", options: ["91", "98", "99", "89"], answer: 1 }
    // ...add 18 more Amazon questions
  ],
  Logical_Reasoning: [
  { question: "Q1: Which number should come next in the series? 3, 6, 11, 18, 27, ?", options: ["36", "38", "39", "40"], answer: 2 },
  { question: "Q2: If 'MANGO' is coded as 'NZOHQ', how is 'APPLE' coded?", options: ["BQQMF", "BQQNG", "BQQME", "BQQNE"], answer: 0 },
  { question: "Q3: Which of the following is the odd one out?", options: ["Circle", "Square", "Rectangle", "Triangle"], answer: 0 },
  { question: "Q4: Find the missing number: 2, 4, 8, 16, ?, 64", options: ["24", "30", "32", "36"], answer: 2 },
  { question: "Q5: ‘Cup’ is to ‘Lip’ as ‘Bird’ is to ?", options: ["Grass", "Beak", "Sky", "Forest"], answer: 2 },
  { question: "Q6: Which word doesn't belong in the group?", options: ["Rose", "Lily", "Sunflower", "Apple"], answer: 3 },
  { question: "Q7: In a certain code, TREE is written as UQFF. How is LEAF written in that code?", options: ["MFBE", "KFZG", "MFBG", "MFAG"], answer: 2 },
  { question: "Q8: If ALL = 36, BAT = 39, what is CAT?", options: ["42", "48", "45", "44"], answer: 2 },
  { question: "Q9: Which number replaces the question mark? 5, 11, 23, 47, ?", options: ["95", "96", "97", "99"], answer: 2 },
  { question: "Q10: Which direction is opposite to Northwest?", options: ["Northeast", "Southwest", "Southeast", "North"], answer: 2 },
  { question: "Q11: What comes next in the pattern? △, ◯, □, △, ◯, ?", options: ["△", "□", "◯", "◇"], answer: 1 },
  { question: "Q12: Mirror image of ‘3LJ’ is?", options: ["EIL", "JLI", "JL3", "LJƐ"], answer: 3 },
  { question: "Q13: Find the odd one out: 2, 3, 5, 7, 11, 14, 17", options: ["3", "5", "11", "14"], answer: 3 },
  { question: "Q14: Arrange in order: P, R, Q, S, T", options: ["P, Q, R, S, T", "P, R, Q, S, T", "P, Q, S, R, T", "P, S, Q, R, T"], answer: 0 },
  { question: "Q15: What is the next letter? Z, X, V, T, ?", options: ["R", "Q", "S", "P"], answer: 0 },
  { question: "Q16: Pointing to a boy, Mira said, 'He is the son of my mother’s only daughter.' Who is the boy to Mira?", options: ["Brother", "Nephew", "Son", "Cousin"], answer: 2 },
  { question: "Q17: Statements: All apples are fruits. All fruits are tasty. Conclusion: All apples are tasty. Is the conclusion valid?", options: ["Yes", "No", "Cannot be determined", "Only some"], answer: 0 },
  { question: "Q18: A man walks 3 km north, then 4 km east. How far is he from the start?", options: ["5 km", "6 km", "7 km", "4 km"], answer: 0 },
  { question: "Q19: If MONDAY is coded as 123456, then SUNDAY is coded as?", options: ["612456", "345612", "563412", "634125"], answer: 0 },
  { question: "Q20: Complete the analogy: Book is to Reading as Fork is to ?", options: ["Drawing", "Writing", "Stirring", "Eating"], answer: 3 }
    // ...add 18 more Microsoft questions
  ],
  Number_Series: [
  { question: "Q1: What is the next number in the series? 2, 6, 12, 20, 30, ?", options: ["36", "42", "40", "44"], answer: 2 },
  { question: "Q2: A train 120 meters long is running at 60 km/h. How much time will it take to pass a platform 180 meters long?", options: ["18 sec", "20 sec", "22 sec", "24 sec"], answer: 3 },
  { question: "Q3: If the selling price of 15 articles is equal to the cost price of 20 articles, what is the gain percentage?", options: ["33.33%", "25%", "50%", "20%"], answer: 0 },
  { question: "Q4: Choose the odd one out: 121, 144, 169, 196, 225, 256, 300", options: ["121", "144", "225", "300"], answer: 3 },
  { question: "Q5: If A can do a job in 5 days and B in 10 days, how many days will they take together?", options: ["3.33", "2.5", "4", "5"], answer: 0 },
  { question: "Q6: Find the missing number: 5, 10, 20, 40, ?, 160", options: ["60", "80", "70", "90"], answer: 1 },
  { question: "Q7: If x² – 5x + 6 = 0, then x = ?", options: ["2 and 3", "3 and 4", "1 and 6", "2 and 4"], answer: 0 },
  { question: "Q8: A man can cover a distance in 3 hours. If he drives 10 km/h faster, he covers it in 2 hours. Find the distance.", options: ["30 km", "60 km", "40 km", "50 km"], answer: 1 },
  { question: "Q9: Which word is most similar to 'RESILIENT'?", options: ["Rigid", "Flexible", "Tough", "Weak"], answer: 1 },
  { question: "Q10: Statement: All engineers are smart. Ravi is an engineer. Conclusion: Ravi is smart. Is the conclusion valid?", options: ["Yes", "No", "Cannot be determined", "Only sometimes"], answer: 0 },
  { question: "Q11: What will be the angle between the hour and minute hand at 3:15?", options: ["0°", "7.5°", "22.5°", "30°"], answer: 2 },
  { question: "Q12: If the average of five numbers is 48, what is their total sum?", options: ["240", "245", "238", "250"], answer: 0 },
  { question: "Q13: Choose the correct spelling.", options: ["Definately", "Definitely", "Definitley", "Definetely"], answer: 1 },
  { question: "Q14: Choose the odd one: January, February, July, December", options: ["February", "July", "December", "January"], answer: 1 },
  { question: "Q15: What is the simple interest on ₹1000 at 5% per annum in 2 years?", options: ["₹50", "₹100", "₹150", "₹200"], answer: 1 },
  { question: "Q16: A number is divisible by both 3 and 5. Which of the following can it be?", options: ["10", "15", "18", "20"], answer: 1 },
  { question: "Q17: Which number replaces the question mark: 4, 9, 16, 25, ?", options: ["30", "34", "36", "32"], answer: 2 },
  { question: "Q18: If 5A = 3B and 2B = C, what is A:C?", options: ["1:1", "2:3", "3:2", "5:6"], answer: 1 },
  { question: "Q19: A clock is set right at 6 a.m. The clock gains 10 minutes every hour. What will be the time when the clock shows 9 p.m.?", options: ["8:30 p.m.", "9:30 p.m.", "10:00 p.m.", "11:00 p.m."], answer: 0 },
  { question: "Q20: Rearrange the words: 'New / is / the / Book / amazing'", options: ["The book is new amazing", "New book the is amazing", "The new book is amazing", "Amazing is the new book"], answer: 2 }
    // ...add 18 more Apple questions
  ]
};

// Fill each topic with 20 questions for demo (repeat if needed)
for (const key in allQuestions) {
  while (allQuestions[key].length < 20) {
    const q = allQuestions[key][allQuestions[key].length % 2];
    allQuestions[key].push({ ...q, question: q.question.replace(/Q\d+/, `Q${allQuestions[key].length + 1}`) });
  }
}

let questions = [];
let currentQuestion = 0;
let userAnswers = [];
let startTime, timerInterval;
let currentTopic = "";

function showSection(sectionId) {
  document.getElementById('home-section').style.display = 'none';
  document.getElementById('quiz-section').style.display = 'none';
  document.getElementById('about-section').style.display = 'none';
  document.getElementById('contact-section').style.display = 'none';
  document.getElementById(sectionId).style.display = 'block';
}

// Navigation
document.getElementById('home-link').onclick = function() {
  showSection('home-section');
  window.scrollTo(0, 0);
};
document.getElementById('about-link').onclick = function() {
  showSection('about-section');
  window.scrollTo(0, 0);
};
document.getElementById('contact-link').onclick = function() {
  showSection('contact-section');
  window.scrollTo(0, 0);
};

// Start quiz when topic card is clicked
document.querySelectorAll('.topic-card .start-btn').forEach(btn => {
  btn.onclick = function() {
    const topic = this.closest('.topic-card').getAttribute('data-topic');
    startQuiz(topic);
  };
});

function startQuiz(topic) {
  currentTopic = topic;
  questions = allQuestions[topic];
  currentQuestion = 0;
  userAnswers = [];
  showSection('quiz-section');
  document.getElementById('quiz-title').textContent = topic.charAt(0).toUpperCase() + topic.slice(1) + " Quiz";
  showQuestion(currentQuestion);
  startTimer();
}

function startTimer() {
  startTime = Date.now();
  timerInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById('time').textContent = formatTime(elapsed);
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function formatTime(seconds) {
  const min = String(Math.floor(seconds / 60)).padStart(2, '0');
  const sec = String(seconds % 60).padStart(2, '0');
  return `${min}:${sec}`;
}

function showQuestion(index) {
  const q = questions[index];
  document.getElementById('question').textContent = q.question;
  document.getElementById('qn').textContent = `Q${index + 1} of ${questions.length}`;
  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.className = 'option-btn';
    btn.onclick = () => selectOption(i, btn);
    optionsDiv.appendChild(btn);
  });
  document.getElementById('result').textContent = '';
}

function selectOption(selectedIdx, btn) {
  if (userAnswers[currentQuestion] !== undefined) return;
  const q = questions[currentQuestion];
  const optionsBtns = document.querySelectorAll('.option-btn');
  const correctIdx = q.answer;
  userAnswers[currentQuestion] = selectedIdx;
  optionsBtns.forEach((b, i) => {
    b.disabled = true;
    if (i === correctIdx) b.classList.add('correct');
    if (i === selectedIdx && selectedIdx !== correctIdx) b.classList.add('incorrect');
  });
  document.getElementById('result').textContent =
    selectedIdx === correctIdx ? "Correct!" : `Wrong!`;
  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion(currentQuestion);
    } else {
      stopTimer();
      showSummary();
    }
  }, 1200);
}

function showSummary() {
  const container = document.getElementById('quiz-container');
  const totalTime = Math.floor((Date.now() - startTime) / 1000);
  let score = 0;
  questions.forEach((q, i) => {
    if (userAnswers[i] === q.answer) score++;
  });
  let html = `<h2>Quiz Summary</h2>`;
  html += `<p>Time Taken: <strong>⏳ ${formatTime(totalTime)}</strong></p>`;
  html += `<p style="font-size:1.2em;"><strong>🎉 Score: ${score} / ${questions.length}</strong></p>`;
  html += `<table border="1" cellpadding="5" style="background-color: white"><tr><th>Q#</th><th>Question</th><th>Your Answer</th><th>Correct Answer</th></tr>`;
  questions.forEach((q, i) => {
    const userIdx = userAnswers[i];
    const correctIdx = q.answer;
    html += `<tr style="background-color: white">
      <td>${i + 1}</td>
      <td style="text-align:left;">${q.question}</td>
      <td style="color:${userIdx === correctIdx ? 'green' : 'red'}">
        ${typeof userIdx === "number" ? q.options[userIdx] : 'No Answer'}
      </td>
      <td style="color:green">${q.options[correctIdx]}</td>
    </tr>`;
  });
  html += `</table><br><button class="start-btn" onclick="location.reload()">Back to Home</button>`;
  container.innerHTML = html;
}

//capcha code
  function generateCaptcha(length = 6) {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < length; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return captcha;
  }

  function setCaptcha() {
    document.getElementById('captchaBox').textContent = generateCaptcha();
  }

  // Generate captcha on page load
  window.onload = setCaptcha;

   let clickbtn= document.getElementById("submit-btn");
   clickbtn.onclick = () => {
    alert("Your Feedback is submitted...! Thanks you...!")
   }
  
//end
document.getElementById("checkbox").addEventListener("change", function () {
      document.body.classList.toggle("dark");
});