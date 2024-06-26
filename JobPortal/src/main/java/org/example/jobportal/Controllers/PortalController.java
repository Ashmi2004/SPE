package org.example.jobportal.Controllers;



import jakarta.servlet.http.HttpServletRequest;
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
import lombok.extern.slf4j.Slf4j;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/jobBoard")
public class PortalController {

    @Autowired
    private UserService userService;

    @Autowired
    private HrService hrService;

    @PostMapping("/addDetails/user")
    public ResponseEntity<String> registerUser(HttpServletRequest request, @RequestBody ApplicantDetails userDetails){
        Boolean status= userService.registerUser(request, userDetails);
        if(status)
            return ResponseEntity.ok("User details added Successfully");
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error!");
    }

    @PostMapping("/addDetails/hr")
    public ResponseEntity<String> registerHR(HttpServletRequest request, @RequestBody HRDetails hrDetails){
        Boolean status= hrService.registerHr(request, hrDetails);
        if(status)
            return ResponseEntity.ok("HR Details added Successfully");
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error!");
    }

    @PostMapping("/postJob")
    public ResponseEntity<String> postJob(HttpServletRequest request,@RequestBody Job jobDetails){
        Boolean status= hrService.postJobOnPortal(request,jobDetails);
        if(status) {
            log.info("ELK: Job posted successfully");
            return ResponseEntity.ok("Job Posted Successfully");

        }
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error!");
    }

    @GetMapping("/getAllJobs")
    public ResponseEntity<Object> getAllJobs(){
        log.info("ELK: Get Jobs");
        List<Job> jobs=hrService.getAllJobsList();
        return  ResponseEntity.ok(jobs);
    }
}
