// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

type Circle = {
    shape : "circle";
    radius : number;
};


type Rectangle = {
    shape : "rectangle";
    height : number;
    width : number;
}

function calculateShapeArea( param : Circle | Rectangle ){
    if(param.shape === "circle"){
        return Math.PI *( param.radius) * (param.radius);

    }
    else if(param.shape === "rectangle"){
        return param.width * param.height;
    }else{
        throw new Error("wrong shape");
    }
}

// const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
// console.log(circleArea);

// const rectangleArea = calculateShapeArea({
//     shape: "rectangle",
//     width: 4,
//     height: 6,
//   });

// console.log(rectangleArea);