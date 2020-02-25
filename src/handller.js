import path from 'path';
import fs from 'fs';

function getFileName(srcPath) {
  return new Promise((resolve, reject) => {
    fs.readdir(srcPath, (error, files) => {
      if (error) throw reject(error);
      resolve(files);
    });
  });
}

function createFolderByName(srcPath, destPath) {
  getFileName(srcPath).then((files) => {
    files.forEach((file) => {
      const newPath = path.resolve(destPath, path.parse(file).name);
      fs.exists(newPath, (exist) => {
        if (exist) {
          return false;
        }
        fs.mkdir(newPath, (err) => {
          if (err) throw err;
        });
      });
    });
  }).catch((error) => {
    console.log(error.message);
  });
}

function moveFileByName(srcPath, destPath) {
  getFileName(srcPath).then((files) => {
    files.forEach((file) => {
      const newPath = path.resolve(destPath, path.parse(file).name);
      const srcFile = path.resolve(srcPath, file);
      fs.rename(srcFile, path.resolve(newPath, file), () => {
        console.log('File has been moved.');
      });
    });
  }).catch((error) => {
    console.log(error.message);
  });
}

function moveToFolderByName(srcPath, destPath) {
  const names = getFileName(srcPath);
  createFolderByName(destPath, destPath);

  fs.readdir(srcPath, (error, files) => {
    if (error) throw error;
    files.forEach((file) => {
      const srcFile = path.resolve(srcPath, file);
      fs.rename(srcFile, path.resolve(destPath, file), () => {
        console.log('File has been moved.');
      });
    });
  });
}

export {
  moveToFolderByName,
  getFileName,
  createFolderByName,
  moveFileByName,
};
