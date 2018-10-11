import React from 'react';

import renderer from 'react-test-renderer';
import ReactDOMTest from '../common/ReactDOMTest';


test('render test', () => {


    const dom = renderer.create(
        <ReactDOMTest href='https://adshot.asia' title='Adshot' />
    );


    const obj = dom.toJSON();

    // console.log(obj)

    expect(obj).toHaveProperty('type');
    expect(obj.type).toEqual('div');

    expect(obj).toHaveProperty('props');
    expect(obj.props).toEqual({});

    expect(obj.children.length).toEqual(1);



    const a = obj.children[0];

    // console.log(a)

    expect(a).toHaveProperty('type');
    expect(a.type).toEqual('a');

    expect(a).toHaveProperty('props');
    expect(a.props).toEqual({ href: 'https://adshot.asia' });

    expect(a.children.length).toEqual(1);



    const h1 = a.children[0];

    // console.log(h1)

    expect(h1).toHaveProperty('type');
    expect(h1).toHaveProperty('props');
    expect(h1).toHaveProperty('children');

    expect(h1.type).toEqual('h1');
    expect(h1.props).toEqual({});

    expect(h1.children.length).toEqual(1);

    expect(h1.children[0]).toEqual('Adshot');

});