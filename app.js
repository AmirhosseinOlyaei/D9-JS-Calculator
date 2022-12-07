    function solve() {
        let y = eval([2+2]*10);
        document.getElementById('c').value=y;
    }

    function cls() {
        document.getElementById('c').value='';
    }
    
    function dis(val) {
        document.getElementById('c').value+=val;
        
    }