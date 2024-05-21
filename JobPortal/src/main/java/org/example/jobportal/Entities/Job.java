package org.example.jobportal.Entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.sql.Date;
import java.util.List;

@Entity
@Data
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="Job")
public class Job {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="jobId")
    private Integer jobId;

    @Column(name="jobTitle",nullable = false, length = 500)
    private String jobTitle;

    @Column(name="company",nullable = false, length = 100)
    private String company;

    @Column(name="jobType",nullable = false, length = 100)
    private String jobType;

    @Column(name="jobLevel",nullable = false, length = 100)
    private String jobLevel;

    @Column(name="experience")
    private Integer experience;

    @Column(name="jobLocation",nullable = false, length = 100)
    private String jobLocation;

    @Column(name="jobPostedOn",nullable = false)
    private Date jobPostedOn;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="hrId",referencedColumnName = "hrId")
    private HRDetails hrDetails;

    @JsonIgnore
    @OneToMany(mappedBy = "job",cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @JsonBackReference
    private List<ApplicantJobMapping> applicantJobMappings;
}
