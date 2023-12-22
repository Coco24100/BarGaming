package bar.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
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
//import quest.controller.dto.ConnexionRequest;
//import quest.controller.dto.InscriptionRequest;
import bar.dao.IDAOUtilisateur;
import bar.model.Compte;
import bar.model.Roles;
import bar.model.Utilisateur;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api")
public class UtilisateurRESTController {
	/*

	private IDAOUtilisateur daoUtilisateur;

	private IDAOCompte daoCompte;

	public UtilisateurRESTController(IDAOUtilisateur daoUtilisateur, IDAOCompte daoCompte) {
		super();
		this.daoUtilisateur = daoUtilisateur;
		this.daoCompte = daoCompte;
	}

	@PostMapping("/connexion")
	public Utilisateur connexion(@RequestBody ConnexionRequest connexionRequest) {
		Optional<Utilisateur> opt = daoUtilisateur.findByUsernameAndPassword(connexionRequest.getLogin(),
				connexionRequest.getPassword());

		if (opt.isEmpty()) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}

		return opt.get();
	}

	@GetMapping("/utilisateur")
	public List<Utilisateur> findAll() {
		return daoUtilisateur.findAll();
	}

	@GetMapping("/utilisateur/{id}")
	public Utilisateur findById(@PathVariable Integer id) {
		return daoUtilisateur.findById(id).get();
	}

	@PostMapping("/utilisateur")
	public Utilisateur create(@RequestBody Utilisateur utilisateur) {
		utilisateur = daoUtilisateur.save(utilisateur);

		return utilisateur;
	}

	@PutMapping("/utilisateur/{id}")
	public Utilisateur create(@RequestBody Utilisateur utilisateur, @PathVariable Integer id) {
		if (id != utilisateur.getId() || !daoUtilisateur.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}

		utilisateur = daoUtilisateur.save(utilisateur);

		return utilisateur;
	}

	@DeleteMapping("/utilisateur/{id}")
	public void delete(@PathVariable Integer id) {
		daoUtilisateur.deleteById(id);
	}

	@PostMapping("/utilisateur/inscription")
	public Utilisateur inscription(@RequestBody @Valid InscriptionRequest inscriptionRequest, BindingResult result) {
		if(result.hasErrors()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
		}

		Utilisateur utilisateur = new Utilisateur();

		BeanUtils.copyProperties(inscriptionRequest, utilisateur);

		utilisateur.getRoles().add(Roles.CLIENT);

		utilisateur = daoUtilisateur.save(utilisateur);

		Compte compte = new Compte();

		BeanUtils.copyProperties(inscriptionRequest, compte);

		compte = daoCompte.save(compte);

		return utilisateur;
	}
	*/
}

