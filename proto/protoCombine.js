const fs = require('fs');
const path = require('path');
const consolidate = require('./protoConsolidate');

// Recursively find all .proto files from the current directory
const findProtoFiles = (dir, fileList = []) => {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findProtoFiles(filePath, fileList);
    } else if (path.extname(file) === '.proto') {
      fileList.push(filePath);
    }
  });

  return fileList.filter((file) => file.indexOf('combined.proto') < 0);
};

const protoFiles = findProtoFiles('.');

let combinedContent = '';
let importStatements = new Set();

// Loop through all files
protoFiles.forEach((file) => {
  const content = fs.readFileSync(file, 'utf8');

  // Extract unique import statements
  content.split('\n').forEach((line) => {
    if (line.startsWith('import ')) {
      importStatements.add(line);
    }
  });

  // Exclude lines with 'syntax = "proto3";', 'import ...' or starting with 'package'
  const filteredContent = content
    .split('\n')
    .filter(
      (line) =>
        !line.includes('syntax = "proto3";') &&
        !line.startsWith('import ') &&
        !line.startsWith('package '),
    )
    .join('\n');

  combinedContent += filteredContent + '\n';
});

// First, consolidate the combined content
const consolidated = consolidate(combinedContent);
// const consolidated = combinedContent;

// Then, prepend 'syntax = "proto3";' and the unique import statements to the consolidated content
const finalContent =
  'syntax = "proto3";\n' +
  Array.from(importStatements).join('\n') +
  '\npackage main;\n\n' +
  consolidated;

fs.writeFileSync(path.join('proto', 'combined.proto'), finalContent, 'utf-8');
