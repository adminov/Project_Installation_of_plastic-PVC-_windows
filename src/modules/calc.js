'use strict';
    const calcBlock = document.getElementById('calc');

    const calcType = document.getElementById('calc-type'),
        calcTypeMaterial = document.getElementById('calc-type-material'),
        calcInput = document.getElementById('calc-input'),
        calcTotal = document.getElementById('calc-total');



    const countSum = () => {
        let total = 0;

        const calcTypeVal = calcType.value,
            calcTypeMaterialVal = calcTypeMaterial.value,
            calcInputVal = +calcInput.value;

        if (calcTypeVal && calcTypeMaterialVal) {
            total = calcInputVal * calcTypeVal * calcTypeMaterialVal;
        }

        calcTotal.value = Math.floor(total);
    };

    calcBlock.addEventListener('change', (event) => {
        let target = event.target;
        if (target.matches('select') || target.matches('input')){
            countSum();
        }
    });
