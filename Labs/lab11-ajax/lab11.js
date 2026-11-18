// Bayan Alharbi - 2305950
// Lab 11: ask students.php for the JSON with Ajax and print it in the Console.

const button = document.getElementById("load-btn");

button.addEventListener("click", function () {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "students.php");

    xhr.onload = function () {
        if (xhr.status === 200) {
            // turn the JSON text into a real JavaScript array
            const students = JSON.parse(xhr.responseText);
            console.log(students);

            // also print each student on its own line to make it easier to read
            students.forEach(function (student) {
                console.log(student.name + ": " + student.total);
            });
        } else {
            console.log("Request failed with status " + xhr.status);
        }
    };

    xhr.onerror = function () {
        console.log("Request failed, the server could not be reached.");
    };

    xhr.send();
});
