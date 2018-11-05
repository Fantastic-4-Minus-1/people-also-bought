const { Pool } = require('pg');

const pool = new Pool({
  host: 'ec2-54-183-129-137.us-west-1.compute.amazonaws.com',
  user: 'power_user',
  password: '$poweruserpassword',
  database: 'robinhood',
});

const queries = {
  getAlsoBoughtByAbbreviation: () => {},
  getAlsoBoughtById: companyId => pool.connect()
    .then(client => client.query(`
        SELECT companies.*, prices.current_price FROM companies
        INNER JOIN alsobought ON alsobought.company_id = ${companyId}
        AND companies.id = alsobought.alsobought_id
        INNER JOIN prices ON companies.id = prices.company_id;
      `).then((res) => {
      client.release();
      return res.rows;
    })),
  getCompanyByAbbreviation: () => {},
  getCompanyById: () => {},
  insertCompany: () => {},
  insertAlsoBought: () => {},
  insertPrices: () => {},
  insertPrice: () => {},
  deleteCompany: () => {},
  deleteAlsoBought: () => {},
  deletePrices: () => {},
};

module.exports = queries;
