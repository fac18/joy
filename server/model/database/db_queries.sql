-- List of total number of services available
SELECT COUNT (client_id) FROM client;
SELECT COUNT (services_id) FROM services;

-- Query 1 (from Roshan)
-- List of all wellbeing assessments by client id and total assessment score
SELECT input_date_ucla3, client_id, (q1_companionship + q2_left_out + q3_isolated) AS total_ucla3
FROM ucla3_questionnaire 
ORDER BY client_id, input_date_ucla3 ASC;

-- Query 2 (from Roshan)
-- List of all service referrals by client id and services id 
SELECT input_date_referral, client_id, services_id 
FROM referrals_questionnaire 
ORDER BY client_id, services_id ASC;

-- Query 3 (from Nikke)
-- List of all wellbeing assessment scores and services referrals by date 
SELECT input_date_ucla3, ucla3_questionnaire.client_id, (q1_companionship + q2_left_out + q3_isolated) AS total_ucla3, input_date_referral, referrals_questionnaire.client_id, services_id 
FROM ucla3_questionnaire
INNER JOIN referrals_questionnaire
ON ucla3_questionnaire.input_date_ucla3 = referrals_questionnaire.input_date_referral
AND ucla3_questionnaire.client_id = referrals_questionnaire.client_id
ORDER BY ucla3_questionnaire.client_id, input_date_ucla3 ASC;

-- Query 4 
-- Return initial and most recent assessment scores for each client
SELECT client_id, MIN(input_date_ucla3) AS initial_assessment_date
FROM ucla3_questionnaire
GROUP BY client_id
ORDER BY client_id ASC;


SELECT client_id, input_date_ucla3, total_ucla3
FROM ucla3_questionnaire
WHERE input_date_ucla3
= (SELECT MIN(input_date_ucla3) 
   FROM ucla3_questionnaire);