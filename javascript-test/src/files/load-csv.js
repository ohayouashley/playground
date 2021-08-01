/*
1. Install csv parser
    -run npm i- csv-parser ** this is to read the file

2. Code this below and insert your file link to fs.createReadStream.
*/
import csv from "csv-parser"
import { createReadStream } from "fs"

createReadStream("./costs_with_websites.csv")
  .pipe(csv())
  .on("data", (row) => {
    console.log(row.area)
    console.log(row)
  })
  .on("end", () => {
    console.log("CSV file successfully processed")
  })

//see write-csv for next steps
