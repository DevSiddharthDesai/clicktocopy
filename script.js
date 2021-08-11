const copyBtn = document.querySelector('.btn');
const inputText = document.querySelector('.coupon');
const alphaNumericChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";

copyBtn.addEventListener('click', () =>{
    test();
});

function test()
{
    inputText.select();
    document.execCommand('copy');

    if(copyBtn.innerHTML == "Copy")
    {
        copyBtn.innerHTML = "Copied";
    }

    setTimeout(function(){ 
        copyBtn.innerHTML = "Copy";
        let generatedString = "";
        let charactersLength = alphaNumericChar.length;
        for ( let i = 0; i <= 5; i++ ) {
            generatedString += alphaNumericChar.charAt(Math.floor(Math.random() * 
       charactersLength));
        }
        inputText.value = generatedString;
    }, 3000);
}