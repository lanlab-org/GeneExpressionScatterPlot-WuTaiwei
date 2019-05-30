/**
 * @return {number}
 */
function It_func(a, b, x) {
    return incBeta(x, a, b) / incBeta(1, a, b);
}

/**
 * @return {number}
 */
function Ft_func(x, k) {
    return 1 - It_func(k / 2, 1 / 2, k / (x * x + k)) / 2;
}


function p_value(t, df) {
    return (1 - Ft_func(t, df)) * 2;
}
