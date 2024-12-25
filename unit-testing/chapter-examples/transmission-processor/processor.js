function processor(transmission){
    transmission = transmission.trim(); // Trim leading and trailing whitespace

    if(transmission.indexOf("::") < 0){
        //Data is invalid
        return -1;
    };

    if ((transmission.match(/::/g) || []).length !== 1){
        // Data is invalid if there is not exactly one "::"
        return -1;
    };

    let parts = transmission.split("::");
    let id = Number(parts[0]);
    if (isNaN(id) ){
        //id is not a number
        return -1;
    };

    let rawData = parts[1].trim();
    
    if (rawData[0] !== "<"){
        rawData = -1;
    };
    
    if (rawData[rawData.length - 1] !== ">"){
        rawData = -1;
    };

    if (rawData[0] !== "<" || rawData[rawData.length - 1] !== ">" || rawData.indexOf("<") > 0 || rawData.indexOf(">") < rawData.length - 1) {
        rawData = -1;
    }else {
        // Remove < and > from rawData
        rawData = rawData.slice(1, -1);
    };

    // Check if rawData contains only numbers
    if (!/^\d+$/.test(rawData)) {
        rawData = -1;
    };

    // OR Check if rawData contains only numbers
    for (let i = 0; i < rawData.length; i++) {
        if (rawData[i] < '0' || rawData[i] > '9') {
            rawData = -1;
            break;
        }
    };

    return{
        id: id,
        rawData: rawData
    };
    
};

module.exports = processor;