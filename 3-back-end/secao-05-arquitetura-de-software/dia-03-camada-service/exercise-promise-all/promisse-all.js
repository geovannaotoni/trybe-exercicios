const fs = require('fs').promises;

async function arrayToFile() {
  try {
    const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
    const createFilesPromises = strings.map((string, index) => (
      fs.writeFile(`./file${index + 1}.txt`, string)
    ));
    await Promise.all(createFilesPromises);
  } catch (err) {
    console.error(`Erro: ${err.message}`);
  }
}

arrayToFile();

async function main() {
  try {
    const files = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', 'file5.txt'];
    const readFilesPromises = files.map((file) => (
      fs.readFile(file, "utf8")
    ))
    const filesContents = await Promise.all(readFilesPromises);
    await fs.writeFile('./fileAll.txt', filesContents.join(' '));
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

main();