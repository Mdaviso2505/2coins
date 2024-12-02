
window.hhh = () => {
    document.getElementById('p2pkh').value = ""
    document.getElementById("converbutton").classList.add('button--loading');
    document.getElementById("converbutton").disabled = true;
    text = document.getElementById('fetcher').value;
    address = text.replaceAll(' ', '');



    if (address.length < 15) {
        document.getElementById('p2pkh').value = "Please Enter a Valid Bitcoin Address."
        document.getElementById("converbutton").disabled = false;
        document.getElementById("converbutton").classList.remove('button--loading');
    }
    else {
        url = "https://blockchain.info/q/pubkeyaddr/" + address;

        fetch(url).then((res) => {
            return res.text();
        }).then((html) => {
            document.getElementById('p2pkh').value = html
            document.getElementById("converbutton").disabled = false;
            document.getElementById("converbutton").classList.remove('button--loading');
        }).catch((err)=>{
            document.getElementById('p2pkh').value = "Error connecting to API, Try again later"
            document.getElementById("converbutton").disabled = false;
            document.getElementById("converbutton").classList.remove('button--loading');

        })
        .finally(() => {
            document.getElementById("converbutton").disabled = false;
            document.getElementById("converbutton").classList.remove('button--loading');
        })
    }
}


var input = document.getElementById("fetcher");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("converbutton").click();
    }
});
