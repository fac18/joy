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
-- (currently set to client 3, Kathy Black)
SELECT ucla3_id, input_date_ucla3 AS initial_assessment_date, total_ucla3, client_id
FROM ucla3_questionnaire
WHERE client_id = 3
ORDER BY input_date_ucla3 ASC
LIMIT 1;

-- Query 4a
-- Returns a single client's CURRENT assessment date and score
-- (currently set to client 3, Kathy Black)
SELECT ucla3_id, input_date_ucla3 AS current_assessment_date, total_ucla3, client_id
FROM ucla3_questionnaire
WHERE client_id = 3
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