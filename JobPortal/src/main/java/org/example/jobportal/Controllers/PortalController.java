package org.example.jobportal.Controllers;



import org.example.jobportal.Entities.ApplicantDetails;
import org.example.jobportal.Services.HrService;
import org.example.jobportal.Services.UserService;
import lombok.RequiredArgsConstructor;
import org.example.jobportal.Entities.HRDetails;
import org.example.jobportal.Entities.Job;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/jobBoard")
public class PortalController {

    @Autowired
    private UserService userService;

    @Autowired
    private HrService hrService;

    @PostMapping("/register/user")
    public ResponseEntity<String> registerUser(@RequestBody ApplicantDetails userDetails){
        Boolean status= userService.registerUser(userDetails);
        if(status)
            return ResponseEntity.ok("User Registered Successfully");
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error!");
    }

    @PostMapping("/register/hr")
    public ResponseEntity<String> registerHR(@RequestBody HRDetails hrDetails){
        Boolean status= hrService.registerHr(hrDetails);
        if(status)
            return ResponseEntity.ok("HR Registered Successfully");
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error!");
    }

    @PostMapping("/postJob")
    public ResponseEntity<String> postJob(@RequestBody Job jobDetails){
        Boolean status= hrService.postJobOnPortal(jobDetails);
        if(status)
            return ResponseEntity.ok("Job Posted Successfully");
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error!");
    }

    @GetMapping("/getAllJobs")
    public ResponseEntity<Object> getAllJobs(){
        List<Job> jobs=hrService.getAllJobsList();
        return  ResponseEntity.ok(jobs);
    }
}
