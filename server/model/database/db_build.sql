BEGIN;

DROP TABLE IF EXISTS prescriber, client, services, ucla3_questionnaire, referrals_questionnaire CASCADE;

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
    client_dob DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE  TABLE services (
    services_id SERIAL PRIMARY KEY,
    services_name VARCHAR(100) NOT NULL,
    services_provider VARCHAR(100) NOT NULL
);

CREATE TABLE ucla3_questionnaire (
    input_date_ucla3 DATE NOT NULL DEFAULT CURRENT_DATE, 
    q1_companionship INTEGER NOT NULL , 
    q2_left_out INTEGER NOT NULL, 
    q3_isolated INTEGER NOT NULL, 
    client_id INTEGER REFERENCES client(client_id)
);

CREATE TABLE referrals_questionnaire (
    input_date_referral DATE NOT NULL DEFAULT CURRENT_DATE,
    client_id INTEGER REFERENCES client(client_id),
    services_id INTEGER REFERENCES services(services_id),
    client_attended BOOLEAN NOT NULL DEFAULT FALSE
);

INSERT INTO prescriber (prescriber_username, prescriber_password, prescriber_admin) VALUES 
('Nikke', 'password123', 'true'),
('Maria', 'password123', 'false'),
('Rosa', 'password123', 'false'),
('Roshan', 'password123', 'false');

INSERT INTO client (client_firstname, client_surname, client_dob) VALUES
('Jim', 'Brown', '1955-12-12'),
('Dot', 'Green', '1954-03-28'),
('Kathy', 'Black', '1980-01-03'),
('Jim', 'Brown', '1947-05-05');

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

INSERT INTO ucla3_questionnaire (input_date_ucla3, client_id, q1_companionship, q2_left_out, q3_isolated) VALUES 
('2020-01-03', 1,  2, 3, 3),
('2020-01-14', 3, 3, 3, 2),
('2020-01-20', 2, 1, 2, 1),
('2020-02-03', 1,1, 1, 2),
('2020-02-14', 3, 2, 2, 1),
('2020-02-20', 2, 3, 3, 2),
('2020-01-05', 4, 3, 3, 3), 
('2020-02-05', 4, 2, 1, 1); 

INSERT INTO referrals_questionnaire (input_date_referral, client_id, services_id, client_attended) VALUES
('2020-01-03', 1, 7, TRUE), 
('2020-01-14', 1, 11, TRUE), 
('2020-01-31', 1, 13, TRUE), 
('2019-06-05', 3, 9, TRUE), 
('2019-03-07', 2, 10, TRUE),
('2019-05-03', 2, 11, TRUE), 
('2019-04-05', 2, 12, TRUE),
('2019-03-27', 3, 11, TRUE), 
('2019-05-03', 3, 10, TRUE), 
('2019-06-07', 2, 11, TRUE), 
('2019-03-23', 2, 9, TRUE), 
('2020-01-05', 4, 10, TRUE), 
('2020-02-05', 4, 13, TRUE);

COMMIT;