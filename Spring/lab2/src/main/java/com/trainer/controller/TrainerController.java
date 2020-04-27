package com.trainer.controller;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.trainer.entity.Trainer;
import com.trainer.service.TrainerService;

@Controller
@RequestMapping("/")
public class TrainerController {

	private static final Logger LOG = LoggerFactory.getLogger(TrainerController.class);
	
	@Autowired
	private TrainerService trainerService;
	
	@GetMapping("/login")
	public String login()
	{
		return "login";
	}
	
	@GetMapping("/main")
	public String buttons()
	{
		return "buttons";
	}
	
	@GetMapping("/addTrainer")
	public String addTrainer()
	{
		return "addTrainer";
	}
	
	@GetMapping("/deleteTrainer")
	public String deleteTrainer()
	{
		return "deleteTrainer";
	}
	
	
	@GetMapping("/list")
	public String listCustomer(Model theModel)
	{
		List<Trainer> theTrainers = trainerService.getTrainers();
		theModel.addAttribute("trainers", theTrainers);
		System.out.println("List of Data : "+theTrainers);
		return "Trainer-list";		
	}
	
	@GetMapping("/showForm")
	 public String showFormForAdd(Model theModel){
		LOG.debug("inside show customer-form handler method");
		Trainer theTrainer = new Trainer();
		theModel.addAttribute("trainer",theTrainer);
		
		return "Trainer-form";	
		
	}
	
	@PostMapping("/save")
	public String save(@ModelAttribute("trainer") Trainer theTrainer)
	{
		trainerService.saveTrainer(theTrainer);
		return "redirect:/Trainer/main";
	}
	
	
	
	@PostMapping("/saveTrainer")
	public String saveTrainer(@ModelAttribute("trainer") Trainer theTrainer)
	{
		trainerService.saveTrainer(theTrainer);
		return "redirect:/Trainer/list";
	}
	
	@GetMapping("/updateForm")
	public String showFormForUpdate(@RequestParam("trainerId") int theId, Model theModel){
		Optional<Trainer> theTrainer = trainerService.getTrainer(theId);
		theModel.addAttribute("trainer", theTrainer);
		return "Trainer-form";
		
	}
	@PostMapping("/delete")
	public String deleteTrainer(@RequestParam("id") int theId){
		trainerService.deleteTrainer(theId);
		return "redirect:/Trainer/list";
	}
		
}
