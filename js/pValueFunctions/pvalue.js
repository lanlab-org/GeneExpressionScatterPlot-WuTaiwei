import beta from './beta';
import betacf from './beta';

/**
 * @return {number}
 */
function It_func(x, a, b) {
    return betacf(x, a, b) / beta(a, b);
}

/**
 * @return {number}
 */
function Ft_func(x, k) {
    return 1 - It_func(k / 2, 1 / 2, k / (x * x + k)) / 2;
}


function p_value(t, n) {
    return Ft_func(t, n - 2);
}

export {p_value}

