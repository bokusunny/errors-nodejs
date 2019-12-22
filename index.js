// rouding-off error
console.log('[routing error]')
console.log('10 / 6 is expected to eq  1.666...(continues infinitely), but actually:', 10 / 6)
console.log('The rounding-off error is 0.000000000000000333...')

// truncation error
console.log('[truncation error]')
console.log('If we truncate the decimal part of 10 / 6, the result is:', Math.floor(10 / 6))
console.log('The trancation error is 0.666...')

// loss of trailing digits
console.log('[loss of trailing digits]')
console.log('1 + 0.0000000000000001 is expected to eq 1.0000000000000001, but actually:', 1 + 0.0000000000000001)

// loss of significance
console.log('[loss of significance]')
const x = 123456.789
const near_x = 123456.788
console.log('The significant digits in the result of', x, '-', near_x, 'is reduced unacceptably and the accurancy is relatively lost:', x - near_x)

// overflow
console.log('[overflow]')
const max_value = Number.MAX_VALUE
console.log('If you go too far from js max value, the result is:', max_value * 2)

