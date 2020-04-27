package com.trainer.service;

import java.util.List;
import java.util.Optional;
import com.trainer.entity.Trainer;

public interface TrainerService {
	
	public List<Trainer> getTrainers();
	
	public void saveTrainer(Trainer theTrainer);
	
	public Optional<Trainer> getTrainer(int theId);
	
	public void deleteTrainer(int theId);

}
