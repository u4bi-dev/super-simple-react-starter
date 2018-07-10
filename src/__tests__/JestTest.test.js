import { sum, sum2 } from '../common/JestTest'
import { get } from 'axios'

test('Sum', () => {
    expect(sum(1, 2)).toBe(3);

    expect(sum(1, 3)).toBe(4);

    expect(sum(1, 4)).toBe(5);

    expect(sum(1, 5)).toBe(6);

})

test('Sum2', () => {

    expect(sum2(1, 2)).toEqual({ 
        a: 1, 
        b: 2, 
        result : 3
    })

})

test('is', () => {

    expect(1 + 2).not.toBe(0);

})

test('contain_arr', () => {

    let arr = [
        'a',
        'b',
        'c',
        'd',
        'e'
    ]

    expect(arr).toContain('e')

})

test('callback', done => {

    get('https://api.ipify.org/?format=json').then(resp => {

        expect(Object.keys(resp.data)).toContain('ip');

    })

    get('https://api.ipify.org/?format=json').then(resp => {

        expect(resp.data).toHaveProperty('ip')

        done()

    })

});