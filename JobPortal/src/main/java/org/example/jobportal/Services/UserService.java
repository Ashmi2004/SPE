package org.example.jobportal.Services;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.example.jobportal.Configurations.JwtService;
import org.example.jobportal.Entities.ApplicantDetails;
import org.example.jobportal.Entities.User;
import org.example.jobportal.Repositories.ApplicantRepository;
import org.example.jobportal.Repositories.UserRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final ApplicantRepository applicantRepository;

    private final UserRepository userRepository;

    private final JwtService jwtService;
    private static final Logger logger = LogManager.getLogger(HrService.class);
    public Boolean registerUser(HttpServletRequest request, ApplicantDetails userDetails){

        try{
            logger.info("Inside userConsent service");
            Integer loginId = jwtService.extractId(request, "loginId");
            logger.info("loginId: " + loginId);
            User user = userRepository.findByLoginId(loginId);
            ApplicantDetails applicant = ApplicantDetails.builder()
                    .fullName(userDetails.getFullName())
                    .address(userDetails.getAddress())
                    .age(userDetails.getAge())
                    .gender(userDetails.getGender())
                    .resume(userDetails.getResume())
                    .experience(userDetails.getExperience())
                    .description(userDetails.getDescription())
                    .currentEmployer(userDetails.getCurrentEmployer())
                    .currentEmploymentStatus(userDetails.getCurrentEmploymentStatus())
                    .build();
            applicant.setUser(user);
            applicantRepository.save(applicant);
            return true;

        }catch(Exception e){
            System.out.println(e);
            return false;
        }

    }
}
