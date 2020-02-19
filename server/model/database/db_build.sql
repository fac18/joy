BEGIN;

DROP TABLE IF EXISTS client, services, ucla3_questionnaire, referrals_questionnaire CASCADE;

CREATE TABLE client (
    client_id SERIAL PRIMARY KEY,
    client_firstname VARCHAR(50) NOT NULL,
    client_surname VARCHAR(50) NOT NULL,
    client_knownAs VARCHAR(50) NOT NULL, 
    client_dob DATE NOT NULL DEFAULT CURRENT_DATE,
    client_phone VARCHAR(50) NOT NULL,
    client_address VARCHAR(250) NOT NULL,
    client_nhsNumber VARCHAR(50) NOT NULL,
    client_consent BOOLEAN NOT NULL, 
    client_areasOfSupport VARCHAR(250) NOT NULL
);

CREATE  TABLE services (
    services_id SERIAL PRIMARY KEY,
    services_name VARCHAR(100) NOT NULL,
    services_provider VARCHAR(100) NOT NULL
);

CREATE TABLE ucla3_questionnaire (
    ucla3_id SERIAL PRIMARY KEY,
    input_date_ucla3 DATE NOT NULL DEFAULT CURRENT_DATE, 
    q1_companionship INTEGER NOT NULL , 
    q2_left_out INTEGER NOT NULL, 
    q3_isolated INTEGER NOT NULL, 
    total_ucla3 INTEGER NOT NULL GENERATED ALWAYS AS (q1_companionship + q2_left_out + q3_isolated) STORED,
    client_id INTEGER REFERENCES client(client_id), 
    next_appointment_date DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE referrals_questionnaire (
    referrals_id SERIAL PRIMARY KEY,
    input_date_referral DATE NOT NULL DEFAULT CURRENT_DATE,
    client_id INTEGER REFERENCES client(client_id),
    services_id INTEGER REFERENCES services(services_id),
    no_of_services_attended INTEGER ,
    client_attended BOOLEAN NOT NULL DEFAULT FALSE
);

INSERT INTO client (client_firstname, client_surname, client_knownAs, client_dob, client_phone, client_address, client_nhsNumber, client_consent, client_areasOfSupport) VALUES
('Jim', 'Brown', 'Jimbo', '1955-12-12', '02085632478', '32 fred st', '123', TRUE, 'Feeling Lonely/Isolated'),
('Dot', 'Green', 'Mrs Green', '1954-03-28', '02076359865', '2 brook closse', '123', TRUE, 'Feeling Lonely/Isolated'),
('Kathy', 'Black', 'Kat', '1980-01-03', '0775869365', '8 green rd', '123', TRUE, 'Feeling Lonely/Isolated'),
('Jim', 'Brown', 'Jim', '1947-05-05', '0794856234', '3 highway', '123', TRUE, 'Feeling Lonely/Isolated'),
('Katherine', 'Woods', 'Ms Woods', '1981-04-26', '0771452589', 'ormsby st', '123', TRUE, 'Feeling Lonely/Isolated'),
('Jay', 'Lejeune', 'Jayjay', '1943-02-27', '0784895231', '2 hero way', '123', TRUE, 'Feeling Lonely/Isolated'),
('Lucy', 'Baughan', 'Lucy', '1952-01-17', '02079638452', '64 zoo lane', '123', TRUE, 'Feeling Lonely/Isolated'),
('Leonardo', 'Barbosa', 'Leo', '1938-03-14', '020345678995', '5 banham close', '123', TRUE, 'Feeling Lonely/Isolated');

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

INSERT INTO ucla3_questionnaire (input_date_ucla3, client_id, q1_companionship, q2_left_out, q3_isolated, next_appointment_date) VALUES 
('2020-01-03', 1,  2, 3, 3, '2020-01-04'),
('2020-01-14', 3, 3, 3, 2,'2020-01-04'),
('2020-01-20', 2, 1, 2, 1,'2020-01-04'),
('2020-02-03', 1, 1, 1, 2,'2020-01-04'),
('2020-02-14', 3, 2, 2, 1,'2020-01-04'),
('2020-02-20', 2, 3, 3, 2,'2020-01-04'),
('2020-01-05', 4, 3, 3, 3,'2020-01-04'), 
('2020-02-05', 4, 2, 1, 1,'2020-01-04'),
('2020-03-03', 1,  1, 2, 3,'2020-01-04'),
('2020-04-03', 1,  1, 1, 1,'2020-01-04'),
('2019-05-28', 1,  2, 3, 3,'2020-01-04'),
('2019-06-09', 2,  2, 3, 3,'2020-01-04'),
('2019-07-15', 3,  2, 3, 3,'2020-01-04'),
('2019-08-30', 4,  2, 3, 3,'2020-01-04');




INSERT INTO referrals_questionnaire (input_date_referral, client_id, services_id, no_of_services_attended, client_attended) VALUES
('2020-01-03', 1, 7, 5, TRUE), 
('2020-01-14', 1, 11, 5, TRUE), 
('2020-01-31', 1, 13, 3, TRUE), 
('2019-06-05', 3, 9, 1, TRUE), 
('2019-03-07', 2, 10, 0, TRUE),
('2019-05-03', 2, 11, 7, TRUE), 
('2019-04-05', 2, 12, 3, TRUE),
('2019-03-27', 3, 11, 0, TRUE), 
('2019-05-03', 3, 10, 1, TRUE), 
('2019-06-07', 2, 11, 3, TRUE), 
('2019-03-23', 2, 9, 8, TRUE), 
('2020-01-05', 4, 10, 2, TRUE), 
('2020-02-05', 4, 13, 2, TRUE);

COMMIT;