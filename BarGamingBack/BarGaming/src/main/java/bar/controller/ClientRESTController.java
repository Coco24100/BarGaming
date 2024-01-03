package bar.controller;

import java.util.ArrayList;
import java.util.List;

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

import bar.controller.dto.ClientResponse;
import bar.dao.IDAOCompte;
import bar.model.Client;
import jakarta.validation.Valid;

/*@RestController
@RequestMapping("/api/client")
@CrossOrigin(origins = "*" )
public class ClientRESTController {

	@Autowired
	private IDAOCompte daoCompte;
	
	
	@GetMapping("/{id}")
	public ClientResponse findById(@PathVariable Integer id) 
	{
		Client client= (Client) daoCompte.findById(id).get();
		
		ClientResponse clientResp = new ClientResponse();

		clientResp.fromClient(client);

		return clientResp;
	}
	
	@GetMapping
	public List<ClientResponse> findAll() 
	{
		List<Client> clients = (List<Client>) daoCompte.findAllClient();
		
		List<ClientResponse> clientsResp = new ArrayList<>();

		for (Client client : clients) {
		ClientResponse clientResp = new ClientResponse();
			clientResp.fromClient(client);
			clientsResp.add(clientResp);
		}
	
		return clientsResp;
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
	
	
}*/
