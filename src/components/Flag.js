import React from 'react';

const Flag = ({nationality}) => {
    switch (nationality) {
        case "no":
            return <div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/1600px-Flag_of_Norway.svg.png"/></div>
        case "dk":
            return <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/2560px-Flag_of_Denmark.svg.png"/>;
        case "se":
            return <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/2560px-Flag_of_Sweden.svg.png"/>;
        case "fi":
            return <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/2560px-Flag_of_Finland.svg.png"/>;
        case "is":
            return <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/2560px-Flag_of_Iceland.svg.png"/>;
        default:
            return <div/>
    }
};

Flag.propTypes = {};

export default Flag;
