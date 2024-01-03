package bar.controller;

import java.util.List;
import java.util.Optional;

import org.hibernate.annotations.Cascade;
import org.springframework.beans.BeanUtils;
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

import bar.controller.dto.ConnexionRequest;
import bar.dao.IDAOCompte;
import bar.model.Admin;
import bar.model.Client;
import bar.model.Compte;
import bar.model.Roles;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*" )
public class CompteRESTController {

	private IDAOCompte daoCompte;

	public CompteRESTController(IDAOCompte daoCompte) {
		super();
		this.daoCompte = daoCompte;
	}

	@PostMapping("/connexion")
	public Compte connexion(@RequestBody ConnexionRequest connexionRequest) {
		Optional<Compte> opt = daoCompte.findByUsernameAndPassword(connexionRequest.getLogin(),
				connexionRequest.getPassword());

		if (opt.isEmpty()) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}

		return opt.get();
	}

	@GetMapping("/compte/client")
    public List<Client> findAllClient() 
    {
        return (List<Client>) daoCompte.findAllClient();
    }
	
	@GetMapping("/compte")
	public List<Compte> findAll() {
		return daoCompte.findAll();
	}

	@GetMapping("/compte/{id}")
	public Compte findById(@PathVariable Integer id) {
		return daoCompte.findById(id).get();
	}

	@PostMapping("/compte")
	public Compte create(@RequestBody Compte compte) {
		compte = daoCompte.save(compte);

		return compte;
	}

	@PutMapping("/compte/{id}")
	public Compte create(@RequestBody Compte compte, @PathVariable Integer id) {
		if (id != compte.getId() || !daoCompte.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}

		compte = daoCompte.save(compte);

		return compte;
	}

	@DeleteMapping("/compte/{id}")
	public void delete(@PathVariable Integer id) {
		daoCompte.deleteById(id);
	}

	@PostMapping("/compte/client")
    public Client insert(@RequestBody Client client) 
    {

        return daoCompte.save(client);
    }
    @PostMapping("/compte/admin")
    public Admin insert(@RequestBody Admin admin) 
    {

        return daoCompte.save(admin);
    }
    
    @PutMapping("/compte/client/{id}")
    public Client update(@RequestBody Client client) 
    {

        return daoCompte.save(client);
    }
    @PutMapping("/compte/admin/{id}")
    public Admin update(@RequestBody Admin admin) 
    {

        return daoCompte.save(admin);
    }
}

