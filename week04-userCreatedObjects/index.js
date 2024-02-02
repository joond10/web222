/**
 * Week 3 - A Larger Example (String, Array, RegExp):
 *
 * Write a series of functions to accomplish the following, building a larger program as you go:
 *
 * 1. Split the string into an `Array` of separate rows (i.e., an `Array` with rows separated by `\n`).
 *    Bonus: how could we deal with data that includes both Unix (`\n`) and Windows (`\r\n`) line endings?
 *
 * 2. Each row contains information user info: `ID`, `Name`, `Phone Number`, and `Height` info all separated by commas.
 *    Split each row into an `Array` with all of its different fields.  You need to deal with extra and/or no
 *    whitespace between the commas.
 *
 * 3. Get rid of any extra spaces around the `Name` field
 *
 * 4. Using a `RegExp`, extract the Area Code from the `Phone Number` field.  All `Phone Number`s are in one of two
 *    formats: `"555-555-5555"` or `"5555555555"`.
 *
 * 5. Check if the `Height` field has `"cm"` at the end.  If it does, strip that out, convert the number to inches,
 *    and turn it into a `String` in the form `"xx inches"`.  For example: `"152 cm"` should become `"59 inches"`.
 *
 * 6. After doing all of the above steps, create a new record with `ID`, `Name`, `Area Code`, `Height In Inches`
 *    and separate them with commas.
 *
 * 7. Combine all these processed records into a new CSV formatted string, with rows separated by `\n`.
 *
 * Sample Data:
 *
 * ```
 * 0134134,John Smith,555-567-2341,62 inches\n
 * 0134135   ,    June    Lee    ,  5554126347 ,        149 cm\n
 * 0134136,       Kim Thomas       , 5324126347, 138cm\n
 * ```
 */

// Multi-Line Template Literal to wrap the CSV data
var csvData = `0134134,John Smith,555-567-2341,62 inches
0134135   ,    June    Lee    ,  5554126347 ,        149 cm
0134136,       Kim Thomas       , 5324126347, 138cm`;

function PhoneNumber(value) {
  this.value = value;
}
PhoneNumber.prototype.getAreaCode = function () {
  let phoneNumber = this.value;

  let matches = phoneNumber.match(/(\d{3})-?\d{3}-?\d{4}/);
  if (matches) {
    return matches[1];
  }
  return phoneNumber;
};

/**
let phoneNumber = new PhoneNumber('555-567-2341');
let areaCode = phoneNumber.getAreaCode();
 */

function Height(inches) {
  this.inches = inches;
}
Height.prototype.toString = function () {
  // 54.31 inches
  return `${this.inches.toFixed(2)} inches`;
};
Height.parse = function (value) {
  let inches;

  if (value.endsWith("inches")) {
    inches = parseFloat(value);
  } else {
    inches = parseFloat(value) * 0.39;
  }

  return new Height(inches);
};

/**
let height = new Height(54);
let s = height.toString();
let height2 = Height.parse('54 inches');
let height3 = Height.parse('134 cm');
console.log(height); // '54 inches'
 */

/**
 * 0134134,John Smith,555-567-2341,62 inches\n
 * 0134135   ,    June    Lee    ,  5554126347 ,        149 cm\n
 * 0134136,       Kim Thomas       , 5324126347, 138cm\n
 */
function Customer(id, name, phoneNumber, height) {
  this.id = id;
  this.name = removeExtraWhitespace(name);
  this.phoneNumber = new PhoneNumber(removeExtraWhitespace(phoneNumber));
  this.height = Height.parse(removeExtraWhitespace(height));
}

function splitIntoRows(s) {
  return s.split(/\r?\n/);
}

function removeExtraWhitespace(s) {
  return s.replace(/\s+/, " ");
}

function rowToCustomer(row) {
  // Split on , with or without whitespace on either side
  let fields = row.split(/\s*,\s*/);
  // ['id', 'name', 'phonenumber', 'height']
  return new Customer(fields[0], fields[1], fields[2], fields[3]);
}

function processCSV(csv) {
  // Step 1 - break the csv into rows
  let rows = splitIntoRows(csv);

  // Step 2 - split all rows into array of fields
  return rows.map(rowToCustomer);
}

// Log output of processing
let customers = processCSV(csvData);
console.log(customers);

customers.forEach(function (customer) {
  console.log(
    customer.name,
    customer.height.toString(),
    customer.phoneNumber.getAreaCode()
  );
});
