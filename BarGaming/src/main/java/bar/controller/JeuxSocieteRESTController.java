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

import bar.dao.IDAOJeux;
import bar.model.Jeux;
import bar.model.JeuxSociete;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/jeuxsociete")
public class JeuxSocieteRESTController {

	@Autowired
	private IDAOJeux daoJeux;
	
	
	@GetMapping("/{id}")
	public JeuxSociete findById(@PathVariable Integer id) 
	{
		Optional<Jeux> opt = daoJeux.findById(id);
		if(opt.isEmpty()) 
		{
			return null;
		}
		return (JeuxSociete) opt.get();
	}
	
	@GetMapping
	public List<JeuxSociete> findAll() 
	{
		return daoJeux.findAllJeuxSociete();
	}
	
	
	@PostMapping
	public JeuxSociete insert(@Valid @RequestBody JeuxSociete jeux, BindingResult result) 
	{
		if(result.hasErrors()) 
		{
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Le Jeux n'est pas valide...");
		}
		return daoJeux.save(jeux);
	}
	
	@PutMapping("/{id}")
	public JeuxSociete update(@Valid @RequestBody JeuxSociete jeux, BindingResult result) 
	{
		if(result.hasErrors()) 
		{
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Le Jeux n'est pas valide...");
		}
		return daoJeux.save(jeux);
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable Integer id) 
	{
		daoJeux.deleteById(id);
	}
	
	
	
}
