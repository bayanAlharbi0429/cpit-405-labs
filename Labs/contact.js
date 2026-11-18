// Bayan Alharbi - 2305950
// Lab 11 homework: the contact form is sent with Ajax (POST) to the controller.
// Flow: submit event -> XMLHttpRequest -> controller saves with the model -> JSON answer ->
// I read the JSON here and show a green message (success) or a red message (failed).

const form = document.getElementById("contact-form");
const statusBox = document.getElementById("form-status");
const sendButton = form.querySelector("button[type='submit']");

function showStatus(text, ok) {
    statusBox.textContent = text;
    statusBox.className = "form-status " + (ok ? "ok" : "fail");
}

form.addEventListener("submit", function (event) {
    // stop the normal submit so the page does not reload
    event.preventDefault();

    const xhr = new XMLHttpRequest();
    xhr.open("POST", form.action);

    // disable the button while waiting so the same message is not sent twice
    sendButton.disabled = true;
    showStatus("Sending...", true);

    xhr.onload = function () {
        sendButton.disabled = false;
        let answer;
        try {
            // the controller always answers with JSON
            answer = JSON.parse(xhr.responseText);
        } catch (e) {
            showStatus("The request failed. Please try again.", false);
            return;
        }

        if (xhr.status === 200 && answer.success) {
            showStatus(answer.message, true);
            form.reset(); // clear the fields after success
        } else {
            showStatus(answer.message || "The request failed.", false);
        }
    };

    // this runs when the server cannot be reached at all
    xhr.onerror = function () {
        sendButton.disabled = false;
        showStatus("The request failed. Check your connection.", false);
    };

    // FormData takes all the fields from the form, so I don't read them one by one
    xhr.send(new FormData(form));
});
