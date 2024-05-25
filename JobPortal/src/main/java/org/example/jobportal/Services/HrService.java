package org.example.jobportal.Services;


import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.example.jobportal.Configurations.JwtService;
import org.example.jobportal.Entities.ApplicantDetails;
import org.example.jobportal.Entities.HRDetails;
import org.example.jobportal.Entities.Job;
import org.example.jobportal.Entities.User;
import org.example.jobportal.Repositories.HRRepository;
import org.example.jobportal.Repositories.JobRepository;
import org.example.jobportal.Repositories.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class HrService {
    private final HRRepository hrRepository;

    private final JobRepository jobRepository;

    private final UserRepository userRepository;

    private final JwtService jwtService;
    private static final Logger logger = LogManager.getLogger(HrService.class);
    public Boolean registerHr(HttpServletRequest request, HRDetails hrDetails){
        try{
            logger.info("Inside userConsent service");
            Integer loginId = jwtService.extractId(request, "loginId");
            logger.info("loginId: " + loginId);
            User user = userRepository.findByLoginId(loginId);
            HRDetails hr = HRDetails.builder()
                    .hrName(hrDetails.getHrName())
                    .orgName(hrDetails.getOrgName())
                    .email(hrDetails.getEmail())
                    .phone(hrDetails.getPhone())
                    .build();
            hr.setUser(user);
            hrRepository.save(hr);
            return true;


        }catch(Exception e){
            System.out.println(e);
            return false;
        }

    }

    public Boolean postJobOnPortal(HttpServletRequest request, Job jobDetails){
        try{
            logger.info("Inside userConsent service");
            Integer loginId = jwtService.extractId(request, "loginId");
            User user = userRepository.findByLoginId(loginId);
            Job job = Job.builder()
                    .jobTitle(jobDetails.getJobTitle())
                    .jobLevel(jobDetails.getJobLevel())
                    .jobLocation(jobDetails.getJobLocation())
                    .jobPostedOn(jobDetails.getJobPostedOn())
                    .jobType(jobDetails.getJobType())
                    .company(jobDetails.getCompany())
                    .experience(jobDetails.getExperience())
                    .build();
            job.setHrDetails(user.getHrDetails());
            jobRepository.save(job);
            return true;

        }catch(Exception e){
            System.out.println(e);
            return false;
        }
    }

    public List<Job> getAllJobsList(){
        logger.info("In Get all jobs service");
        return jobRepository.findAll();

    }
}
