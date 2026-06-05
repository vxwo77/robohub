// ===== MAIN JS FILE =====

// 1- قائمة النافبار للجوال (الهمبرجر)
function initNav() {
  var hamburger = document.getElementById('hamburger');
  var navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.onclick = function () {
      if (navLinks.className === "nav-links") {
        navLinks.className += " open";
      } else {
        navLinks.className = "nav-links";
      }
    };
  }
}

// 2- التحقق من فورم التواصل
function initContactForm() {
  var form = document.getElementById('contactForm');
  if (!form) return;

  form.onsubmit = function (e) {
    e.preventDefault(); // إيقاف الإرسال التلقائي
    var valid = true;

    // إخفاء رسائل الخطأ السابقة
    document.getElementById('nameError').style.display = 'none';
    document.getElementById('emailError').style.display = 'none';
    document.getElementById('messageError').style.display = 'none';

    // التحقق من الاسم
    var name = document.getElementById('name').value;
    if (name.trim() === "") {
      document.getElementById('nameError').style.display = 'block';
      valid = false;
    }

    // التحقق من الإيميل بطريقة بدائية واضحة (وجود @ و نقطة)
    var email = document.getElementById('email').value;
    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
      document.getElementById('emailError').style.display = 'block';
      valid = false;
    }

    // التحقق من الرسالة
    var message = document.getElementById('message').value;
    if (message.trim().length < 10) {
      document.getElementById('messageError').style.display = 'block';
      valid = false;
    }

    // إذا نجح التحقق تظهر رسالة النجاح
    if (valid) {
      document.getElementById('successMsg').style.display = 'block';
      form.reset();
    }
  };
}

// 3- لخبطة أسماء الطلاب عشوائياً عند تحديث الصفحة
function shuffleTeam() {
  var list = document.getElementById('teamList');
  if (!list) return;
  var items = list.getElementsByTagName('li');
  // طريقة نقل عشوائي بسيطة يفهمها أي طالب مبتدئ
  for (var i = 0; i < items.length; i++) {
    var randomIndex = Math.floor(Math.random() * items.length);
    list.appendChild(items[randomIndex]);
  }
}

// تشغيل الدوال عند تحميل الصفحة
window.onload = function () {
  initNav();
  initContactForm();
  shuffleTeam(); 
};