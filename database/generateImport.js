const fs = require('fs');

const filepath = './database/import.sql';

const append = (i, path) => {
  const data = `\\COPY ${path} FROM './seeds/${path}_${i}.csv' WITH QUOTE AS '\`' DELIMITER AS '|' CSV HEADER;\n`;
  fs.appendFile(filepath, data, (error) => {
    if (error) { console.log(error); }
  });
};

const header = `
-- #######                                            #######
--   #######################################################
--   #########                                     #########
--   #########        Script Generated by:         #########
--   #########        generatedImportSchema.js     #########
--   #########                                     #########
--   #######################################################
-- #######                                            #######\n\n\n
`;

fs.writeFile(filepath, header, (e) => {
  if (e) { console.log(e); }
  for (let i = 0; i < 26; i++) {
    append(i, 'companies');
    append(i, 'alsobought');
    append(i, 'prices');
  }
});
