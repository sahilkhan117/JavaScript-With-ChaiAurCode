const xhr = new XMLHttpRequest();
const url = "https://www.fastapi.com/users";
xhr.open("GET", url);

xhr.onreadystatechange = () => {
    console.log(xhr.readyState);

};