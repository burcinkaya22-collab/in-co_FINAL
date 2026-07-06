
document.addEventListener("DOMContentLoaded", function() {
    
   
    const contactForm = document.getElementById("coffee-contact-form");
    const errorBox = document.getElementById("error-message");

  
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            
            
            event.preventDefault();

           
            const username = document.getElementById("username").value.trim();
            const useremail = document.getElementById("useremail").value.trim();
            const userphone = document.getElementById("userphone").value.trim();
            const subject = document.getElementById("subject").value;
            const message = document.getElementById("message").value.trim();

            
            let errorMessages = [];

           
            
           
            if (username === "") {
                errorMessages.push("Lütfen adınızı ve soyadınızı giriniz.");
            } else if (username.length < 3) {
                errorMessages.push("Adınız en az 3 karakter olmalıdır.");
            }

          
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (useremail === "") {
                errorMessages.push("Lütfen e-posta adresinizi giriniz.");
            } else if (!emailRegex.test(useremail)) {
                errorMessages.push("Geçersiz bir e-posta formatı girdiniz.");
            }

           
            if (userphone === "") {
                errorMessages.push("Lütfen telefon numaranızı giriniz.");
            }

            
            if (subject === "") {
                errorMessages.push("Lütfen iletişim amacınızı seçiniz.");
            }

            
            if (message === "") {
                errorMessages.push("Lütfen mesaj alanını boş bırakmayınız.");
            } else if (message.length < 10) {
                errorMessages.push("Mesajınız kendinizi ifade edebilmeniz için en az 10 karakter olmalıdır.");
            }

            
            if (errorMessages.length > 0) {
                
                errorBox.style.display = "block";
                errorBox.style.backgroundColor = "#ffdddd"; 
                errorBox.style.color = "#8b0000";           
                errorBox.style.border = "1px solid #8b0000";
                
                
                errorBox.innerHTML = errorMessages.join("<br>");
            } else {
                
                errorBox.style.display = "block";
                errorBox.style.backgroundColor = "#ddffdd"; 
                errorBox.style.color = "#006400";          
                errorBox.style.border = "1px solid #006400";
                
                errorBox.innerHTML = "✨ Harika! Mesajınız başarıyla alındı. Sizinle en kısa sürede iletişime geçeceğiz.";
                
                
                contactForm.reset();
            }
        });
    }

   
    const accordions = document.querySelectorAll(".accordion");
    
    accordions.forEach(acc => {
        acc.addEventListener("click", function() {
           
            this.classList.toggle("active");
            
         
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                this.querySelector("span").textContent = "+";
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                this.querySelector("span").textContent = "-";
            }
        });
    });
   
  
    //local storage kullanımı yaptım ki html elementleri arasında dolanırken sayfamda seçtiğim mod dursun
    const themeToggleBtn = document.getElementById("theme-toggle-btn");
    
    
    const currentTheme = localStorage.getItem("theme");
    
    
    if (currentTheme === "light") {
        document.body.classList.add("light-mode");
        if (themeToggleBtn) {
            themeToggleBtn.textContent = "🌙 "; 
        }
    } else {
       
        if (themeToggleBtn) {
            themeToggleBtn.textContent = "☀️"; 
        }
    }
    
    
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", function() {
            
            document.body.classList.toggle("light-mode");
            
           
            if (document.body.classList.contains("light-mode")) {
                themeToggleBtn.textContent = "🌙 ";
                localStorage.setItem("theme", "light"); 
            } else {
                themeToggleBtn.textContent = "☀️";
                localStorage.setItem("theme", "dark");  
            }
        });
    }

});