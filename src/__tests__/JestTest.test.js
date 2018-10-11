import { sum } from '../common/JestTest';
import { get } from 'axios';


describe('unit test 테스트', () => {

    describe('Sum 테스트', () => {

        it('1 + 2 테스트', () => {

            expect(sum(1, 2)).toEqual(3);
            expect(sum(1, 2)).toBe(3);

        });

        it('1 + 3 테스트', () => {

            expect(sum(1, 3)).toEqual(4);

        });

        it('1 + 4 테스트', () => {

            expect(sum(1, 4)).toEqual(5);

        });

        it('1 + 5 테스트', () => {

            expect(sum(1, 5)).toEqual(6);

        });

    });
});


// https://jestjs.io/docs/en/expect


describe('api 테스트', () => {

    describe('api.ipify.org 테스트', () => {

        it('오브젝트 내 원소중 ip가 속해있는지', () => {

            get('https://api.ipify.org/?format=json').then(resp => {

                expect(Object.keys(resp.data)).toContain('ip');

            })

        });

    });

});

test('is', () => {

    expect(1 + 2).not.toEqual(0);

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