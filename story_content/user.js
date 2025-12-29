window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  (function () {
  // --- Pull variables from Storyline ---
  var player = GetPlayer();
  var name = player.GetVar("FullName") || "Learner";
  var course = player.GetVar("CourseName") || "Course Title";
  var date = player.GetVar("CurrentDate1") || new Date().toLocaleDateString();

  // --- Direct raw image URLs ---
  var LOGO_URL =
    "https://raw.githubusercontent.com/JMPruneauEcora/CertificateInfo/main/Certificate%20Combine%20Logo.png";
  var BG_URL =
    "https://raw.githubusercontent.com/JMPruneauEcora/CertificateInfo/main/Certificate_Background_PRI_Ecora.png";

  // --- Course Topics ---
  var topics = [
    "Wildlife Awareness",
    "Working Around Wildlife",
    "Bear Awareness",
    "Bear Spray",
    "Other Wildlife Animals and Dangers"
  ];

  var topicsList = topics.map(function (item) {
    return "<li>" + item + "</li>";
  }).join("");

  var html = `
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Certificate of Completion</title>

<style>
  @page { size: letter landscape; margin: 0; }

  html, body {
    margin: 0;
    padding: 0;
    background: #fff;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    font-family: Arial, Helvetica, sans-serif;
    color: #111;
  }

  /* Page */
  .cert-page {
    width: 11in;
    height: 8.5in;
    position: relative;
    background: url('${BG_URL}') center center / 100% 100% no-repeat;
    box-sizing: border-box;
    padding: 0.6in;
  }

  /* Center the entire content block */
  .content-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;   /* vertical centering */
    align-items: center;       /* horizontal centering */
    text-align: center;
  }

  @media screen {
    body { display: flex; justify-content: center; padding: 16px; }
    .cert-page { box-shadow: 0 10px 30px rgba(0,0,0,0.15); }
  }

  /* Header */
  .logo { height: 0.9in; margin-bottom: 0.2in; }

  h1 {
    font-size: 40px;
    margin: 6px 0 4px;
    letter-spacing: 0.4px;
  }

  h2 {
    font-size: 18px;
    margin: 0;
  }

  .name {
    font-size: 28px;
    font-weight: 700;
    margin: 12px 0;
    border-bottom: 2px solid #000;
    padding: 4px 16px;
    display: inline-block;
  }

  .course {
    font-size: 30px;
    font-weight: 600;
    margin: 10px 0 4px;
  }

  .date {
    font-size: 14px;
    color: #333;
    margin-bottom: 12px;
  }

  /* Topics card */
  .topics-card {
    margin-top: 18px;
    background: rgba(255,255,255,0.92);
    border: 2px solid #000;
    border-radius: 12px;
    width: 85%;
    max-width: 9in;
    padding: 18px 26px;
    box-sizing: border-box;
  }

  .topics-title {
    font-size: 16px;
    font-weight: 700;
    padding: 4px 10px;
    border: 2px solid #000;
    background: #0A4C8B;
    color: #fff;
    display: inline-block;
    margin-bottom: 14px;
  }

  .topics-content {
    text-align: left; /* keep list readable */
  }

  .topics-list {
    margin: 0;
    padding-left: 22px;
    list-style-type: disc;
    column-count: 2;
    column-gap: 40px;
    font-size: 14px;
  }

  .topics-list li {
    margin: 6px 0;
    break-inside: avoid;
    line-height: 1.3;
  }

  /* Print button */
  .print-btn {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: #0A4C8B;
    color: #fff;
    border: 2px solid #000;
    padding: 8px 14px;
    border-radius: 6px;
    font-weight: 700;
    cursor: pointer;
  }

  @media print {
    .print-btn { display: none !important; }
  }
</style>
</head>

<body>
  <div class="cert-page">
    <div class="content-wrapper">
      <img class="logo" src="${LOGO_URL}" alt="PRI / Ecora Logo">

      <h1>Certificate of Completion</h1>
      <h2>This certifies that</h2>

      <div class="name">${name}</div>

      <div>has successfully completed</div>
      <div class="course">${course}</div>
      <div class="date">Awarded on ${date}</div>

      <div class="topics-card">
        <div class="topics-title">Course Topics</div>
        <div class="topics-content">
          <ul class="topics-list">
            ${topicsList}
          </ul>
        </div>
      </div>
    </div>
  </div>

  <button class="print-btn" onclick="window.print()">Print / Save as PDF</button>

  <script>
    setTimeout(function(){ window.print(); }, 400);
  </script>
</body>
</html>`;

  var w = window.open("", "_blank");
  w.document.open();
  w.document.write(html);
  w.document.close();
})();

}

};
