function encodeAndDecodeMessages() {
    const btns = document.getElementsByTagName('button');
    const txtAreas = document.getElementsByTagName('textarea');
    const encodeBtn = btns[0];
    const decodeBtn = btns[1];
    let txtAreaEncode = txtAreas[0];
    let txtAreaDecode = txtAreas[1];
    

    encodeBtn.addEventListener('click', () => {
        
        let text = txtAreaEncode.value;
        if (text.length > 0) {
            text = [...text].map(x => String.fromCharCode(x.charCodeAt() + 1)).join('');
           
            txtAreaEncode.value = '';
            txtAreaDecode.value = text;
        }
    })

    decodeBtn.addEventListener('click', () => {

        let text = txtAreaDecode.value;
        if (text.length > 0) {
            text = [...text].map(x => String.fromCharCode(x.charCodeAt() - 1)).join('');
            txtAreaDecode.value = text;
            
        }

    })
}