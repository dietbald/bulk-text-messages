const fs = require("fs");

/**
 *  Open and read people.txt
 *  format is header line with:
 *  phone<TAB>firstname<TAB>lastname
 *  0428964633<TAB>James<TAB>McDonald
 *
 *  [{ phone: '0428964633', firstname: 'James', lastname: 'McDonald' }]
 *
 * */

try {
  const data = fs.readFileSync("people.txt", "utf8");

  const arr = String(data).split("\n");

  const headings = arr[0].split("\t").map((v) => {
    return v.toLowerCase();
  });

  const red = arr.reduce((prev, curr, idx) => {
    let line = curr.split("\t");
    let obj = {};
    headings.forEach((heading, idx) => {
      obj[heading] = line[idx];
    });
    return prev.concat(obj);
  }, []);

  numbers = red.slice(1); // strip the headers
} catch (err) {
  console.error(err);
  throw Error("Can't find file");
}

// enter your bulk message here
const message = `Hi {FIRSTNAME},
Thanks so much to you and all for being a part of the events today.

WCL
James`;

module.exports = { message, numbers };
