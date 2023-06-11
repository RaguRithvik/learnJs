const objectReAssign = (values) => {
    if (Array.isArray(values)) {
      console.log("if")
      for (let index = 0; index < values.length; index++) {
        values[index] = objectReAssign(values[index])
      }
    }
    else {
      for (let object in values) {
        if (typeof values[object] == 'object' && values[object] != null) {
          for (let innerObj in values[object]) {
          //  console.log(innerObj)
          //  console.log(values[object])
            values[object + "-" + innerObj] = values[object][innerObj];
          }
          delete values[object];
          // console.log(values)
        }
      }
    }
    return values;
  }
objectReAssign({
      "row-number": 1,
      "roll-number": 2,
      "b2b-price": {
        "tax-value": 30,
        "service-value": 40,
        "addition-value": 70,
        "amenity-value": 90,
        "net-value": 100}})