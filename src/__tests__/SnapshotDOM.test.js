import React from 'react';

import renderer from 'react-test-renderer';
import SnapshotDOM from '../common/SnapshotDOM';


test('snapshot test', () => {

    const dom = renderer.create(
        <SnapshotDOM href='https://adshot.asia' title='Adshot' />
    );


    const obj = dom.toJSON();

    expect(obj).toMatchSnapshot();

});