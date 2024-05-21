package org.example.jobportal.Services;


import lombok.RequiredArgsConstructor;
import org.example.jobportal.Entities.HRDetails;
import org.example.jobportal.Entities.Job;
import org.example.jobportal.Repositories.HRRepository;
import org.example.jobportal.Repositories.JobRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class HrService {
    private final HRRepository hrRepository;

    private final JobRepository jobRepository;
    public Boolean registerHr(HRDetails hrDetails){
        try{
            HRDetails hr = HRDetails.builder()
                    .hrName(hrDetails.getHrName())
                    .orgName(hrDetails.getOrgName())
                    .email(hrDetails.getEmail())
                    .phone(hrDetails.getPhone())
                    .build();
            hrRepository.save(hr);
            return true;

        }catch(Exception e){
            System.out.println(e);
            return false;
        }

    }

    public Boolean postJobOnPortal(Job jobDetails){
        try{
            Job job = Job.builder()
                    .jobTitle(jobDetails.getJobTitle())
                    .jobLevel(jobDetails.getJobLevel())
                    .jobLocation(jobDetails.getJobLocation())
                    .jobPostedOn(jobDetails.getJobPostedOn())
                    .jobType(jobDetails.getJobType())
                    .company(jobDetails.getCompany())
                    .experience(jobDetails.getExperience())
                    .build();
            jobRepository.save(job);
            return true;

        }catch(Exception e){
            System.out.println(e);
            return false;
        }
    }

    public List<Job> getAllJobsList(){
        return jobRepository.findAll();

    }
}
