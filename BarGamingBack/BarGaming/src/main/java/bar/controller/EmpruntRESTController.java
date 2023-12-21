package bar.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import bar.dao.IDAOEmprunt;
import bar.model.Emprunt;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/location")
public class EmpruntRESTController {

	@Autowired
	private IDAOEmprunt daoEmprunt;
	
	
	@GetMapping("/{id}")
	public Emprunt findById(@PathVariable Integer id) 
	{
		Optional<Emprunt> opt = daoEmprunt.findById(id);
		if(opt.isEmpty()) 
		{
			return null;
		}
		return (Emprunt) opt.get();
	}
	
	@GetMapping
	public List<Emprunt> findAll() 
	{
		return daoEmprunt.findAll();
	}
	
	
	@PostMapping
	public Emprunt insert(@Valid @RequestBody Emprunt emprunt, BindingResult result) 
	{
		if(result.hasErrors()) 
		{
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "La emprunt n'est pas valide...");
		}
		return daoEmprunt.save(emprunt);
	}
	
	@PutMapping("/{id}")
	public Emprunt update(@Valid @RequestBody Emprunt emprunt, BindingResult result) 
	{
		if(result.hasErrors()) 
		{
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "La emprunt n'est pas valide...");
		}
		return daoEmprunt.save(emprunt);
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable Integer id) 
	{
		daoEmprunt.deleteById(id);
	}
	
	
}
