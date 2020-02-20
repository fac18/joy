-- List of total number of services available
SELECT COUNT (client_id) FROM client;
SELECT COUNT (services_id) FROM services;

-- Query 1 (from Roshan)
-- List of all wellbeing assessments by client id and total assessment score
SELECT input_date_ucla3, client_id, total_ucla3
FROM ucla3_questionnaire 
ORDER BY client_id, input_date_ucla3 ASC;

-- Query 2 (from Roshan)
-- List of all service referrals by client id and services id 
SELECT input_date_referral, client_id, services_id 
FROM referrals_questionnaire 
ORDER BY client_id, services_id ASC;

-- Query 3 (from Nikke)
-- List of all wellbeing assessment scores and services referrals by date 
SELECT input_date_ucla3, ucla3_questionnaire.client_id, total_ucla3, input_date_referral, referrals_questionnaire.client_id, services_id 
FROM ucla3_questionnaire
INNER JOIN referrals_questionnaire
ON ucla3_questionnaire.input_date_ucla3 = referrals_questionnaire.input_date_referral
AND ucla3_questionnaire.client_id = referrals_questionnaire.client_id
ORDER BY ucla3_questionnaire.client_id, input_date_ucla3 ASC;

-- Query 4a
-- Returns a single client's INITIAL assessment date and score 
-- (currently set to client 1, our beloved Jim Brown)
SELECT ucla3_id, input_date_ucla3 AS initial_assessment_date, total_ucla3, client_id
FROM ucla3_questionnaire
WHERE client_id = 1
ORDER BY input_date_ucla3 ASC
LIMIT 1;

-- Query 4b
-- Returns a single client's CURRENT assessment date and score
-- (currently set to client 1, our beloved Jim Brown)
SELECT ucla3_id, input_date_ucla3 AS current_assessment_date, total_ucla3, client_id
FROM ucla3_questionnaire
WHERE client_id = 1
ORDER BY input_date_ucla3 DESC
LIMIT 1;

-- Query 5a
-- Calculate age of ALL clients
SELECT *, current_date, 
   EXTRACT(YEAR FROM age(current_date, client_dob)) AS current_age
FROM client;

-- Query 5b
-- Calculate age of SINGLE client
SELECT client_id, client_firstname, client_surname, 
   EXTRACT(YEAR FROM age(current_date, client_dob)) AS current_age
FROM client
WHERE client_id = 1;

--- Query 5c 
--- Calculate the current services referred to 

SELECT * FROM services WHERE services_id =ANY(SELECT services_id FROM referrals_questionnaire WHERE client_id=1);


-- Query 6
-- Sort referrals by popularity between two dates (default: current_date)
SELECT services_id, SUM(no_of_services_attended)
FROM referrals_questionnaire
WHERE input_date_referral BETWEEN '2019-01-01' AND current_date
GROUP BY services_id
ORDER BY SUM(no_of_services_attended) DESC
LIMIT 10;

--- Query 5c 
--- Calculate the current services referred to 

SELECT * FROM services WHERE services_id =ANY(SELECT services_id FROM referrals_questionnaire WHERE client_id=1);


-- Query 6
-- Sort referrals by popularity between two dates (default: current_date)
SELECT services_id, SUM(no_of_services_attended)
FROM referrals_questionnaire
WHERE input_date_referral BETWEEN '2019-01-01' AND current_date
GROUP BY services_id
ORDER BY SUM(no_of_services_attended) DESC
LIMIT 10;
WHERE client_id = 1;

-- Query 6
-- Sort referrals by popularity between two dates (default: current_date)
-- Note: JOIN goes after the FROM but before the WHERE
SELECT 
   referrals_questionnaire.services_id AS referrals_id, 
   services.services_name AS service_name, 
   SUM(no_of_services_attended)
FROM referrals_questionnaire
JOIN services 
   ON services.services_id = referrals_questionnaire.services_id
WHERE input_date_referral BETWEEN '2019-01-01' AND current_date
GROUP BY referrals_questionnaire.services_id, services.services_name
ORDER BY SUM(no_of_services_attended) DESC
LIMIT 10;

-- Query 7a
-- Current number of lonely (8-9), medium (5-7) and not lonely (3-4) risk clients 
SELECT total_ucla3, COUNT(total_ucla3)
FROM ucla3_questionnaire
GROUP BY total_ucla3
ORDER BY total_ucla3;

-- Query 7b
SELECT  COUNT(total_ucla3) FILTER (WHERE total_ucla3 >= 8) AS lonely_8_9,
   COUNT(total_ucla3) FILTER (WHERE total_ucla3 BETWEEN 5 AND 7) AS ok_5_6_7,
   COUNT(total_ucla3) FILTER (WHERE total_ucla3 <= 4) AS not_lonely_3_4
FROM ucla3_questionnaire;
