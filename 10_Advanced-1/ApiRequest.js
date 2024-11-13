const xhr = new XMLHttpRequest();
const url = "https://www.fastapi.com/users";
xhr.open("GET", url);

xhr.onreadystatechange = () => {
    console.log(xhr.readyState);

    if(xhr.readyState == 4){
        let data = JSON.parse(this.responceText)
        console.log(data.followers);
    }
};

xhr.send()
