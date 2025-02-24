function messageMaker(startStr) {
    return {
        makeMessage: function(addStr) {
            return startStr + addStr;
        }
    };
}
