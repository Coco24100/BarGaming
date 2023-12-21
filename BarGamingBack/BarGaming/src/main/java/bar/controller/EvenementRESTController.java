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

import bar.dao.IDAOEvenement;
import bar.model.Evenement;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/evenement")
public class EvenementRESTController {

	@Autowired
	private IDAOEvenement daoEvenement;
	
	
	@GetMapping("/{id}")
	public Evenement findById(@PathVariable Integer id) 
	{
		Optional<Evenement> opt = daoEvenement.findById(id);
		if(opt.isEmpty()) 
		{
			return null;
		}
		return (Evenement) opt.get();
	}
	
	@GetMapping
	public List<Evenement> findAll() 
	{
		return daoEvenement.findAll();
	}
	
	
	@PostMapping
	public Evenement insert(@Valid @RequestBody Evenement evenement, BindingResult result) 
	{
		if(result.hasErrors()) 
		{
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "La evenement n'est pas valide...");
		}
		return daoEvenement.save(evenement);
	}
	
	@PutMapping("/{id}")
	public Evenement update(@Valid @RequestBody Evenement evenement, BindingResult result) 
	{
		if(result.hasErrors()) 
		{
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "La evenement n'est pas valide...");
		}
		return daoEvenement.save(evenement);
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable Integer id) 
	{
		daoEvenement.deleteById(id);
	}
	
	
}
