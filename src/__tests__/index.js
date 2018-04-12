const Remark = require("remark");
const visit = require(`unist-util-visit`);
const plugin = require("../index");

describe(`gatsby-remark-gemoji-to-emoji`, () => {
  let remark;

  beforeEach(() => {
    remark = new Remark().data(`settings`, {
      commonmark: true,
      footnotes: true,
      pedantic: true
    });
  });

  it(`process ':+1:'`, () => {
    const markdownAST = remark.parse(`:+1:`);

    const transformed = plugin({ markdownAST });

    visit(transformed, `text`, node => {
      expect(node.value).toBe(`👍`);
    });
  });

  it(`process 'a :+1: b :-1: c'`, () => {
    const markdownAST = remark.parse(`a :+1: b :-1: c`);

    const transformed = plugin({ markdownAST });

    visit(transformed, `text`, node => {
      expect(node.value).toBe(`a 👍 b 👎 c`);
    });
  });

  it(`leaves other nodes alone`, async () => {
    const markdownAST = remark.parse(`
# Hello World

a regular sentence

One: colon

- list item
- other list item

1. numbered
1. other numbered
    `);

    const transformed = await plugin({
      markdownAST: Object.assign({}, markdownAST)
    });

    expect(transformed).toEqual(markdownAST);
  });
});
