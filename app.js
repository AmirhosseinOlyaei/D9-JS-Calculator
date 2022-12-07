    function solve() {
        let y = eval(document.getElementById('c').value);
        document.getElementById('c').value=y;
    }

    function cls() {
        document.getElementById('c').value='';
    }
    
    function dis(val) {
        document.getElementById('c').value+=val;
        
    }