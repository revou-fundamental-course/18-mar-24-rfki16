function validateForm() {
    const name = document.forms["message-form"]["name-input"].value;
    const email = document.forms["message-form"]["email"].value;
    const job = document.forms["message-form"]["job"].value;

    if (name == "" || email == "" || job == "") {
        alert("Tidak boleh ada yang kosong!");
        return false;
    }

    setSenderUI(name, email, job);

    return false;
}

function setSenderUI(name, email, job) {
    document.getElementById("sender-name").innerHTML = name;
    document.getElementById("sender-email").innerHTML = email;
    document.getElementById("sender-job").innerHTML = job;

}