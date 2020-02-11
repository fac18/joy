BEGIN;

DROP TABLE IF EXISTS prescriber CASCADE;
DROP TABLE IF EXISTS client CASCADE;
DROP TABLE IF EXISTS services CASCADE;

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

COMMIT;