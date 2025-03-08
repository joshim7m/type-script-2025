// three main premitives = boolean, number and string
// also two commin premitives = bigint and symbol
// ## type assignment - Explicit and Implicit

// Explicit type - writting out the type
  let firstName: string = 'Dylan';
  
// Implicit type - TypeScript will guess the type, based on the assigned value
  let  lastName: 'Xiayn';

// Unable to Infer
  const json = JSON.parse("55");
  console.log(typeof json); // number

// Special types - any, unknown, never, undefined & null
  let v: any = true;
      v = 'string';
      Math.round(v);
