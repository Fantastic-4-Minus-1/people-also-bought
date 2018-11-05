psql -h ec2-54-219-157-13.us-west-1.compute.amazonaws.com -U power_user -W postgres < schema.sql &&
psql -h ec2-54-219-157-13.us-west-1.compute.amazonaws.com -U power_user -W robinhood < index.sql &&
psql -h ec2-54-219-157-13.us-west-1.compute.amazonaws.com -U power_user -W robinhood < ./database/import.sql