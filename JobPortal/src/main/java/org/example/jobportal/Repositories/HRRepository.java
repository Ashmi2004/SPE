package org.example.jobportal.Repositories;

import org.example.jobportal.Entities.HRDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HRRepository extends JpaRepository<HRDetails,Integer> {
    HRDetails findHRByHrId(int id);
}
