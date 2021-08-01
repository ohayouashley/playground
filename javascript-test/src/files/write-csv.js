 /* 3. Install csv write
  -run npm i- csv-writer ** this is to write the file
  */

// const createCsvWriter = require('csv-writer').createObjectCsvWriter;
// const csvWriter = createCsvWriter({
//   path: 'out.csv',
//   header: [
//     {id: 'name', title: 'Name'},
//     {id: 'surname', title: 'Surname'},
//     {id: 'age', title: 'Age'},
//     {id: 'gender', title: 'Gender'},
//   ]
// });

const data = [
  {
    name: 'John',
    surname: 'Snow',
    age: 26,
    gender: 'M'
  }, {
    name: 'Clair',
    surname: 'White',
    age: 33,
    gender: 'F',
  }, {
    name: 'Fancy',
    surname: 'Brown',
    age: 78,
    gender: 'F'
  }
];

csvWriter
  .writeRecords(data)
  .then(()=> console.log('The CSV file was written successfully'));

  //********    MINE        ********** */

  //    PART ONE    //

  const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: 'out.csv',
  header: [
    {id: 'region', title: 'Region'},
    {id: 'area', title: 'Area'},
    {id: 'residential ', title: 'Residential'},
    {id: 'nursing', title: 'Nursing'},
    {id: 'website:', title: 'Website:'},
    {id: 'name (if applicable)', title: 'Name (if applicable)}',
    {id: 'residential', title: 'Residential'},
    {id: 'contact email', title: 'Contact email'},   
  ]
});

//      PART TWO    //

