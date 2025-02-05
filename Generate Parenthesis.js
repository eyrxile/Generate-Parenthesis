var generateParenthesis = function(n) {
    const result = [];

    function generate(current, open, close){
        if(current.length === 2 * n){
            result.push(current);
            return;
        }

        if(open < n){
            generate(current + '(', open + 1, close);
        }

        if(close < open){
            generate(current + ')', open, close + 1);
        }
    }

    generate('', 0, 0);
    return result;
};

//Example usage:
console.log(generateParenthesis(3));
console.log(generateParenthesis(1));