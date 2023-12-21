package bar.controller;

import java.util.ArrayList;
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

import bar.controller.dto.ClientResponse;
import bar.controller.dto.EmpruntResponse;
import bar.dao.IDAOEmprunt;
import bar.model.Client;
import bar.model.Emprunt;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/location")
public class EmpruntRESTController {

	@Autowired
	private IDAOEmprunt daoEmprunt;
	
	
	@GetMapping("/{id}")
	public EmpruntResponse findById(@PathVariable Integer id) 
	{
		Emprunt emprunt = daoEmprunt.findById(id).get();
		EmpruntResponse empruntResp = new EmpruntResponse();

		empruntResp.fromEmprunt(emprunt);

		return empruntResp;
	}
	
	@GetMapping
	public List<EmpruntResponse> findAll() 
	{
		List<Emprunt> emprunts = daoEmprunt.findAll();
		
		List<EmpruntResponse> empruntsResp = new ArrayList<>();

		for (Emprunt emprunt : emprunts) {
			EmpruntResponse empruntResp = new EmpruntResponse();
			empruntResp.fromEmprunt(emprunt);
			empruntsResp.add(empruntResp);
		}
	
		return empruntsResp;
		
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
