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

import bar.dao.IDAOCompte;
import bar.model.Client;
import bar.model.Compte;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/client")
public class ClientRESTController {

	@Autowired
	private IDAOCompte daoCompte;
	
	
	@GetMapping("/{id}")
	public Client findById(@PathVariable Integer id) 
	{
		Optional<Compte> opt = daoCompte.findById(id);
		if(opt.isEmpty()) 
		{
			return null;
		}
		return (Client) opt.get();
	}
	
	@GetMapping
	public List<Client> findAll() 
	{
		return daoCompte.findAllClient();
	}
	
	
	@PostMapping
	public Client insert(@Valid @RequestBody Client client, BindingResult result) 
	{
		if(result.hasErrors()) 
		{
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "La client n'est pas valide...");
		}
		return daoCompte.save(client);
	}
	
	@PutMapping("/{id}")
	public Client update(@Valid @RequestBody Client client, BindingResult result) 
	{
		if(result.hasErrors()) 
		{
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "La client n'est pas valide...");
		}
		return daoCompte.save(client);
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable Integer id) 
	{
		daoCompte.deleteById(id);
	}
	
	
}
