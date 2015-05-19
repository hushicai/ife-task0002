/**
 * @file test dom
 * @author hushicai(bluthcy@gmail.com)
 */

function test(selector) {
    console.log('"' + selector + '"', $(selector));
}

test('#test1');
test('.test1');
test('div');
test('[data-log="test2"]');
test('.test1 span');
test('.test2 span');
test('body #test2');
test('span');
