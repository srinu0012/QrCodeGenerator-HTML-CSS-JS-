var   pre=""

function generateQRCode(){
    let qr_input=document.getElementById("qrInput")
    let qr_image=document.getElementById("image")
     if(pre == qr_input.value){
        qr_input.style.border="2px solid red"
    }else{
        qr_image.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qr_input.value}`
        pre=qr_input.value
         qr_input.style.border="2px solid green"
    }
}
