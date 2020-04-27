package com.trainer.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.trainer.entity.Trainer;
import com.trainer.repository.TrainerRepository;

@Service
public class TrainerServiceImpl implements TrainerService {

	@Autowired
	private TrainerRepository trainerRepository;
	
	@Override
	public List<Trainer> getTrainers() {
		return trainerRepository.findAll();
	}

	@Override
	public void saveTrainer(Trainer theEmployee) {
		trainerRepository.save(theEmployee);
		
	}

	@Override
	public Optional<Trainer> getTrainer(int theId) {
		Optional<Trainer> trainerObj = trainerRepository.findById(theId);
		return trainerObj;
		
	}

	@Override
	@Transactional
	public void deleteTrainer(int theId) {
		trainerRepository.deleteById(theId);
		
	}
	

}





