function create() {
    let ref = firebase.database().ref();
    let student = {
        "id": document.getElementById("id").value,
        "name": document.getElementById("name").value,
        "branch": document.getElementById("branch").value
    }
    let obj = ref.push(student);
    alert(`Your firebase ID is :    ${obj.key}`);
}

function read() {
    let ref = firebase.database().ref();
    ref.on("value", (data) => {
        console.log(data.val());
    })
}

function update() {
    let firebasekey = prompt("Enter your Firebase ID to update");
    let ref = firebase.database().ref(firebasekey);
    let id = prompt("Enter your id");
    let name = prompt("Enter your name");
    let branch = prompt("Enter your branch");
    let student = {
        "id": id,
        "name": name,
        "branch": branch
    }
    let obj = ref.set(student);
    alert(`Your details with id ${firebasekey} has been updated sucessfully`);
}

function del() {
    let id = prompt("Enter your Firebase ID to delete");
    let ref = firebase.database().ref();
    ref.child(id).remove().then()
    alert(`User with id ${id} has been removed successfully from the database`);
}