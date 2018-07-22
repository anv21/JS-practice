document.addEventListener('DOMContentLoaded', () => {

// Calculating factorial
    document.getElementById('factorial-container-submit').addEventListener('click', getFactorial);
    const TEXT_FIELD = document.getElementById('factorial-container-result');

    function getFactorial(num) {
        num = document.getElementById('factorial-container-value').value;
        if (num <= -1) {
            TEXT_FIELD.innerHTML = 'Change other number. You choose negative number';
        } else if (num === 0) {
            TEXT_FIELD.innerHTML = '0';
        } else if (num <= 20) {
            let tmp = num;
            while (num-- > 2) {
                tmp *= num;
            }
            TEXT_FIELD.innerHTML = tmp;
        } else {
            TEXT_FIELD.innerHTML = 'Number is too big';
        }
    }

});
