var Rally = {}

Rally.getVersion = function() {
    return 2;
};

Rally.isSupported = function(operation) {
    return Rally.getVersion() > 1;
};
