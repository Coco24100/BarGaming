package bar.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import bar.dao.IDAOCompte;
import bar.model.Admin;
import bar.model.Compte;
import jakarta.validation.Valid;

/*
@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "*" )
public class AdminRestController {

	@Autowired
	private IDAOCompte daoCompte;
	
	
	@GetMapping("/{id}")
	public Admin findById(@PathVariable Integer id) 
	{
		Optional<Compte> opt = daoCompte.findById(id);
		if(opt.isEmpty()) 
		{
			return null;
		}
		return (Admin) opt.get();
	}
	
	@GetMapping
	public List<Admin> findAll() 
	{
		return daoCompte.findAllAdmin();
	}
	
	
	@PostMapping
	public Admin insert(@Valid @RequestBody Admin admin, BindingResult result) 
	{
		if(result.hasErrors()) 
		{
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Le compte n'est pas valide...");
		}
		return (Admin) daoCompte.save(admin);
	}
	
	@PutMapping("/{id}")
	public Admin update(@Valid @RequestBody Admin admin, BindingResult result) 
	{
		if(result.hasErrors()) 
		{
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Le compte n'est pas valide...");
		}
		return (Admin) daoCompte.save(admin);
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable Integer id) 
	{
		daoCompte.deleteById(id);
	}
	
} */
