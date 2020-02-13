-- Query 1 (from Roshan)
SELECT input_date_ucla3, client_id, (q1_companionship + q2_left_out + q3_isolated) AS total_ucla3
FROM ucla3_questionnaire 
ORDER BY client_id, input_date_ucla3 ASC;

-- Query 2 (from Roshan)
SELECT input_date_referral, client_id, services_id 
FROM referrals_questionnaire 
ORDER BY client_id, services_id ASC;

-- Query 3 (from Nikke)
SELECT input_date_ucla3, ucla3_questionnaire.client_id, (q1_companionship + q2_left_out + q3_isolated) AS total_ucla3, input_date_referral, referrals_questionnaire.client_id, services_id 
FROM ucla3_questionnaire
INNER JOIN referrals_questionnaire
ON ucla3_questionnaire.input_date_ucla3 = referrals_questionnaire.input_date_referral
AND ucla3_questionnaire.client_id = referrals_questionnaire.client_id
ORDER BY ucla3_questionnaire.client_id, input_date_ucla3 ASC;

