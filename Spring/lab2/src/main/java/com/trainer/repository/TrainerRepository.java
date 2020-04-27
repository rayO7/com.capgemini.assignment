package com.trainer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.trainer.entity.Trainer;


@Repository("trainerRepository")
public interface TrainerRepository extends JpaRepository<Trainer, Integer> {

}
