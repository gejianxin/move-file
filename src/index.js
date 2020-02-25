import {
  getFileName, moveToFolderByName, createFolderByName, moveFileByName,
} from './handller';


// moveToFolderByName('a:\\国家地理儿童百科流利级\\test教学指导', 'a:\\国家地理儿童百科流利级\\test');
// const filelist = getFileName('a:\\国家地理儿童百科流利级\\教学指导').then((files) => files);
// async function main() {
//   const filelist = await getFileName('a:\\国家地理儿童百科流利级\\教学指导');
//   return filelist;
// }

// main().then((f) => console.log(f));
// console.log(filelist);
// getFileName('a:\\国家地理儿童百科流利级\\教学指导');
// const m = getFileName('a:\\国家地理儿童百科流利级\\教学指导');
// m.then((data) => console.log(data));

createFolderByName('a:\\国家地理儿童百科流利级\\教学指导', 'a:\\国家地理儿童百科流利级\\test');
moveFileByName('a:\\国家地理儿童百科流利级\\教学指导', 'a:\\国家地理儿童百科流利级\\test');
