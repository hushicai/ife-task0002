/**
 * @file test dom
 * @author hushicai(bluthcy@gmail.com)
 */

/* eslint-disable no-undef */

var el1;
var el2;

beforeAll(function () {
    el1 = document.createElement('div');
    el1.id = 'test1';
    el1.className = 'test1';
    document.body.appendChild(el1);

    el2 = document.createElement('div');
    el2.id = 'test2';
    el2.className = 'test2';
    document.body.appendChild(el2);
});

describe('dom', function () {
    it('isSiblingNode', function () {
        expect(isSiblingNode(el1, el2)).toBe(true);
        expect(isSiblingNode(el1, document.body)).toBe(false);
    });
});

afterAll(function () {
    el1.parentNode.removeChild(el1);
    el2.parentNode.removeChild(el2);
    el1 = null;
    el2 = null;
});
