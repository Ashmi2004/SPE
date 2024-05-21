package org.example.jobportal.Entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Entity
@Table(name="HRDetails")
public class HRDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="hrId")
    private Integer hrId;

    @Column(name="hrName",nullable = false, length = 200)
    private String hrName;

    @Column(name="orgName",nullable = false, length = 200)
    private String orgName;

    @Column(name="phone",nullable = false, length = 100)
    private String phone;

    @Column(name="email",nullable = false, length = 200)
    private String email;

    @JsonIgnore
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="loginId", referencedColumnName = "loginId")
    private User user;

    @JsonIgnore
    @OneToMany(mappedBy = "hrDetails", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonBackReference
    List<Job> jobs;
}
