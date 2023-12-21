package bar.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import bar.model.Jeux;
import bar.model.JeuxSociete;
import bar.model.JeuxVideo;

public interface IDAOJeux extends JpaRepository<Jeux,Integer>{

	@Query("from JeuxVideo")
	public List<JeuxVideo> findAllJeuxVideo();
	
	@Query("from JeuxSociete")
	public List<JeuxSociete> findAllJeuxSociete();
	

	
}
