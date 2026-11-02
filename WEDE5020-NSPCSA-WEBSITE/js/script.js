
document.addEventListener("DOMContentLoaded", function () {

```
// ==========================================
// 1. ENQUIRY FORM FUNCTIONALITY
// ==========================================

const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {

    enquiryForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const enquiryType = document.getElementById("enquiryType").value;
        const message = document.getElementById("message").value.trim();

        if (name.length < 3) {
            alert("Please enter a name containing at least 3 characters.");
            return;
        }

        if (message.length < 10) {
            alert("Your message must contain at least 10 characters.");
            return;
        }

        if (!email) {
            alert("Please enter your email address.");
            return;
        }

        let response = "";

        if (enquiryType === "volunteer") {

            response = "Thank you, " + name +
                "! We appreciate your interest in volunteering. Please contact the NSPCA for information about volunteer opportunities.";

        } else if (enquiryType === "sponsor") {

            response = "Thank you, " + name +
                "! We appreciate your interest in sponsoring the NSPCA. Our team can provide information about sponsorship opportunities.";

        } else {

            response = "Thank you, " + name +
                "! Your enquiry has been received on this webpage. We appreciate your interest in the NSPCA.";

        }

        const responseArea = document.getElementById("enquiryResponse");

        if (responseArea) {
            responseArea.textContent = response;
            responseArea.style.display = "block";
        }

        enquiryForm.reset();

    });

}


// ==========================================
// 2. CONTACT FORM FUNCTIONALITY
// ==========================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const phone = document.getElementById("contactPhone").value.trim();
        const type = document.getElementById("messageType").value;
        const message = document.getElementById("contactMessage").value.trim();

        if (name.length < 3) {
            alert("Please enter a valid name.");
            return;
        }

        if (message.length < 10) {
            alert("Please enter a message containing at least 10 characters.");
            return;
        }

        if (!/^[0-9]{10}$/.test(phone)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }

        const recipient = "info@nspca.co.za";

        const subject = encodeURIComponent(
            type + " - Website Contact"
        );

        const body = encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\nPhone: " + phone +
            "\nMessage Type: " + type +
            "\nMessage: " + message
        );

        const responseArea = document.getElementById("contactResponse");

        if (responseArea) {
            responseArea.textContent =
                "Your email has been prepared. Your email application will now open.";
        }

        window.location.href =
            "mailto:" + recipient +
            "?subject=" + subject +
            "&body=" + body;

    });

}


// ==========================================
// 3. DYNAMIC NSPCA SERVICES SEARCH
// ==========================================

const serviceSearch = document.getElementById("serviceSearch");

const serviceList = document.getElementById("serviceList");

const noResults = document.getElementById("noResults");

if (serviceSearch && serviceList) {

    const services = serviceList.querySelectorAll("li");

    serviceSearch.addEventListener("input", function () {

        const searchValue = serviceSearch.value.toLowerCase().trim();

        let visibleServices = 0;

        services.forEach(function (service) {

            const serviceName = service.textContent.toLowerCase();

            if (serviceName.includes(searchValue)) {

                service.style.display = "list-item";

                visibleServices++;

            } else {

                service.style.display = "none";

            }

        });

        if (noResults) {

            if (visibleServices === 0) {

                noResults.style.display = "block";

            } else {

                noResults.style.display = "none";

            }

        }

    });

}
```

});
