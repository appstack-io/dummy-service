module.exports = function consolidateProtobuf(protoStr) {
  const lines = protoStr.split('\n');

  let braceCount = 0;
  let currentBlock = null;
  let currentBlockName = '';
  let blockLine = 0;
  const blocks = {};

  for (const line of lines) {
    const trimmedLine = line.trim();

    if (
      trimmedLine.startsWith('message') ||
      trimmedLine.startsWith('enum') ||
      trimmedLine.startsWith('service')
    ) {
      currentBlock = trimmedLine.split(' ')[0]; // e.g., message, enum, service
      currentBlockName = trimmedLine.split(' ')[1];
      blockLine = 0;
      if (!blocks[currentBlock]) {
        blocks[currentBlock] = {};
      }
      if (!blocks[currentBlock][currentBlockName]) {
        blocks[currentBlock][currentBlockName] = [];
      }
    }

    for (const char of line) {
      if (char === '{') braceCount++;
      if (char === '}') braceCount--;
    }

    if (currentBlockName && braceCount > 0 && blockLine > 0) {
      blocks[currentBlock][currentBlockName].push(line);
    }

    blockLine++;
  }

  // Construct the result from the consolidated blocks
  let result = '';
  for (const blockType in blocks) {
    for (const blockName in blocks[blockType]) {
      result += `${blockType} ${blockName} {\n`;
      result += blocks[blockType][blockName].join('\n') + '\n';
      result += '}\n\n';
    }
  }

  return result;
};
