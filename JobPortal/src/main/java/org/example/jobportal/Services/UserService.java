package org.example.jobportal.Services;

import lombok.RequiredArgsConstructor;
import org.example.jobportal.Entities.ApplicantDetails;
import org.example.jobportal.Repositories.ApplicantRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final ApplicantRepository applicantRepository;
    public Boolean registerUser(ApplicantDetails userDetails){

        try{

            ApplicantDetails user = ApplicantDetails.builder()
                    .fullName(userDetails.getFullName())
                    .address(userDetails.getAddress())
                    .age(userDetails.getAge())
                    .gender(userDetails.getGender())
                    .experience(userDetails.getExperience())
                    .description(userDetails.getDescription())
                    .currentEmployer(userDetails.getCurrentEmployer())
                    .currentEmploymentStatus(userDetails.getCurrentEmploymentStatus())
                    .build();
            applicantRepository.save(user);
            return true;

        }catch(Exception e){
            System.out.println(e);
            return false;
        }

    }
}
