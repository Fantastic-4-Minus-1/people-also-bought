DROP INDEX IF EXISTS id;
DROP INDEX IF EXISTS abbr;
DROP INDEX IF EXISTS comp_id1;
DROP INDEX IF EXISTS comp_id2;

CREATE INDEX comp_id2 ON prices (company_id);
CREATE INDEX comp_id1 ON alsobought (company_id);
CREATE INDEX abbr ON companies USING HASH (company_abbr);
CREATE INDEX id ON companies USING HASH (id);
