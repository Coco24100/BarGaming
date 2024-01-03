package bar.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import bar.model.Admin;
import bar.model.Client;
import bar.model.Compte;


public interface IDAOCompte extends JpaRepository<Compte,Integer> {
	@Query("from Admin")
	public List<Admin> findAllAdmin();
	
	@Query("from Client")
	public List<Client> findAllClient();
	
	@Query("select c from Compte c where c.username = ?1 and c.password = ?2")
	Optional<Compte> findByUsernameAndPassword(String username, String password);
}
