package org.example.jobportal.Entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
@Builder
@Entity
@Table(name="ApplicantDetails")
public class ApplicantDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="applicantId")
    private Integer applicantId;

    @Column(name="fullName",nullable = false, length = 200)
    private String fullName;

    @Column(name="age",nullable = false)
    private Integer age;

    @Column(name="gender",nullable = false, length = 50)
    private String gender;

    @Column(name="address",nullable = false, length = 300)
    private String address;

    @Column(name="experience",nullable = false)
    private Integer experience;

    @Column(name="currentEmploymentStatus",nullable = false, length = 50)
    private String currentEmploymentStatus;

    @Column(name="currentEmployer", length = 100)
    private String currentEmployer;

    @Column(name="resume",nullable = false, length = 100)
    private String resume;

    @Column(name="description",nullable = false, length = 200)
    private String description;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "loginId", referencedColumnName = "loginId")
    private User user;

    @JsonIgnore
    @OneToMany(mappedBy = "applicantDetails",cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @JsonBackReference
    List<ApplicantJobMapping> applicantJobMappings;
}
