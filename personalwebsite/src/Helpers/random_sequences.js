let arraySeed = function(s) {
    return function(array_length) {
        s = Math.sin(s) * array_length; return Math.floor(Math.max(s, -s)); // Clip result from 0 to 10
    };
};

// usage:
// var random1 = seed(42);
// var random2 = seed(random1());
export default arraySeed;
