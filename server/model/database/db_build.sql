BEGIN;

DROP TABLE IF EXISTS prescriber CASCADE;
DROP TABLE IF EXISTS client CASCADE;
DROP TABLE IF EXISTS services CASCADE;
DROP TABLE IF EXISTS ucla3_questionnaire CASCADE;
DROP TABLE IF EXISTS referrals_questionnaire CASCADE;

CREATE TABLE prescriber (
    prescriber_id SERIAL PRIMARY KEY,
    prescriber_username VARCHAR(100) NOT NULL,
    prescriber_password VARCHAR(50) NOT NULL, 
    prescriber_admin BOOLEAN NOT NULL
);


CREATE TABLE client (
    client_id SERIAL PRIMARY KEY,
    client_firstname VARCHAR(50) NOT NULL,
    client_surname VARCHAR(50) NOT NULL,
    client_dob DATE NOT NULL
);

CREATE  TABLE services (
    services_id SERIAL PRIMARY KEY,
    services_name VARCHAR(100) NOT NULL,
    services_provider VARCHAR(100) NOT NULL
);

CREATE TABLE ucl3_questionnaire (
    input_date_ucl3 DATE NOT NULL, 
    q1_companionship INTEGER NOT NULL , 
    q2_left_out INTEGER NOT NULL, 
    q3_isolated INTEGER NOT NULL, 
    client_id INTEGER REFERENCES client(client_id)
)

CREATE TABLE referrals_questionnaire (
    input_date_referral DATE NOT NULL,
    client_id INTEGER REFERENCES client(client_id)
    services_id INTEGER REFERENCES services(services_id)
    client_attended BOOLEAN NOT NULL 
)


INSERT INTO prescriber (prescriber_username, prescriber_password, prescriber_admin) VALUES 
('Nikke', 'password123', 'true'),
('Maria', 'password123', 'false'),
('Rosa', 'password123', 'false'),
('Roshan', 'password123', 'false');

INSERT INTO client (client_firstname, client_surname, client_dob) VALUES
('Jim', 'Brown', '12-12-1955'),
('Dot', 'Green', '28-03-1954'),
('Kathy', 'Black', '03-01-1980'),
('Jim', 'Brown', '05-05-1947');

INSERT INTO services (services_name, services_provider) VALUES
('Local Offer - support for people with SEND', 'Family Information Service F'),
('South Berkshire PCN Social Prescribing', 'Wokingham Cares'),
('Social prescribing service (Reading)', 'Wokingham Cares'),
('Green ‘n’ Tidy Gardening', 'The Hub Wokingham'),
('Wokingham Community Transport Scheme', 'Wokingham Cares'),
('Coffee Morning', 'Wokingham Cares'),
('Learning Spanish', 'Queen Elizabeth College'),
('Pub lunch', 'The Hub Wokingham'),
('Community Kitchen Project', 'The Hub Wokingham'),
('Dementia Wellbeing & Befriending', 'The Hub Wokingham'),
('Modern Dance ', 'Queen Elizabeth College'),
('Alpha Course', 'St Lukes Wokingham'),
('Mens Cooking', 'Wokingham Cares'),
('Information and Advice', 'Wokingham Cares');


INSERT INTO ucl3_questionnaire (input_date_ucl3, client_id, q1_companionship, q2_left_out, q3_isolated) VALUES 
('03-01-2020', 1,  2, 3, 3),
('14-01-2020', 3, 3, 3, 2),
('20-01-2020', 2, 1, 2, 1),
('03/02/2020', 1, 1, 2),
('14-02-2020', 3, 2, 2, 1),
('20-02-2020', 2, 3, 3, 2),
('05-01-2020', 4, 3, 3, 3), 
('05-02-2020', 4, 2, 1, 1) 


INSERT INTO referrals_questionnaire (input_date_referral, client_id, services_id, client_attended) VALUES
('03-01-2020', 1, 7, "true"), 
('14-01-2020', 1, 11, "true"), 
('31-01-2020', 1, 13, "true"), 
('05/06/2019', 3, 9, 'true'), 
('07/03/2019', 2, 10, 'true'), 
('03/05/2019', 2, 11, 'true'), 
('05/04/2019', 2, 12, 'true'),
('27/03/2019', 3, 11, 'true'), 
('03/05/2019', 3, 10, 'true'), 
('07/06/2019', 2, 11, 'true'), 
('23/03/2019', 2, 9, 'true'), 
('05/01/2020', 4, 10, 'true'), 
('05/02/2020', 4, 13, 'true')

COMMIT;