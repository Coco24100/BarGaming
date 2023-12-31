package bar.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import bar.model.Utilisateur;


public interface IDAOUtilisateur extends JpaRepository<Utilisateur, Integer>{
	
	Optional<Utilisateur> findByUsername(String username);

	@Query("select u from Utilisateur u where u.username = ?1 and u.password = ?2")
	Optional<Utilisateur> findByUsernameAndPassword(String username, String password);
	
}

