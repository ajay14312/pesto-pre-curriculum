function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}
function divide(x, y) {
  return x / y;
}
function multiply(x, y) {
  return x * y;
}

const describe = (desc, fn) => {
  console.log(desc);
  fn();
};

const it = (msg, fn) => describe("  " + msg, fn);

const matchers = exp => ({
  toBe: asssertion => {
    if (exp === asssertion) {
        //var a = --assertion
      console.log("pass");
      return true;
    } else {
      console.log("fail");
      return false;
    }
  }
});

const expect = exp => matchers(exp);

describe("adder", () => {
  it("adds two numbers", () => {
    const result = add(1, 2);
    expect(result).toBe(3);
  });
});

describe("subtractor", () => {
  it("subtract two numbers", () => {
    const result = subtract(1, 2);
    expect(result).toBe(-1);
  });
});

describe("divider", () => {
  it("divide two numbers", () => {
    const result = divide(1, 2);
    expect(result).toBe(0.5);
  });
});

describe("multiplier", () => {
  it("multiply two numbers", () => {
    const result = multiply(1, 2);
    expect(result).toBe(2);
  });
});

module.exports = {
  describe,
  expect,
  it,
  matchers
};
