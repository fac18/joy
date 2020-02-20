const buildClientObject = function(someone) {
  return {
    firstname: someone[0][0].client_firstname
      ? someone[0][0].client_firstname
      : 'First name unknown',
    surname: someone[0][0].client_surname
      ? someone[0][0].client_surname
      : 'Last name unknown',
    DOB: someone[0][0].client_dob
      ? someone[0][0].client_dob
      : 'Date of birth unknown',
    initialAssessment: someone[1][0]
      ? someone[1][0].total_ucla3
      : 'Unavailable',
    currentAssessment: someone[2][0] ? someone[2][0].ucla3_id : 'Unavailable',
    currentAssessmentDate: someone[2][0]
      ? someone[2][0].current_assessment_date
      : 'No wellbeing assessments carried out',
    referredServices: someone[3].length
      ? someone[3]
      : 'No current services referred',
  };
};

export default buildClientObject;
